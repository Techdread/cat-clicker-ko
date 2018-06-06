var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames : ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/4154543904',
        nicknames : ['Tigger']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/22252709',
        nicknames : ['Casper']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/4341010',
        nicknames : ['Shooby']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/4341010',
        nicknames : ['Zzzzzz']
    }
]

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    self.currentCat = ko.observable( this.catList()[0] );

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

    this.catLevel = ko.computed(function() {
        var count = this.clickCount();
        if(count < 10) {
            return "Newborn";
        }else if(count < 20){
            return "Infant";
        }else if(count < 100) {
            return "Child";
        }else if(count < 200) {
            return "Teen";
        }else if(count < 500) {
            return "Adult";
        }else {
            return "Ninja";
        }
    }, this)
    
}

ko.applyBindings(new ViewModel());