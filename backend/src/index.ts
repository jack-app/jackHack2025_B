import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

const reasons: string[] = [
  "家族に急な用事ができた（例：体調不良、病院に付き添いなど）",
  "自分や身内が体調を崩した",
  "急な仕事・バイトが入った（例：人手不足による呼び出し）",
  "トラブル対応が必要になった（例：PCが壊れた、水漏れなど）",
  "大事なものを紛失して探している",
  "大学や会社の面談・面接が入った",
  "重要な締切（課題、レポート、仕事の納期）が迫っている",
  "国家試験や資格試験の直前",
  "家族の行事（法事、親戚の集まりなど）が重なった",
  "天候の影響（台風、大雪など）で外出できない",
  "突然の体調不良で外に出られない（頭痛、腹痛、発熱など）",
  "ペットの体調が急に悪くなった",
  "身内の看病が必要になった",
];

app.get("/", (c) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  return c.json({ reason });
});

export default app;
