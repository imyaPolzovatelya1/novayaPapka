export default function ShowId({params}) {
    return (
      <div>
        <h1>Client page{params.showId}</h1>
  <i>Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. Envolve provided developers an API that enables the integration of online chat functionality into their websites. After releasing the chat service, </i>
  <br></br>
  <br/>
  <p>ClientId: {params.showId}</p>
  <i>Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. Envolve provided developers an API that enables the integration of online chat functionality into their websites. After releasing the chat service, Tamplin and Lee found out that it was being used to pass application data that were not chat messages. Developers were using Envolve to sync application data such as game state in real time across their users. Tamplin and Lee decided to separate the chat system and the real-time architecture that powered it.[3] They founded Firebase as a separate company in 2011 and it launched to the public in April 2012.[1]
  Firebase's first product was the Firebase Realtime Database, an API that synchronizes application data across iOS, Android, and Web devices, and stores it on Firebase's cloud. The product assists software developers in building real-time, collaborative applications.</i>
  
  
      </div>
    );
  }