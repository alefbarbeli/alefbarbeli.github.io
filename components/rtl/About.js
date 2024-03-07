const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">عني</div>
        </div>
        <div className="image">
          <img src="images/man1.jpg" alt="" />
        </div>
        <div className="desc">
          <p>
            مهمتي بسيطة ومتطورة ، لذلك من الممكن أن أصفها ولغة بسيطة ومنمقة. أنا
            أحب الشعور والتطور من التفوق. أحب الناس بعقل شديد وفي نفس الوقت من
            السهل التحدث إليه. يمكن الجمع بين هذه الصفات الطبيعية تماما. ومع ذلك
            ، تبدو أشياء مثل الناس بائسة ، إذا كانت هذه الخصائص مرتبطة بها بشكل
            مصطنع.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>اسم:</strong> فلان الفلاني
              </li>
              <li>
                <strong>عمر:</strong> 22 سنة
              </li>
              <li>
                <strong>مهنة:</strong> مطور ويب
              </li>
              <li>
                <strong>المواطنة:</strong> أوكرانيا
              </li>
              <li>
                <strong>إقامة: </strong> كييف
              </li>
              <li>
                <strong>E-mail:</strong> johndoe@domain.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="تحميل السيرة الذاتية">
              تحميل السيرة الذاتية
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
