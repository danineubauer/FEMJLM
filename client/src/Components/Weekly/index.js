import React, { useContext } from "react";
import Header from '../Header/index';
import './style.css';
import Textbox from "../Textbox/index";

function Weekly() {

  return (
    <div>
      <Header>Meet Our Community</Header>

      <div className="container containerCommunity" >
        <div className='row'>

          <div className="col-lg-4 col-md-12 col-sm-12 femstar">

            <h5>Fem Star of the Week</h5>
            <div className="fb-post" data-href="https://www.facebook.com/FemJLM/posts/3066955370027655" data-show-text="true" data-width="340px"><blockquote cite="https://developers.facebook.com/FemJLM/posts/3066955370027655"  class="fb-xfbml-parse-ignore"><p>Elena Liberte is the Director for Strategic Partnerships and HR at Made in Jerusalem.  Elena has wide-ranging and deep...</p>Posted by <a href="https://www.facebook.com/FemJLM/">FEM JLM</a> on&nbsp;<a href="https://developers.facebook.com/FemJLM/posts/3066955370027655">Tuesday, May 19, 2020</a></blockquote></div>

          </div>

          {/* <h5 className="femstart-title">Fem Start of the Week:</h5><br></br> */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Looking for a mentor? Contact our volunteers</h5>
            <iframe className="airtable-embed" src="https://airtable.com/embed/shryGVVn4QUe3T6fR?backgroundColor=purpleLight&viewControls=on" frameborder="0" onmousewheel="" width="340px" height="533" />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Join our events</h5>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFemJLM%2F&tabs=events&width=340&height=533&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="410"
              scrolling="yes" frameborder="0" allowTransparency="true" allow="encrypted-media" />
          </div>
        </div>
      </div>

    </div>

  );
}

export default Weekly;
