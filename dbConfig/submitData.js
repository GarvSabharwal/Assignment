const { Client } = require('pg')
const client = new Client('')

module.exports={
    submit_data:async function submit_data(data_json){
        try{
        await client.connect()
        
        const res = await client.query(`INSERT INTO public."blog"(blog_name,blog_text) VALUES('${blog_name}', '${blog_text}'`)
            console.log(res)
            await client.end();
        }
        catch(error) {
            console.error(error);
            
          }
    },
    login:async function login(data_json){
        try{
        await client.connect()
        
        const res = await client.query(`select * from public."blog" where blog_id='${data_json.blog_id}'`)
           return res
            await client.end();
        }
        catch(error) {
            console.error(error);
            
          }
    }
}



