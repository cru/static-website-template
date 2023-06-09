import React, { Fragment, useState } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

export const Announcement = (props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <div className='announcement text-center' onClick={() => setShowModal(true)}>
        <InfoCircleOutlined style={{ fontSize: '32px', color: '#ecbe7a' }} />
        <div>
          <h4 style={{ marginLeft: '16px', marginBottom: 0 }}>
            Call for Research Proposals
          </h4>
          <span className='text-muted'>Click here for more info</span>
        </div>
      </div>
      <Modal
        title='Call for Research Proposals'
        visible={showModal}
        onCancel={() => setShowModal(false)}
        width={'50%'}
        bodyStyle={{ maxHeight: 500, overflowY: 'auto' }}
        footer={null}
      >
        <div className='text-center'>
          <p>
            The Alberta Spine Foundation is calling for grant proposals. There is{' '}
            <b>one $75k</b> grant and <b>four $20k</b> pilot grants available.
          </p>
          <br />
          <h4>$75k grant</h4>
          <p>
            Please see{' '}
            <a href='/docs/ASF_75k_grant_application_form_2022.docx' target='_blank'>
              attatched document
            </a>{' '}
            for more details and instructions on how to submit your proposal.
          </p>
          <br />
          <h4>$20k pilot grant</h4>
          <p>
            Pilot grants require at least one grant member to be an ASF member.
            <br />
            Please see{' '}
            <a href='/docs/ASF_20K_grant_application_2022.docx' target='_blank'>
              attatched document
            </a>{' '}
            for more details and instructions on how to submit your proposal.
          </p>

          <br />
          <br />
          <h6>
            <span style={{ color: '#8ac0de' }}>
              Deadline for proposals is August 31, 2022
            </span>
            . Grants will be announced during the ASF annual meeting on September 9, 2022.
          </h6>
        </div>
      </Modal>
    </Fragment>
  )
}
