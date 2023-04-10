import { useIntl } from 'react-intl'
import { CruisesIcon } from 'src/common/design/icons/CruisesIcon'
import { LeavingNowIcon } from 'src/common/design/icons/LeavingNowIcon'
import { PackagesIcon } from 'src/common/design/icons/PackagesIcon'
import { PromotionIcon } from 'src/common/design/icons/PromotionsIcon'
import { TicketIcon } from 'src/common/design/icons/TicketIcon'

export const NavItems = () => {
  const { formatMessage } = useIntl()

  const headerItems = [
    {
      label: formatMessage({ id: 'label.aboutUs' }),
      href: '/aboutUs',
    },
    {
      label: formatMessage({ id: 'label.services' }),
      href: '/services',
    },
    {
      label: formatMessage({ id: 'label.fleet' }),
      href: '/fleet',
    },
  ]

  const subHeaderItems = [
    {
      label: formatMessage({ id: 'label.tickets' }),
      href: '/tickets',
      icon: TicketIcon,
    },
    {
      label: formatMessage({ id: 'label.promotions' }),
      href: '/promotions',
      icon: PromotionIcon,
    },
    {
      label: formatMessage({ id: 'label.packages' }),
      href: '/packages',
      icon: PackagesIcon,
    },
    {
      label: formatMessage({ id: 'label.cruises' }),
      href: '/cruises',
      icon: CruisesIcon,
    },
    {
      label: formatMessage({ id: 'label.leavingNow' }),
      href: '/leavingNow',
      icon: LeavingNowIcon,
    },
  ]

  return {
    headerItems,
    subHeaderItems,
  }
}
