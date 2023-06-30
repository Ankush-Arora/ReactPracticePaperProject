import React from 'react'
import TableData from './TableData'

const Mba = () => {

  const list = [
    {
      name: 'pdfs/NumberSystemWorksheet-1.docx',
      fileName: 'numberSystemWorksheet1.docx',
      desc: 'NumberSystemWorksheet1',
      term: 'practice'
    },
    {
      name: 'pdfs/NumberSystemWorksheet-2.docx',
      fileName: 'numberSystemWorksheet2.docx',
      desc: 'NumberSystemWorksheet2',
      term: 'practice'
    },
    {
      name: 'pdfs/Tabular.docx',
      fileName: 'tabularArrangement.docx',
      desc: 'TabularArrangement',
      term: 'practice'
    },
    {
      name: 'pdfs/ProfitAndLoss1.doc',
      fileName: 'profitAndLoss1.doc',
      desc: 'ProfitAndLoss1',
      term: 'practice'
    },
    {
      name: 'pdfs/ProfitAndLoss2.doc',
      fileName: 'profit&Loss2.doc',
      desc: 'Profit&Loss2',
      term: 'practice'
    }
    ,
    {
      name: 'pdfs/ProfitLossDiscount.docx',
      fileName: 'profitLossDiscount.docx',
      desc: 'Profit&LossDiscount',
      term: 'practice'
    }
    , {
      name: 'pdfs/RatioProportion.docx',
      fileName: 'ratioProportion.docx',
      desc: 'RatioProportion',
      term: 'practice'
    },
    {
      name: 'pdfs/BloodRelation1.docx',
      fileName: 'bloodRelation.docx',
      desc: 'BloodRelation',
      term: 'practice'
    },
    {
      name: 'pdfs/Percentage1.doc',
      fileName: 'percentage1.doc',
      desc: 'Percentage1',
      term: 'practice'
    },
    {
      name: 'pdfs/Percentage2.doc',
      fileName: 'percentage2.doc',
      desc: 'Percentage2',
      term: 'practice'
    },
    {
      name: 'pdfs/SyllogismLevel1.docx',
      fileName: 'syllogismLevel1.docx',
      desc: 'SyllogismLevel1',
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
    }
  ]

  return (
    <div>
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="aqua">
        <b> MBA</b> pdfs here...</marquee>
      <TableData allList={list} />
    </div>
  )
}

export default Mba
