//import Post from '/lib/collections/posts.js';
//import cloudinary from "cloudinary";
import {Meteor} from "meteor/meteor";

export default {
  createPost({Meteor,LocalState,FlowRouter},formData){



    //  const tmppath = URL.createObjectURL(formData.image[0]);
    var file = formData.image[0]; //assuming you have only 1 file
    if (!file) return;

    var reader = new FileReader(); //create a reader according to HTML5 File API

    reader.onload = ()=>{


      var buffer = new Uint8Array(reader.result) ;// convert to binary
      Meteor.call("get_cloudy_config",buffer,(err)=> {
        if(err){
          throw new Error(err.message);
        }
        console.log("done");

      });


    }

    // reader.onprogress = (data)=>{
    //   if(data.lengthComputable){
    //     var progress = parseInt(((data.loaded / data.total)*100),10);
    //     console.log(progress);
    //   }
    // }

    reader.readAsArrayBuffer(file); //read the file as arraybuffer




    // const post = new Post();
    // post.title = formData.title;
    // post.body = formData.body;
    // post.user_id = Meteor.uuid();
    // post.createdAt = new Date();
    // post.save((err)=>{
    //   if(err){
    //     const errors = err.details[0];
    //     return LocalState.set(errors.name,errors.message);
    //   }
    //   FlowRouter.go('/posts');
    // });



  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  },
}
