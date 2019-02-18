const expect = require('chai').expect;
const ItemFactory = require('./../../src/js/item/factory');

describe('Item objects construction', function() {
    describe('Constructor', function() {
        it('should return a valid TextItem object when given valid type and parameters', function() {
            let parameters = {
                "title": "test",
                "description": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(new ItemFactory().create('text', parameters).constructor.name).to.equal('TextItem');
        });

        it('should return a valid PictureItem object when given valid type and parameters', function() {
            let parameters = {
                "path": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(new ItemFactory().create('picture', parameters).constructor.name).to.equal('PictureItem');
        });

        it('should return a valid AudioItem object when given valid type and parameters', function() {
            let parameters = {
                "path": "test.mp3",
                "caption" : "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(new ItemFactory().create('audio', parameters).constructor.name).to.equal('AudioItem');
        });

        it('should return a valid PictureItem object when given valid type (not well written) and valid parameters', function() {
            let parameters = {
                "path": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(new ItemFactory().create('piCturE', parameters).constructor.name).to.equal('PictureItem');
        });

        it('should throw an exception when given type is not valid', function() {
            let parameters = {
                "title": "test",
                "description": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(() => new ItemFactory().create('tex', parameters).constructor.name).to.throw('Invalid item type "tex" (allowed values: "audio", "picture", "text")');
        });

        it('should throw an exception when given parameters are not valid', function() {
            let parameters = {
                "description": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(() => new ItemFactory().create('text', parameters).constructor.name).to.throw('Missing required parameter named "title"');
        });

        it('should throw an exception when given audio format is not allowed', function() {
            let parameters = {
                "type": "audio",
                "path": "test.avi",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            expect(() => new ItemFactory().create('audio', parameters).constructor.name).to.throw('Unsupported file extension "avi"');
        });
    });
});
