import http from "http"
import chalk from "chalk";

const Url = "http://official-joke-api.appspot.com/random_joke";
const jokeGenerator = () => {
  http.get(Url,(response)=>{
        let data = ""
            response.on("data",(chunk)=>{
                data += chunk;
            });
            response.on("end",()=>{
                const joke = JSON.parse(data);
                console.log("Here is the random joke");
                console.log(chalk.bgRedBright(joke.type));
                console.log(chalk.bgBlueBright(joke.setup));
                console.log(chalk.bgGreen(joke.punchline));
                
            });
            response.on("error",(err)=>{
                console.log("Error in fetching jokes ",err);
                
            })
  })
}
jokeGenerator();
