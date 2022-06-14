
import './App.css';
import {useState} from 'react'

function App() {

  let [애송이,변신] = useState(['김상현','김경보','이대석','황규웅']);
  let [생일, 변경] =useState(['3월 5일', '2월 28일','4월 30일','10월 19일','7월 7일']);
  let [소녀,c] = useState('이나현');
  let [love, fallInLove]=useState(0);    

  

  return (
    <div className="App">
      <div className='man-nav'>
        <h4>The Man</h4>
      </div>

      <button onClick={()=> {
        let copy =[...애송이]; 
        copy[0]='상남자'
        copy[3]='언니'; 
        변신(copy);
        
        let copy2=[...생일];
        copy2[4]='Lucky';
        변경(copy2)

      }
        }>Change!!</button>

      <List></List>

      <div className='list'>
        <h4>{애송이[0]}<span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love}</h4>
        <p>{생일[0]}</p>
      </div>
      <div className='list'>
        <h4>{애송이[1]} </h4>
        <p>{생일[1]}</p>
      </div>
      <div className='list'>
        <h4>{애송이[2]}</h4>
        <p>{생일[2]}</p>
      </div>
      <div className='list'>
        <h4>{애송이[3]}</h4>
        <p>{생일[3]}</p>
      </div>
      <div className='list'>
        <h4>{소녀}</h4>
        <p>{생일[4]}</p>
      </div>
      {/* <h4 id={post} style={ {color : 'black', fontSize : '16px' } }>{post}</h4> */}
    </div>
  );
}

function List() {
  return(
    <div className='list'>
        <h4>이름</h4>
        <p>생일</p>
      </div>
  )
}

export default App;
