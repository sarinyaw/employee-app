const headers = () => [
  {
    name: 'หมายเลข',
    field: 'No',
    sortable: true,
    align: 'start',
  },
  {
    name: 'วันที่ยืนยัน',
    field: 'ConfirmDateBud',
    sortable: true,
    align: 'start',
  },
  {
    name: 'อายุ',
    field: 'Age',
    sortable: true,
    align: 'start',
  },
  {
    name: 'เพศ',
    field: 'Gender',
    sortable: true,
    align: 'start',
  },
  {
    name: 'Gender',
    field: 'GenderEn',
    sortable: true,
    align: 'start',
  },
  {
    name: 'ประเทศ',
    field: 'Nation',
    sortable: true,
    align: 'start',
  },
  {
    name: 'Nation',
    field: 'NationEn',
    sortable: true,
    align: 'start',
  },
  {
    name: 'จังหวัด',
    field: 'Province',
    sortable: true,
    align: 'start',
  },
  {
    name: 'Province',
    field: 'ProvinceEn',
    sortable: true,
    align: 'start',
  },
  {
    name: 'อำเภอ/แขวง',
    field: 'District',
    sortable: true,
    align: 'start',
  },
  {
    name: 'รายละเอียด',
    field: 'Detail',
    sortable: false,
    align: 'start',
  },
  {
    name: 'จำนวนวันกักตัว',
    field: 'StatQuarantine',
    sortable: true,
    align: 'end',
  }
];

export default headers;