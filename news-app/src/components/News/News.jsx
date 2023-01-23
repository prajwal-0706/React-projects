import './News.css';
import pic from '../../images/pic.png'


function News(){
    return(
        <div className="n-news">
            <img src = {pic} alt="" style={{width : '170px', height :"170px"}}/>
            <div className="heading">
                <h1>
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


export default News