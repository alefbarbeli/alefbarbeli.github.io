import GlitcheLayout from "@/layouts/GlitcheLayout";
import Link from "next/link";
const BlogInner = () => {
  return (
    <GlitcheLayout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">14 June 2016</div>
              <div className="h-title blog_title">
                Designing the perfect notification UX
              </div>
              <div className="h-subtitle typing-bread">
                <p>
                  <Link href="/">Home</Link> / <Link href="blog">Blog</Link>
                </p>
              </div>
              <span className="typed-bread" />
            </div>
          </div>
        </div>
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse" />
        </a>
      </div>
      {/* Blog */}
      <div className="section blog">
        <div className="content">
          <div className="single-post-text">
            <p>
              No dolorem blandit theophrastus eos, nam eu persecuti repudiandae,
              duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case
              intellegebat eum, mea ex regione patrioque signiferumque. Pri ei
              solet graecis. Ea appetere referrentur vituperatoribus cule, vix
              sanctus meliore cu. Nec in sale prima nostrud.
            </p>
            <p>
              <img src="images/blog_1.jpg" alt="" />
            </p>
            <p>
              Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri
              zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne
              pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad. Ad
              oportere voluptatibus nec, sea ei civibus praesent. At timeam
              expetenda inciderint has. Invidunt constituto ne per, paulo omnium
              quaerendum his eu, cu congue consul cetero cule. Solet honestatis
              et eum. Euismod consulatu eos eu. Vocent facilis sensibus vel ut,
              quo an nihil qualisque. Mea eu nulla prompta. Dicat velit at usu,
              malis euismod vim an, tollit discere vix in. Ne his eros dolor. Cu
              illud lorem putent vel. Eum in movet nostrum referrentur. His ne
              tantas tractatos. Sit eu saperet antiopam.
            </p>
            <p>
              No dolorem blandit theophrastus eos, nam eu persecuti repudiandae,
              duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case
              intellegebat eum, mea ex regione patrioque signiferumque. Pri ei
              solet graecis. Ea appetere referrentur vituperatoribus cule, vix
              sanctus meliore cu. Nec in sale prima nostrud.
            </p>
          </div>
          <div className="post-comments">
            <div className="title">
              <div className="title_inner">4 COMMENTS</div>
            </div>
            <ul className="comments">
              <li className="post-comment">
                <div className="image">
                  <img src="images/man1.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">Jesse Pitman</div>
                  <p>
                    An has alterum nominavi. Nam at elitr veritus voluptaria. Cu
                    eum regione tacimates vituperatoribus, ut mutat delenit est.
                  </p>
                </div>
              </li>
              <li className="post-comment">
                <div className="image">
                  <img src="images/man1.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">John Doe</div>
                  <p>
                    An has alterum nominavi. Nam at elitr veritus voluptaria. Cu
                    eum regione tacimates vituperatoribus, ut mutat delenit est.
                  </p>
                </div>
              </li>
              <li className="post-comment">
                <div className="image">
                  <img src="images/man1.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">James Collins</div>
                  <p>
                    An has alterum nominavi. Nam at elitr veritus voluptaria. Cu
                    eum regione tacimates vituperatoribus, ut mutat delenit est.
                  </p>
                </div>
              </li>
              <li className="post-comment">
                <div className="image">
                  <img src="images/man1.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">James Ferguson</div>
                  <p>
                    An has alterum nominavi. Nam at elitr veritus voluptaria. Cu
                    eum regione tacimates vituperatoribus, ut mutat delenit est.
                  </p>
                </div>
              </li>
            </ul>
            <div className="form-comment">
              <div className="title">
                <div className="title_inner">Write a comment</div>
              </div>
              <form id="comment_form" method="post">
                <div className="group-val">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="group-val">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="group-val ct-gr">
                  <textarea
                    name="message"
                    placeholder="Comment"
                    defaultValue={""}
                  />
                </div>
                <a
                  href="#"
                  className="btn fill"
                  onclick="$('#comment_form').submit(); return false;"
                  data-text="Add Comment"
                >
                  Add Comment
                </a>
              </form>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </GlitcheLayout>
  );
};
export default BlogInner;
