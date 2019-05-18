const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-"
	const blow = new Set()
	client.on('message', message => {
  var price = ''
  var rank = ''
  var sender = ''
             let fouroulou = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`Our plans : 
                                       ** -Epic - S ** 
                                       ** -Price:120k Probot **
                                       ** -To Buy: \`-Epic - S\` **

                                        ** -Great - S **
                                        ** -Price:90k Probot **
                                        ** -To Buy:\`-Great - S\` **

                                       ** -Best - S **
                                       ** -Price:40k Probot **
                                       ** -To Buy: \`-Best - S\` **

                                       ** -Normal - S **
                                       ** -Price:20k Probot **
                                       ** -To Buy: \`-Normal - S\` **
                                      


        For more information go to <#576447682030338058>`)   
      .setTimestamp()
    let filter = m => m.author.id === message.author.id;
   if(message.content.startsWith("-buy")){
       let user = client.users.get("527505679171321856"); // ايديك
	  let user1 = client.users.get("282859044593598464");
     //ههقهقهقه
    // جيبلي كود فيه تحقق yes or no

     if (blow.has(message.author.id)) {
     return message.reply("**لايمكنك اعادة الامر مجددا ان لم تنهي عملية الشراء لانهائها قم بكتابة cancel**").then(message => {
      message.delete(10000) 
     })
     }
     blow.add(message.author.id);
    setTimeout(() => {
        blow.delete(message.author.id);
    }, 60000);//وحلو مرا  كقو خلك كذا زيي بس ذا مرا ايز :]

     message.channel.sendEmbed(fouroulou).then(msg => {
      message.channel.awaitMessages(response => response.content === 'HightnessSeller' || 'NormalSeller' || 'BestSeller' || 'PerfectSeller' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === '.Good') {
          rank = 'Good S'
          price = 40000
          	  let price2 = price - ( (price * 5) / 100 )

                    let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`30k-probot\`
                ** To:<@527505679171321856>**
                 **Ex: #credit <@527505679171321856> 30000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
      
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$28500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Good S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          message.delete();
        }
        if(collected.first().content === '.Perfect') {
           let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`70k-probot\`
                ** To:<@527505679171321856>**
                 **Ex: #credit <@527505679171321856> 70000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$66500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Perfect S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`**You took to long time please do the command \`.buy\` again**`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '.Great') {
          rank = 'Great S'
          price = 90000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`90k-probot\`
                ** To:<@527505679171321856>**
                 **Ex: #credit <@527505679171321856> 90000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$85500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Great S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}
                if(collected.first().content === '.Exelent') {
          rank = 'Exelent S'
          price = 50000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`50k-probot\`
                ** To:<@527505679171321856>**
                 **Ex: #credit <@527505679171321856> 50000**
                  **To Exit Write Cancel**`)   
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$47500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000, 
          errors: ['time'], 
          
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Exelent S'));
			blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`.buy\` again`)
            })
            
            })
          collected.first().delete(); 
}})
  

       })     
        
}});



client.on("message",async message => {
  if(message.content === '.order'){//الامر
  var shopc = message.guild.channels.find("name","orders")
    if(!shopc) return message.reply("There is no room have the name orders")
      let shop = '';
        let fillter = m => m.author.id === message.author.id
        
       
  
        await message.channel.send("** ☞  Hello Sir , Write Your Order Please ☺ . **").then(e => {
             message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
  })
       .then(co => {
         shop = co.first().content;
          co.first().delete();
       // 90 + 40 + 20 + 20 + 10 + 20 = 200
  let desc = '';
  let nord = new Discord.RichEmbed()
  .setColor("#b42323")
  .addField("New Order : ", shop)
  .setTimestamp()
   e.edit("**Your Order Was Sended , Thanks Sir . ☺**").then(e => {
    shopc.send('**That Order Sent By : ☞ **' + message.author)
    shopc.sendEmbed(nord)
    
    })
  })
    })
  }
             
        
    
       
    
        
       
  }
  );




client.on("message", msg=>{
	let prefix = "."
if(!msg.content.startsWith(`${prefix}tax`)) return;
let tax = msg.content.split(" ")[1]
let Price = msg.content.split(" ")[2];
if(!tax || !Price) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
tax = tax.replace(/%/g,"");
let resulting = Math.floor(Price-(Price*(tax/100)));
if(!resulting || resulting < 0 ||  isNaN(resulting)) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
msg.reply(`resulting is ${resulting}$`)
})



client.on("message", message => {
	var prefix = ".";
 if (message.content === ".help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
      .setDescription(`
	  
	       Help Commands: 
			 
**${prefix}buy ⥨ To Buy Role **
**${prefix}order ⥨ To Send Order **	 
**${prefix}tax ⥨ To Calculate The Tax**
	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame(".help | By Mahdi", "https://www.twitch.tv/Alpha");
});




const developers = ["527505679171321856","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});











 
 



 













client.on('message', message => {
 if(message.content.startsWith("cancel")){
 if(blow.has(message.author.id)) {
   blow.delete(message.author.id)
   message.channel.send('**Buying Has Been Cancled**')
 }}});
client.login(process.env.TOKEN)
