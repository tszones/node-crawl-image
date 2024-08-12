const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 图片 URL 列表
// List of image URLs
const imageUrls = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
];

// 下载图片的函数
// Function to download images
const downloadImage = async (url, filepath) => {
  const writer = fs.createWriteStream(filepath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

// 创建存储图片的文件夹
// Create directory to store images
const downloadDir = path.resolve(__dirname, 'downloaded_images');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

// 下载所有图片
// Download all images
const downloadAllImages = async () => {
  for (const url of imageUrls) {
    const filename = path.basename(url);
    const filepath = path.resolve(downloadDir, filename);
    try {
      await downloadImage(url, filepath);
      console.log(`Downloaded ${filename}`);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error);
    }
  }
};

downloadAllImages();
