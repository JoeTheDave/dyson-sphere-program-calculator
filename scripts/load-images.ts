import fs from 'fs'
import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

const dataUrl = 'https://dsp-wiki.com/Items'
const dataHtmlPath = './src/assets/data.html'
const imagesDirectoryPath = './src/assets/images'
const imageIndexFilePath = './src/lib/images.tsx'

const loadHtml = async () => {
  let html: string = ''
  if (fs.existsSync(dataHtmlPath)) {
    html = fs.readFileSync(dataHtmlPath).toString()
  } else {
    const response = await fetch(dataUrl)
    html = await response.text()
    fs.writeFileSync(dataHtmlPath, html)
  }
  return html
}

const cleanImagesDirectory = () => {
  if (fs.existsSync(imagesDirectoryPath)) {
    fs.rmSync(imagesDirectoryPath, { recursive: true, force: true })
  }
  fs.mkdirSync(imagesDirectoryPath)
}

const downloadImage = async (imageUrl: string) => {
  const imgName = imageUrl
    .split('Icon_')[1]
    .replace(/_/g, '-')
    .toLowerCase()
    .replace('-mk.i.', '-mk1.')
    .replace('-mk.ii.', '-mk2.')
    .replace('-mk.iii.', '-mk3.')

  await fetch(imageUrl).then(res => {
    if (res.body) {
      res.body.pipe(fs.createWriteStream(`${imagesDirectoryPath}/${imgName}`))
    }
  })
}

const generateImageName = (file: string) => file.replace('.png', '').replace(/-./g, x => x[1].toUpperCase())

const createImageIndex = () => {
  if (fs.existsSync(imageIndexFilePath)) {
    fs.unlinkSync(imageIndexFilePath)
  }

  const files = fs.readdirSync(imagesDirectoryPath)
  fs.writeFileSync(
    imageIndexFilePath,
    `${files.map(file => `import ${generateImageName(file)} from '../assets/images/${file}'`).join('\n')}

export default {
${files.map(file => `  ${generateImageName(file)},`).join('\n')}
}`,
  )
}

const loadImages = async () => {
  const html = await loadHtml()
  const $ = cheerio.load(html)
  const itemImgTags = $($('tbody')[0]).find('source').toArray()
  const buildingImgTags = $($('tbody')[1]).find('source').toArray()
  const imgTags = [...itemImgTags, ...buildingImgTags]
  const imageUrls = imgTags
    .map(element => $(element).attr('srcset'))
    .map(srcList => {
      const sources = (srcList || '').split(', ')
      return sources[sources.length - 1].split(' ')[0]
    })
  cleanImagesDirectory()
  await Promise.all(imageUrls.map(url => downloadImage(url)))
  createImageIndex()
}

loadImages()
