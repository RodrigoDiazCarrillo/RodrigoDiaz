import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'
import React, { useContext } from 'react';
import ThemeContext from '../context';
export function Timeline() {
  const {theme} = useContext(ThemeContext);
    return (
      <div className="icons">
        <VerticalTimeline>
  <VerticalTimelineElement
    
    contentStyle={{ background: theme.background, color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid ' ,color:theme.background}}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(33, 150, 243)' }}>
    <h5 className="vertical-timeline-element-title">Vocational Education and Training (VET)</h5>
    <h6>FP I</h6>
    <p>Electricity & Electronic</p>
    <p>2007-2009</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="element-two"
    contentStyle={{ background: theme.background, color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid ' ,color:theme.background}}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(33, 150, 243)' }}>
    <h5 className="vertical-timeline-element-title">Certificate of Higher Education (HNC)</h5>
    <h6>FP II</h6>
    <p>Electricity & Programming for PLC </p>
    <p>2009-2011</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="element-two"
    contentStyle={{ background: theme.background, color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid ' ,color:theme.background}}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(33, 150, 243)' }}>
    <h5 className="vertical-timeline-element-title">Certificate of Higher Education (HNC)</h5>
    <h6>FP II</h6>
    <p>Health & Safety (PRL)</p>
    <p>2018-2020</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="element-three"
    contentStyle={{ background: theme.background, color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid ' ,color:theme.background}}
    //date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(33, 150, 243)' }}>
    <h5 className="vertical-timeline-element-title">University Degree</h5>
    <p>Multimedia and Web Development</p>
    <p>2018-2022</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="element-three"
    contentStyle={{ background: theme.background, color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid ' ,color:theme.background}}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(33, 150, 243)' }}>
    <h5 className="vertical-timeline-element-title">Bootcamp</h5>
    <p>Full stack web development</p>
    <p>2022</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
      </div>
    );
  }