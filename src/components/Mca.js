import React from 'react'
import TableData from './TableData'

const Mca = () => {

  const list = [

    {
      name: 'pdfs/ms-english.pdf',
      fileName: 'english.pdf',
      desc: 'English',
      term: 'mid'
    },
    {
      name: 'pdfs/array-1.pdf',
      fileName: 'arrayBasics.pdf',
      desc: 'DS-ArrayBasics',
      term: 'practice'
    },
    {
      name: 'pdfs/DSmap&Sets.pdf',
      fileName: 'map&sets.pdf',
      desc: 'DS-Maps&Sets',
      term: 'practice'
    },
    {
      name: 'pdfs/DSrecusion&Backtracking.pdf',
      fileName: 'recursion&backtrackingHard.pdf',
      desc: 'Recursion&BacktrackingHard',
      term: 'practice'
    },
    {
      name: 'pdfs/DSstringBasics.pdf',
      fileName: 'stringBasics.pdf',
      desc: 'DS-StringBasics',
      term: 'practice'
    },
    {
      name: 'pdfs/array2.pdf',
      fileName: 'arrayAdvance.pdf',
      desc: 'DS-ArrayAdvance',
      term: 'practice'
    },
    {
      name: 'pdfs/DStree2.pdf',
      fileName: 'tree.pdf',
      desc: 'DsTreeHard',
      term: 'mid'
    },
    {
      name: 'pdfs/es-os.pdf',
      fileName: 'os.pdf',
      desc: 'OperatingSystem',
      term: 'end'
    },
    {
      name: 'pdfs/DSstringIntermediate.pdf',
      fileName: 'stringAdvance.pdf',
      desc: 'DS-stringAdvance',
      term: 'practice'
    },
    {
      name: 'pdfs/ms-Linux.pdf',
      fileName: 'linux.pdf',
      desc: 'Linux',
      term: 'mid'
    },
    {
      name: 'pdfs/DSstackIntermediate.pdf',
      fileName: 'stackAdvance.pdf',
      desc: 'DS-stackAdvance',
      term: 'practice'
    },
    {
      name: 'pdfs/es-quant-cs.pdf',
      fileName: 'quant.pdf',
      desc: 'Quantative',
      term: 'end'
    },
    {
      name: 'pdfs/es-softwareEng.pdf',
      fileName: 'softwareEng.pdf',
      desc: 'SoftwareEng',
      term: 'end'
    },
    {
      name: 'pdfs/DSstackBasic.pdf',
      fileName: 'stackBasic.pdf',
      desc: 'DS-stackBasic',
      term: 'practice'
    },
    {
      name: 'pdfs/es-web-tech.pdf',
      fileName: 'web-tech.pdf',
      desc: 'Web-Tech',
      term: 'end'
    },
    {
      name: 'pdfs/DSrecusion&BacktrackingEasy.pdf',
      fileName: 'recursion&backtrackingEasy.pdf',
      desc: 'Recursion&BacktrackingEasy',
      term: 'practice'
    },
    {
      name: 'pdfs/ms-android.pdf',
      fileName: 'android.pdf',
      desc: 'Android',
      term: 'mid'
    },
    {
      name: 'pdfs/DStreeBasics.pdf',
      fileName: 'treeBasics.pdf',
      desc: 'TreeBasics',
      term: 'practice'
    },
    {
      name: 'pdfs/DSDynamicProgramming.pdf',
      fileName: 'DynamicProgramming.pdf',
      desc: 'DSDynamicProgramming',
      term: 'practice'
    },
    {
      name: 'pdfs/ms-quant-cs.pdf',
      fileName: 'quant.pdf',
      desc: 'Quantative',
      term: 'mid'
    }, {
      name: 'pdfs/DSlinkedListBasics.pdf',
      fileName: 'linkedListBasic.pdf',
      desc: 'LinkedListBasics',
      term: 'practice'
    },
    {
      name: 'pdfs/DSGraph.pdf',
      fileName: 'graphDS.pdf',
      desc: 'DS-Graph',
      term: 'practice'
    },
    , {
      name: 'pdfs/DSLinkedListAdvance.pdf',
      fileName: 'linkedListAdvance.pdf',
      desc: 'LinkedListAdvance',
      term: 'practice'
    }
  ]

  return (
    <div>
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="aqua">
        <b>MCA</b> pdfs here...</marquee>
      <TableData allList={list} />
    </div>
  )
}

export default Mca
