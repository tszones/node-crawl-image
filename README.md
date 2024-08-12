# Image Downloader

This Node.js script allows you to download a set of images from specified URLs and save them to a local directory. It's useful for quickly fetching images for offline use or for batch downloading a collection of images.

## Features

- **Batch Download**: Download multiple images from a list of URLs.
- **Stream-Based Downloading**: Efficiently handles large files using streams.
- **Automatic Directory Creation**: Creates the target directory if it doesn't exist.

## Installation

1. **Clone the repository**:

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

## Usage

1. **Edit the list of image URLs**:
   Open `index.js` and modify the `imageUrls` array to include the URLs of the images you want to download.

2. **Run the script**:

   ```bash
   pnpm start
   ```

   This will download all images specified in the `imageUrls` array and save them to the `downloaded_images` directory.

## Example

Here's an example of how to use the script:

1. **Original `imageUrls` array** in `index.js`:

   ```javascript
   const imageUrls = [
     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
     // Add more URLs as needed
   ];
   ```

2. **Run the script**:

   ```bash
   pnpm start
   ```

   You'll see output like:

   ```
   Downloaded image.jpg
   Downloaded image-1.jpg
   Downloaded image-2.jpg
   ```

   And the images will be saved in the `downloaded_images` directory.

## Troubleshooting

- **Failed to download an image**:
  If an image fails to download, check the URL for correctness and ensure that your internet connection is stable. The script will log any errors encountered during the download process.

## Contributing

If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

Thank you for using the Image Downloader script! We hope it helps you streamline your image downloading needs.
