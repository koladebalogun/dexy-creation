import { getSession } from "next-auth/react";
import Layout from "../../components/profile/layout";
import axios from "axios";

export default function profile({ user, tab, country, children }) {
  return <Layout session={user.user} tab={tab} country={country}>
    {children}
  </Layout>;
}

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const session = await getSession({ req });
  const tab = query.tab || 0;

  let data = await axios
    .get("https://api.ipregistry.co/?key=c40mj3hsjkp2ibyx")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      user: session,
      tab,
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },
    },
  };
}
