import multer from "multer";

class FileUploads{
    fileUpload(destination='public') {
        const storage = multer.diskStorage({
            destination: function(req, file, cb){
              cb(null, `public/${destination}`)
            },
            filename: function(req, file, cb){
              let filename = file.originalname.trim();
              filename = filename.replace(/ /g, '-'); 

              let imageName = Date.now() + '-' + Math.round(Math.random() * 1E9) + "-" + filename;
              cb(null, imageName);
            }
          });
          
          
          return multer({storage: storage});
    }
}


export default FileUploads;