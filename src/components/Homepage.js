import { Link } from "routes";
import React from "react";

const Homepage = ({ datas }) => (
  <div>
    This is Homepage<br />
    <Link route="/category/hello-world">
      <a>Aller sur la page hello-world</a>
    </Link>
    {datas &&
      datas.map(data => (
        <div key={data._id}>
          {data.nom} ** {data.adresse} ** {data.tel} ** {data.description}
        </div>
      ))}
  </div>
);

export default Homepage;
