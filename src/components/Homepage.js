import React from "react";
import { Link } from "routes";

const Homepage = ({ datas }) => <div>
    This is Homepage<br/>
    <Link route='/category/hello-world'><a>Aller sur la page hello-world</a></Link>
    {datas && datas.map(data => <div key={data.id}>{data.title} ***** {data.body}</div>)}
</div>;

export default Homepage;