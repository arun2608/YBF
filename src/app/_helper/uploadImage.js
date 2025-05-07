import { writeFile } from "fs/promises";

const uploadImage = async (image,image_folder) => {
    let imagePath;
    if (image != "undefined") {
        const imageByteData = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageByteData);
        imagePath = `${Date.now()}-${image.name}`
        await writeFile(`./public/uploads/${image_folder}/${imagePath}`, imageBuffer);
    }
    return imagePath;
}

export default uploadImage;