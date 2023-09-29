const fs = require('fs')
const data = require('../server_info.json')


function readData(A,B,C,D) {

    if(C)
    {
        return data[A][B][C]
    }
    else if(B){
        return data[A][B]
    }
    else if (A){
        return data[A]
    }
    else return '讀取失敗'
  }

function writeData(name,file){
    const jsonData = JSON.stringify(data+file, null, ',\n');
    const jsonname = JSON.stringify(name, null, ',\n');


        fs.writeFile('@/../server_info.json', jsonname, 'utf8', (err) => {
            if (err) {
            console.error('发生错误：', err);
              return;
            }
            console.log('数据已成功写入到文件。');
          });

          fs.writeFile('@/../server_info.json', jsonData, 'utf8', (err) => {
            if (err) {
            console.error('发生错误：', err);
              return;
            }
            console.log('数据已成功写入到文件。');
          });
    
}


  export{readData,writeData};


