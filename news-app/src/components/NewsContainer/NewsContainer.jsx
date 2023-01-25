import './NewsContainer.css';
import React from 'react';
import pic from '../../images/pic.png'
import axios from 'axios';


function NewsContainer(){
  let Arr;
  let title;
  let des;
  let imgUrl;

  axios.get('https://newsdata.io/api/1/news?apikey=pub_16053755d73e6039b4015800fe9f49bc47147&country=in')
    .then(response => {
      Arr = response.data.results;

      for(let i = 0 ; i < 5 ; i++){
        console.log(Arr[i]);
        title = response.data.results[i].title;
        document.getElementById('title' + i).textContent = title;

      } 

    })
    .catch(err => {
      console.error(err);
    })

  
  return(
    <div className="n-container">
      <News1 />  
      <News2 />  
      <News3 />  
      <News4 />  
      <News5 />  
    </div>
  )
}

function News1(){
  return(
      <div className="n-news" >
          <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title0' >
                  Breaking News
              </h1>
          </div>
          <div className="description">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum. Commodi fugit similique provident natus, magni optio fuga rem minima veniam ex, praesentium eaque obcaecati expedita nihil, labore id voluptatibus eum voluptatem omnis? Quaerat quae inventore vero repudiandae sequi explicabo, nemo animi aspernatur, expedita autem labore voluptas incidunt, deserunt at sunt unde harum dolorem quos? Placeat vero quis delectus soluta aut sed vitae voluptate laboriosam. Possimus modi, laborum ipsum voluptatem necessitatibus ipsam quam, expedita ex eaque placeat exercitationem amet doloremque quidem incidunt blanditiis sunt, doloribus asperiores deleniti magnam recusandae tempora quod sed sapiente? Aliquam, tempora! Error reiciendis pariatur consequuntur facere?
              </p>
          </div>
      </div>
  )
}

function News2(){
  return(
      <div className="n-news" id='News1'>
          <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title1'>
                  Breaking News
              </h1>
          </div>
          <div className="description">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum. Commodi fugit similique provident natus, magni optio fuga rem minima veniam ex, praesentium eaque obcaecati expedita nihil, labore id voluptatibus eum voluptatem omnis? Quaerat quae inventore vero repudiandae sequi explicabo, nemo animi aspernatur, expedita autem labore voluptas incidunt, deserunt at sunt unde harum dolorem quos? Placeat vero quis delectus soluta aut sed vitae voluptate laboriosam. Possimus modi, laborum ipsum voluptatem necessitatibus ipsam quam, expedita ex eaque placeat exercitationem amet doloremque quidem incidunt blanditiis sunt, doloribus asperiores deleniti magnam recusandae tempora quod sed sapiente? Aliquam, tempora! Error reiciendis pariatur consequuntur facere?
              </p>
          </div>
      </div>
  )
}

function News3(){
  return(
      <div className="n-news" id='News2'>
          <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title2'>
                  Breaking News
              </h1>
          </div>
          <div className="description">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum. Commodi fugit similique provident natus, magni optio fuga rem minima veniam ex, praesentium eaque obcaecati expedita nihil, labore id voluptatibus eum voluptatem omnis? Quaerat quae inventore vero repudiandae sequi explicabo, nemo animi aspernatur, expedita autem labore voluptas incidunt, deserunt at sunt unde harum dolorem quos? Placeat vero quis delectus soluta aut sed vitae voluptate laboriosam. Possimus modi, laborum ipsum voluptatem necessitatibus ipsam quam, expedita ex eaque placeat exercitationem amet doloremque quidem incidunt blanditiis sunt, doloribus asperiores deleniti magnam recusandae tempora quod sed sapiente? Aliquam, tempora! Error reiciendis pariatur consequuntur facere?
              </p>
          </div>
      </div>
  )
}
function News4(){
  return(
      <div className="n-news" id='News3' >
          <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title3'>
                  Breaking News
              </h1>
          </div>
          <div className="description">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum. Commodi fugit similique provident natus, magni optio fuga rem minima veniam ex, praesentium eaque obcaecati expedita nihil, labore id voluptatibus eum voluptatem omnis? Quaerat quae inventore vero repudiandae sequi explicabo, nemo animi aspernatur, expedita autem labore voluptas incidunt, deserunt at sunt unde harum dolorem quos? Placeat vero quis delectus soluta aut sed vitae voluptate laboriosam. Possimus modi, laborum ipsum voluptatem necessitatibus ipsam quam, expedita ex eaque placeat exercitationem amet doloremque quidem incidunt blanditiis sunt, doloribus asperiores deleniti magnam recusandae tempora quod sed sapiente? Aliquam, tempora! Error reiciendis pariatur consequuntur facere?
              </p>
          </div>
      </div>
  )
}
function News5(){
  return(
      <div className="n-news" id='News4' >
          <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
          <div className="heading">
              <h1 id='title4'>
                  Breaking News
              </h1>
          </div>
          <div className="description">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum. Commodi fugit similique provident natus, magni optio fuga rem minima veniam ex, praesentium eaque obcaecati expedita nihil, labore id voluptatibus eum voluptatem omnis? Quaerat quae inventore vero repudiandae sequi explicabo, nemo animi aspernatur, expedita autem labore voluptas incidunt, deserunt at sunt unde harum dolorem quos? Placeat vero quis delectus soluta aut sed vitae voluptate laboriosam. Possimus modi, laborum ipsum voluptatem necessitatibus ipsam quam, expedita ex eaque placeat exercitationem amet doloremque quidem incidunt blanditiis sunt, doloribus asperiores deleniti magnam recusandae tempora quod sed sapiente? Aliquam, tempora! Error reiciendis pariatur consequuntur facere?
              </p>
          </div>
      </div>
  )
}



export default NewsContainer;