import "./mylinks.scss";

export default function Mylinks() {
  const data = [
    {
      id: 1,
      name: "Tejas Mokarkar",
      title: "LinkedIn",
      img:
        "assets/Tejas.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "LinkedIn Link - www.linkedin.com/in/tejas-mokarkar-b33787216.",
    },
    {
      id: 2,
      name: "Tejas Mokarkar",
      title: "Github",
      img:
        "assets/Tejas.jpeg",
      icon: "assets/github.png",
      desc:
        "Github Link - https://github.com/M0karKarTejaSs. ",
      featured: true,
    },
    {
      id: 3,
      name: "Tejas Mokarkar",
      title: "Instagram",
      img:
        "assets/Tejas.jpeg",
      icon: "assets/instagram.png",
      desc:
        "Instagram - https://www.instagram.com/bucky._.le0/",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>My Links</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
