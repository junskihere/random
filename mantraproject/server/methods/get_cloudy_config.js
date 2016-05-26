import {Meteor} from 'meteor/meteor';
import cloudinary from "cloudinary";
import Datauri from "datauri";

export default function () {
  Meteor.methods({
    'get_cloudy_config'(image) {
      console.log("hello world");

      let raw = new Buffer(image)

      cloudinary.config ({
              cloud_name: 'dnebqjbyh',
              api_key: '264784665157316',
              api_secret: 'DBgUmUAaTYoZ27AokZJ1Gs_QY0c' ,
          });
          var dUri = new Datauri();
          dUri.format('.png', raw);
          cloudinary.uploader.upload(dUri.content, function(result) {
    console.log(result)
  });


    },
  });
}
