import fs from 'fs';

function checkFileExistsSync(filepath){
    let flag = true;
    try{
        fs.accessSync(filepath, fs.constants.F_OK);
    }catch(err){
        flag = false;
    }

    return flag;
}


export default checkFileExistsSync;