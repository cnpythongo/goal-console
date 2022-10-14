import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilApps,
  cilTask,
  cilSettings,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">消息统计</CDropdownHeader>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilBell} className="me-2" />
          通知
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          站内信
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilTask} className="me-2" />
          待办任务
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilCommentSquare} className="me-2" />
          评论
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">账号设置</CDropdownHeader>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilSettings} className="me-2" />
          个人资料
        </CDropdownItem>
        <CDropdownItem href="#" className="py-2">
          <CIcon icon={cilApps} className="me-2" />
          修改密码
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
