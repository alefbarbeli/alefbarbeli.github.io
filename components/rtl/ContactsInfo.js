const ContactsInfo = () => {
  return (
    <div className="section contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">الصفحة الرئيسية</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">هاتف</div>
            <p>+ (231) 456 67 89</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:steve-pearson@gmail.com">
                steve-pearson@gmail.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">عنوان</div>
            <p>2621 W Pico Blvd, Los Angeles</p>
          </div>
        </div>
        <div className="contact_form">
          <form id="cform" method="post">
            <div className="group-val">
              <input type="text" name="name" placeholder="اسم" />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
              <textarea name="message" placeholder="رسالة" defaultValue={""} />
            </div>
            <a
              href="#"
              className="btn fill"
              onclick="$('#cform').submit(); return false;"
              data-text="إرسال رسالة"
            >
              إرسال رسالة
            </a>
          </form>
          <div className="alert-success">
            <p>شكرا ، تم إرسال رسالتك بنجاح. سوف نتصل بك قريبا!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
