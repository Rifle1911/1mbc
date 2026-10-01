# เธอคือคนโปรดของเค้า 🌻 — เวอร์ชัน 3

เว็บไซต์ครบรอบหนึ่งเดือน ภาษาไทย โทนครีม–ชมพู–เหลือง ชิบิหัวโตตัวเล็กแบบสติกเกอร์

## เปิดดูทันที
แตก ZIP แล้วดับเบิลคลิก index.html เก็บโฟลเดอร์ assets ไว้ด้วย ไม่ต้องติดตั้งโปรแกรม
อีกทางคือเปิด sunflower-anniversary-v3-preview.html ที่ส่งแยกให้: รวมภาพ GIF และ MP3 แล้วในไฟล์เดียว
ไฟล์ preview เป็นสำเนาสำหรับดู การแก้ไฟล์ใน ZIP จะไม่เปลี่ยน preview ตาม

## สิ่งที่เล่นได้
- ทานตะวันเปลี่ยนท่า: ลืมตา หลับตายิ้ม โบกมือ และถือหัวใจ แตะเพื่อรับข้อความ
- คู่รักชิบิหัวโต: กดเลือก “จับมือ”, “กอดแน่น ๆ”, “หอมแก้มหน่อย” แต่ละปุ่มเปลี่ยนลำดับภาพ GIF
- การ์ดความในใจ 3 ใบ แตะเปิด–ปิด
- จดหมายรักเปิดเป็นหน้าต่าง ปิดด้วยปุ่มหรือ Escape
- ข้อความกำลังใจ 6 ข้อความ
- เกมเก็บหัวใจ 5 ดวงเพื่อปลดล็อกข้อความลับ พร้อมปุ่มเริ่มใหม่
- ปุ่มรับกอดและหัวใจโปรย
- ตัวเล่น MP3 โดยตรง: เล่น/หยุด เลื่อนเวลา และควบคุมเสียงตามเบราว์เซอร์
- ปุ่มพักภาพเคลื่อนไหว และภาพนิ่งเมื่ออุปกรณ์ตั้งค่าลดการเคลื่อนไหว

## เพลง MP3
ใช้ไฟล์เพลงรัก.mp3 ที่คุณส่งมา เก็บใน assets/song.mp3
เริ่มที่ 0:46 เมื่อข้อมูลเสียงโหลดเสร็จ กด Play เพื่อฟัง
ปุ่ม “ฟังจากท่อนโปรด 0:46” จะเลื่อนกลับและเริ่มเล่นจากท่อนนี้
ไม่ต้องเปิด YouTube ไม่ต้องใช้อินเทอร์เน็ตเพื่อเล่นเพลงเมื่อดาวน์โหลดครบแล้ว
บางเบราว์เซอร์มือถือควบคุมเสียงผ่านปุ่มเสียงของเครื่อง

## เปลี่ยนชื่อหรือข้อความ
แก้ content.js ด้วย Notepad หรือโปรแกรมแก้ข้อความ แล้วบันทึก UTF-8:

```js
window.ANNIVERSARY = {
  musicUrl: "assets/song.mp3",
  musicTitle: "เพลงรัก",
  musicStart: 46,
  to: "ชื่อแฟน",
  from: "ชื่อคุณ",
  letter: ["ย่อหน้าแรก", "ย่อหน้าที่สอง", "รักเธอนะ"]
};
```

เว้นชื่อว่างเพื่อใช้คำเรียกทั่วไป และใช้ letter: [] เพื่อเก็บจดหมายเริ่มต้น
ข้อความหน้าหลักแก้ใน index.html ข้อความกำลังใจแก้ใน app.js

## GitHub Pages
1. สร้าง repository เช่น our-first-month หรือเปิด repository เดิม
2. แตก ZIP นี้ แล้วอัปโหลดไฟล์ข้างในให้ index.html อยู่ชั้นแรก พร้อม style.css, app.js, content.js และ assets ทั้งโฟลเดอร์ รวม song.mp3
3. Commit changes
4. Settings → Pages → Deploy from a branch → main → /(root) → Save
5. รอจน GitHub แสดง Visit site แล้วเปิดทดสอบบนมือถือก่อนส่งให้แฟน

ใช้ไฟล์ชุดนี้แทนชุดเดิมทั้งหมด อย่าอัปโหลดเฉพาะ ZIP หรือใส่โฟลเดอร์ซ้อน
ฟอนต์ Google Fonts ใช้อินเทอร์เน็ต ถ้าโหลดไม่ได้จะใช้ฟอนต์ในเครื่องแทน
คู่มือ: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## ตรวจสอบแล้ว
ตรวจ JavaScript, แหล่งเพลงและตำแหน่งเริ่ม 46 วินาที, การเปิด–ปิดจดหมาย/การ์ด, เลือกท่าชิบิ, พักและเริ่ม GIF, เกมเก็บหัวใจ/ปลดล็อก/เริ่มใหม่ ด้วยการทดสอบจำลอง DOM
ตรวจทุกเฟรมของ GIF ว่าอ่านได้ วนซ้ำ และมีภาพต่างกันจริง
ยังไม่ได้ทดสอบการแสดงผลและเสียงในเบราว์เซอร์จริง หรือเผยแพร่เข้า GitHub ของคุณ

## ภาพ
ภาพต้นฉบับสร้างด้วยเครื่องมือ image generation ในตัว แล้วแยกช่องภาพประกอบเป็น GIF หลายท่า
Prompt คู่รัก: Four-frame 2x2 animation sprite sheet, adult chibi couple, huge heads about 70 percent height, tiny bodies, pastel kawaii sticker illustration, clean cocoa outlines, pink cheeks; holding hands, embracing, cheek kiss, happy hug; transparent background.
Prompt ทานตะวัน: Four-frame 2x2 animation sprite sheet, chubby kawaii sunflower sticker, eyes open, eyes closed hands raised, leaf arm waving, holding pink heart; consistent proportions, transparent background.
