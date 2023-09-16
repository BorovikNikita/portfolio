const Names = [
    "day-skin0",
    "day-left-arm0",
    "day-right-arm0",
    "day-stone-axe",
    "inv-hachet-click",
    "inv-stone-pickaxe-click",
    "day-hachet",
    "day-ground-stone-pickaxe",
    "night-ground-wood-spear",
    "night-ground-stone0",
]

class GameImage {
    image = new Image()
    name
    constructor(name, {owner, callback}) {
        this.name = name
        this.image.onload = () => {
            callback.apply(owner, [this])
        }
        this.image.src ="/game/media/img/"+ name + ".png"
    }
}

class GameImages {
    images = []
    waitLoadCounter = 0
    loaded = false
    constructor() {
        Names.forEach(name => {
            this.waitLoadCounter++;
            this.images.push(new GameImage(name, {
                owner: this,
                callback: this.onLoadImage
            }))
        })
    }

    onLoadImage(img) {
        this.waitLoadCounter--
        if (this.waitLoadCounter === 0) {
            this.loaded = true
        }
    }
    getImage(name){
        for (let i = 0; i < this.images.length; i++) {
            const img = this.images[i]
            if (img.name === name) return img
        }
    }
}

export default GameImages