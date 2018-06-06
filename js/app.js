var ViewModel = function() {
    this.currentCat = ko.observable( new Cat);

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https//www.flickr.com/photos/big')
    this.catLevel = ko.computed(function() {
        var count = this.clickCount();
        if(count < 10) {
            return "Newborn";
        }else if(count < 20){
            return "Infant";
        }else if(count < 100) {
            return "Teen";
        }else {
            return "Adult";
        }
    }, this)
    this.nicknames = ko.observableArray([
        { nickname: 'Tabtab'},
        { nickname: 'T-Bone'},
        { nickname: 'Mr T'},
        { nickname: 'Tabitha Tab Tabby Catty Cat'}
    ])
}

ko.applyBindings(new ViewModel());