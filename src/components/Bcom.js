import React from 'react'
import TableData from './TableData'

const Bcom = () => {

  const list = [
    {
      name: 'pdfs/BloodRelation1.docx',
      fileName: 'bloodRelation.docx',
      desc: 'BloodRelation',
      term: 'practice'
    },
    {
      name: 'pdfs/BloodRelation2.docx',
      fileName: 'bloodRelation2.docx',
      desc: 'BloodRelation2',
      term: 'practice'
    },
    {
      name: 'pdfs/LinearArrangement-1.docx',
      fileName: 'linearArrangement1.docx',
      desc: 'LinearArrangement1',
      term: 'practice'
    },
    {
      name: 'pdfs/LinearCircular.docx',
      fileName: 'linearCircular.docx',
      desc: 'LinearCircular',
      term: 'practice'
    },
    {
      name: 'pdfs/Percentage1.doc',
      fileName: 'percentage1.doc',
      desc: 'Percentage1',
      term: 'practice'
    },
    {
      name: 'pdfs/ProfitAndLoss1.doc',
      fileName: 'profitAndLoss1.doc',
      desc: 'ProfitAndLoss1',
      term: 'practice'
    }
    , {
      name: 'pdfs/RatioProportion.docx',
      fileName: 'ratioProportion.docx',
      desc: 'RatioProportion',
      term: 'practice'
    },
    {
      name: 'pdfs/SyllogismLevel1.docx',
      fileName: 'syllogismLevel1.docx',
      desc: 'SyllogismLevel1',
      term: 'practice'
    }
  ]


  return (
    <div>
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="aqua">
        <b> BCOM</b> pdfs here...</marquee>
      <TableData allList={list} />
    </div>
  )
}

export default Bcom
