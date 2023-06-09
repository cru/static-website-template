import React from 'react'
import { Col, Row } from 'antd/lib/grid'
import Tabs from 'antd/lib/tabs'

export const Mission = (props) => {
  return (
    <div ref={props.missionRef} className='section section-light-right'>
      <Row align='middle' className='align-middle container'>
        <Col xl={12} lg={12} md={24} className='hero-panel'>
          <h1 className='align-middle text-center'>Our Mission</h1>
        </Col>
        <Col xl={12} lg={12} md={24} className='section-light-right-content'>
          <h6>
            Our mission is to support research projects that aim to improve patient care
            across Alberta. To promote excellence in the care of Albertans with spinal
            disorders through support of local research initiatives.
          </h6>
          <Tabs type='card'>
            <Tabs.TabPane
              tab='2021'
              key='2021'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding remains open</h6>
              <ul>
                <li>
                  <b>Dr. Cadotte:</b> Delivering Precision Medicine to Patients with
                  Degenerative Cervical Myelopathy
                </li>
                <li>
                  <b>Dr. Swamy/ Dr. Ronsky/ Dr. Salo/ Dr. Kntze/ Dr. Buchard:</b>{' '}
                  Quantification of In-vivo 3D cervical spine motion for certical TDA
                </li>
                <li>
                  <b>Dr. Swamy/ Dr. Salo/ Dr. Hart/ Dr. Heard/ Dr. Dufour:</b> Murine
                  Intervertebral Disc Transplantation Model to Investigate Serum Cytokine
                  and Proteome. Do Mouse Strain Differences Result in Differential Innate
                  Immune Responses?
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2020'
              key='2020'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding remains open</h6>
              <ul>
                <li>
                  <b>Dr. Cadotte (Calgary):</b> Spine Triage: Timely Access to Specialized
                  Care. A Cloud Computing Solution to Improve Diagnostic Efficiency for
                  Spinal Disorders
                </li>
                <li>
                  <b>Dr. Hockley (Edmonton):</b> Royal Alexandra Hospital Spine Assessment
                  Clinic: QI Study to Improve Referral Accuracy
                </li>
                <li>
                  <b>Dr. Mahood (Edmonton):</b> Development of a Handheld Ultrasound
                  Combined with Artificial Intelligence to Assist Pedicle Screws Insertion
                  During Spine Surgery
                </li>
                <li>
                  <b>Dr. Soroceanu (Calgary):</b> Impact of Transitional Outpatient Pain
                  Program for Spine on Outcomes and Opioid Use in Adult Spinal Deformity
                  (TOPPS)
                </li>
                <li>
                  <b>Dr. Douglas Gross/ Dr. Thomas et al (Edmonton / Calgary):</b>{' '}
                  Development and Feasibility Testing of a Pre-surgical Rehabilitation
                  (Prehab) Program for Patients with Lumbar Spinal Stenosis
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2019'
              key='2019'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding remains open</h6>
              <ul>
                <li>
                  <b>Dr. Thomas et al:</b> for “Evaluating the optimal timing of surgery
                  for symptomatic lumbar disc herniation: a cost-effectiveness analysis”
                </li>
                <li>
                  <b>Dr. Nicholls et al:</b> for “Normative relationship of spino-pelvic
                  alignment to femoral-acetabular orientation”
                </li>
                <li>
                  <b>Dr. Manolescu:</b> for “In vivo anatomical and functional imaging of
                  intervertebral disc degeneration using hexose analogues, tagged with
                  near infrared (NIR) fluorophores and positron emission tomography (PET)”
                  – funds sent to U of A Aug/2020
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2018'
              key='2018'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding remains open</h6>
              <ul>
                <li>
                  <b>Dr. Nataraj/ Dr. Kawchuk:</b> for “Evaluating the Effects of Six-Week
                  of Lumbar Bracing on Type I Modic Changes: A Pilot Randomized Control
                  Trial” – funds sent to U of A
                </li>
                <li>
                  <b>Dr. Nataraj et al:</b> for “Non-surgical lumbar spine surgery
                  candidates spinal/core strengthening effects on functional outcomes – a
                  feasibility trial” – funds sent to Dr. Slomp Nov/2019
                </li>
                <li>
                  <b>Dr. Swamy/ Dr. Li/ Dr. Thomas:</b> for “Can automated imaging
                  analysis of multi-modality spinal imaging be more reliable than human
                  assessors in the CSORN degenerative spondylolisthesis investigation?” –
                  project initiating with Toronto
                </li>
                <li>
                  <b>Dr. Salo/ Dr. Krawetz:</b> for “The regenerative potential of
                  epidural fat stem cells: An in vivo study to determine how these cells
                  respond to injury” – paid to U of C Jan/2019
                </li>
                <li>
                  <b>Dr. Herzog:</b> for “The effects of Botox-induced paraspinal muscle
                  weakness on the structure and mechanics of the rabbit spine” – paid to U
                  of C Nov/2018
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2017'
              key='2017'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding remains open</h6>
              <ul>
                <li>
                  <b>Dr. Nataraj/ Dr. Kawchuk:</b> for “Identification of possible factors
                  toward predicting surgical outcomes in spondylolisthesis patients”-
                  funds sent to U of A
                </li>
                <li>
                  <b>Dr. Swamy:</b> for “Are sex-differences in degenerative
                  spondylolisthesis and degenerative scoliosis explainable by mechanical
                  differences in the post-menopausal intervertebral disc?”- matching grant
                  with U of C – funds dispersed
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2016'
              key='2016'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding closed</h6>
              <ul>
                <li>
                  <b>Dr. Hu/ Dr. Tomkins:</b> for “Spinal stenosis pedometer and nutrition
                  lifestyle intervention”
                </li>
                <li>
                  <b>Dr. Duplessis:</b> for “Combined Mechanical Diagnosis Treatment and
                  Transforaminal Epidural Steroid Injections versus usual care for Chronic
                  Lumbar Radiculopathy: An RCT”
                </li>
                <li>
                  <b>Dr. Soroceanu:</b> for “Operative Treatment of Low Grade Lumbar
                  Spondylolisthesis”
                </li>
                <li>
                  <b>Dr. Swamy:</b> for “Intraoperative Localization of Target Vertebral
                  Level in Spine Surgery”
                </li>
                <li>
                  <b>Dr. Jacobs:</b> for “Mean Arterial Pressure in Spinal Cord Injury”
                </li>
                <li>
                  <b>Dr. Nataraj:</b> for “Quality and Efficiency of data collection using
                  a national research registry compared to a mobile electronic medical
                  record based clinical care pathway”
                </li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab='2015'
              key='2015'
              style={{ height: '250px', overflowY: 'auto' }}
            >
              <h6>Funding closed</h6>
              <ul>
                <li>
                  <b>Dr. Swamy:</b> for “Evaluation of the Inter-Vertebral Motions during
                  Spine Surgery"
                </li>
                <li>
                  <b>Dr. Swamy:</b> for “Dual Fluoroscopy for In-Vivo Analysis of the 3D
                  Kinematics of Cervical and Lumbar Degeneration”
                </li>
                <li>
                  <b>Dr. Casha:</b> for “Appropriateness of Lumbar Fusion”
                </li>
              </ul>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  )
}
