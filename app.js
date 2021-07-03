
var mainImageDIv = document.getElementById('mainDiv')
var images = mainImageDIv.getElementsByTagName("img")
var caps = mainImageDIv.getElementsByTagName("figcaption")
var sources = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg", "images/13.jpg", "images/14.jpg"]
var imagesCaptions = ['IPhone X', 'IPhone11', 'IPhone 12', 'Samsung Galaxy S8', 'Samsung Galaxy S9', 'Samsung Galaxy S10', 'Oppo f8', 'Oppo f9', 'Oppo f10', 'Infinix Hot8', 'Infinix Hot9', 'HInfinix Hot10', 'Infinix PocoX3', 'Infinix Poco8C']
for (var i = 0; i < images.length; i++) {
    images[i].src = sources[i]
    for (var j = 0; j < caps.length; j++) {
        caps[j].innerHTML = imagesCaptions[j]
    }
}
var phones = {
    iphone: {
        iphonex: {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front ",
            src: "images/1.jpg"
        },
        iphone11: {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front ",
            src: "images/2.jpg"
        },
        iphone12: {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front ",
            src: "images/3.jpg"
        }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "images/4.jpg"
        },
        s9: {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "images/5.jpg"
        },
        s10: {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "images/6.jpg"
        }
    },
    oppo: {
        f8: {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "images/7.jpg"
        },
        f9: {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            src: "images/8.jpg"
        },
        f10: {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/9.jpg"
        }
    },
    infinix: {
        hot8: {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/10.jpg"
        },
        hot9: {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/11.jpg"
        },
        hot10: {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/12.jpg"
        }
    },
    poco: {
        pocox3: {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/13.jpg"
        },
        Poco8c: {
            brand: "Poco",
            model: "Poco 8C",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            src: "images/14.jpg"
        }
    }
}
var brandInput = document.getElementById("brandInput")
var modelInput = document.getElementById("modelInput")







function search() {
    var brand = brandInput.value.toLowerCase()
    var model = modelInput.value.toLowerCase()

        document.getElementById('mainDiv').innerHTML = ""
        var mainDiv = document.getElementById('mainDivSearch')
        var image = document.getElementById("image")
        image.src = phones[brand][model].src
        document.getElementById("brand").innerHTML = "Brand :" + " " + phones[brand][model].brand
        document.getElementById("name").innerHTML = "Model :" + " " + phones[brand][model].model
        document.getElementById("price").innerHTML = "Price :" + " " + phones[brand][model].price
        document.getElementById("storage").innerHTML = "Storage :" + " " + phones[brand][model].storage
        document.getElementById("camera").innerHTML = "Camera :" + " " + phones[brand][model].camera
        document.getElementById("color").innerHTML = "Color :" + " " + phones[brand][model].color

}









