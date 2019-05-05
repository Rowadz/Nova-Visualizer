import { TreeSubejct } from '../models/tree-subject.model';

export const CS2017: Array<TreeSubejct> = [
  { cid: '750120', name: 'رياضيات متقطعة', lvl: 1, credit: 3 },
  { cid: '250101', name: 'تفاضل وتكامل 1', lvl: 1, credit: 3 },
  {
    cid: '780110',
    name: 'مقدمة في تكنولوجيا الانترنت والويب',
    lvl: 1,
    credit: 3
  },
  {
    cid: '750113',
    name: 'أساسيات البرمجة 1',
    lvl: 1,
    credit: 3
  },
  {
    cid: '731110',
    name: 'مقدمة في نظم وتكنولوجيا المعلومات',
    lvl: 1,
    credit: 3
  },
  {
    cid: '750114',
    name: 'أساسيات البرمجة 2',
    lvl: 1,
    dependsOn: ['750113'],
    credit: 3
  },
  {
    cid: '721111',
    name: 'أساسيات هندسة البرمجيات',
    lvl: 1,
    dependsOn: ['731110'],
    credit: 3
  },
  {
    cid: '731213',
    name: 'مقدمة في برمجة المواقع الالكترونية',
    lvl: 2,
    dependsOn: ['750114'],
    credit: 3
  },
  {
    cid: '721223',
    name: 'برمجة كينونة',
    lvl: 2,
    dependsOn: ['750114'],
    credit: 3
  },
  {
    cid: '750272',
    name: 'التحليل العددي',
    lvl: 2,
    dependsOn: ['750114'],
    credit: 3
  },
  {
    cid: '731321',
    name: 'تحليل وتصميم النظم',
    lvl: 2,
    dependsOn: ['721111'],
    credit: 3
  },
  {
    cid: '721240',
    name: 'أخلاقيات الحوسبة',
    lvl: 2,
    dependsOn: ['731110'],
    credit: 3
  },
  {
    cid: '750230',
    name: 'تصميم المنطق الرقمية',
    lvl: 2,
    dependsOn: ['731110'],
    credit: 3
  },
  { cid: '250231', name: 'مبادئ الاحصاء والاحتمالات', lvl: 2, credit: 3 },
  {
    cid: '750224',
    name: 'نظرية الحسابات',
    lvl: 2,
    dependsOn: ['750120'],
    credit: 3
  },
  { cid: '250241', name: 'جبر خطي', lvl: 2, dependsOn: ['250101'], credit: 3 },
  {
    cid: '750215',
    name: 'البرمجة المرئية',
    lvl: 2,
    dependsOn: ['721223'],
    credit: 3
  },
  {
    cid: '721224',
    name: 'تراكيب البيانات',
    lvl: 2,
    dependsOn: ['721223'],
    credit: 3
  },
  {
    cid: '731221',
    name: 'أساسيات قواعد البيانات',
    lvl: 2,
    dependsOn: ['721223'],
    credit: 3
  },
  {
    cid: '750233',
    name: 'تنظيم وتصميم الحاسبات',
    lvl: 2,
    dependsOn: ['750230'],
    credit: 3
  },
  {
    cid: '750324',
    name: 'بناء المترجمات',
    lvl: 3,
    dependsOn: ['750224'],
    credit: 3
  },
  {
    cid: '750323',
    name: 'الخوارزميات',
    lvl: 3,
    dependsOn: ['721224'],
    credit: 3
  },
  {
    cid: '750321',
    name: 'مفاهيم لغات البرمجة',
    lvl: 3,
    dependsOn: ['721224'],
    credit: 3
  },
  {
    cid: '731340',
    name: 'أساسيات شبكات الحاسوب',
    lvl: 3,
    dependsOn: ['721224'],
    credit: 3
  },
  {
    cid: '750362',
    name: 'برمجة تطبيقات قواعد البيانات',
    lvl: 3,
    dependsOn: ['731221'],
    credit: 3
  },
  {
    cid: '750332',
    name: 'معمارية الحاسوب',
    lvl: 3,
    dependsOn: ['750233'],
    credit: 3
  },
  {
    cid: '750350',
    name: 'الأنظمة الذكية',
    lvl: 3,
    dependsOn: ['250231'],
    credit: 3
  },
  {
    cid: '750335',
    name: 'نظم التشغيل',
    lvl: 3,
    dependsOn: ['750332'],
    credit: 3
  },
  { cid: '750398', name: ' ** التدريب العملي', lvl: 3, credit: 0 },
  {
    cid: '750460',
    name: 'موضوعات خاصة *',
    lvl: 4,
    dependsOn: ['750323'],
    credit: 3,
    optional: true
  },
  {
    cid: '750474',
    name: 'معالجة الصور الرقمية *',
    lvl: 4,
    dependsOn: ['750323'],
    credit: 3,
    optional: true
  },
  {
    cid: '750413',
    name: 'البرمجة المتزامنة والموزعة',
    lvl: 4,
    dependsOn: ['750215'],
    credit: 3
  },
  {
    cid: '750446',
    name: 'أمن المعلومات',
    lvl: 4,
    dependsOn: ['731340'],
    credit: 3
  },
  {
    cid: '750445',
    name: 'الشبكات اللاسلكية والمتنقلة *',
    lvl: 4,
    dependsOn: ['731340'],
    credit: 3,
    optional: true
  },
  {
    cid: '731423',
    name: 'التنقيب عن البيانات *',
    lvl: 4,
    dependsOn: ['731221'],
    credit: 3,
    optional: true
  },
  {
    cid: '750464',
    name: 'استرجاع المعلومات *',
    lvl: 4,
    dependsOn: ['731221'],
    credit: 3,
    optional: true
  },
  {
    cid: '750472',
    name: 'النمذجة والمحاكاة',
    lvl: 4,
    dependsOn: ['750272'],
    credit: 3
  },
  { cid: '750497', name: 'مشروع بحث 1', lvl: 4, credit: 1 },
  {
    cid: '750498',
    name: 'مشروع بحث 2',
    lvl: 4,
    dependsOn: ['750497'],
    credit: 2
  }
];
