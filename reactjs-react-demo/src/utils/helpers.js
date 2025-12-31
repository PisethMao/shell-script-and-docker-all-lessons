export const handleLongText = (text="", number=0) => {
    if (text.length > number) {
        return text.substring(0, number) + "..."
    }
    return text;
}

// our own algorithm in order to fix image url response !

// this will fix the array of images with [" "]
export const correctImageUrls = (images) => {
    if (images.length == 1) {
        let imageArrays = JSON.parse(images[0])
        images[0] = imageArrays[0]
    } else {
        images[0] = images[0].replace('[', '')
        images[images.length - 1] = images[images.length - 1].replace(']', '')
    }
    // remove "" in each image url 
    images = images.map(image =>
        image.replace(/"/g, '')
    )
    return images
}

// this will fix all the products that has broken images using method above
export const correctAllProducts=(products)=>{
    let  oldProducts = products.map(
        pro=> {
            let newProduct = pro; 
            newProduct.images = correctImageUrls(pro.images)
            return newProduct; 
        } 
    )
    return oldProducts; 
}