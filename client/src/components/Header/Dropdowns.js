import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GridOnIcon from '@mui/icons-material/GridOn';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness2Icon from '@mui/icons-material/Brightness2';

export const Dropdowns = {
    explore: [
        {
            name: "All NFTs",
            iconsrc: "https://opensea.io/static/images/icons/allnfts-light.svg",
            altText: "all-nfts"
        },
        {
            name: "Solana NFTs",
            iconsrc: "https://opensea.io/static/images/icons/solana-light.svg",
            altText: "solana nft"
        },
        {
            name: "Art",
            iconsrc: "https://opensea.io/static/images/icons/art-light.svg",
            altText: "art"
        },
        {
            name: "Art",
            iconsrc: "https://opensea.io/static/images/icons/collectibles-light.svg",
            altText: "collectibles"
        },
        {
            name: "Domain Names",
            iconsrc: "https://opensea.io/static/images/icons/domain-names-light.svg",
            altText: "domain name"
        },
        {
            name: "Music",
            iconsrc: "https://opensea.io/static/images/icons/music-light.svg",
            altText: "music"
        },
        {
            name: "Photography",
            iconsrc: "https://opensea.io/static/images/icons/photography-category-light.svg",
            altText: "photography"
        },
        {
            name: "Trading Cards",
            iconsrc: "https://opensea.io/static/images/icons/sports-light.svg",
            altText: "trading cards"
        },
        {
            name: "Utility",
            iconsrc: "https://opensea.io/static/images/icons/utility-light.svg",
            altText: "utility"
        },
        {
            name: "Virtual Worlds",
            iconsrc: "https://opensea.io/static/images/icons/virtual-worlds-light.svg",
            altText: "virtual world"
        }
    ],

    stats: [
        {
            name: "Rankings",
            link: ""
        },
        {
            name: "Activity",
            link: ""
        },
    ],

    resources: [
        {
            name: "Learn",
            link: ""
        },
        {
            name: "Help Center",
            link: ""
        },
        {
            name: "Platform Status",
            link: ""
        },
        {
            name: "Partner",
            link: ""
        },
        {
            name: "Taxes",
            link: ""
        },
        {
            name: "Blog",
            link: ""
        },
        {
            name: "Docs",
            link: ""
        },
        {
            name: "Newsletter",
            link: ""
        }
    ],

    account: [
        {
            name: "Profile",
            icon: <PersonIcon />
        },
        {
            name: "Favorites",
            icon: <FavoriteBorderIcon />
        },
        {
            name: "Watchlist",
            icon: <VisibilityIcon />
        },
        {
            name: "My Collections",
            icon: <GridOnIcon />
        },
        {
            name: "Setting",
            icon: <SettingsIcon />
        },
        {
            name: "Language",
            icon: <LanguageIcon />
        },
        {
            name: "Night Mode",
            icon: <Brightness2Icon />
        }
    ]
}