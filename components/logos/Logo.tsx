import Link from 'next/link'

function Logo() {
    return (
        <a href="/">
            <div className="group flex flex-col space-y-2 relative">
                <svg className="2xl:hidden" width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.048 14.17V40H49.906V10.18H51.67L72.46 36.43V10.18H74.602V40H72.502L52.048 14.17ZM95.4524 10.18H97.3004L102.886 40H100.618L98.7704 30.172H85.3724L79.4084 40H77.0984L95.4524 10.18ZM98.6024 28.408L95.8304 12.784L86.2544 28.408H98.6024ZM102.59 10.18H104.858L109.814 37.312L126.236 10.18H128.504L110.192 40H108.218L102.59 10.18Z" fill="#EDEBD7" />
                    <path d="M10.7393 17.6586H16.5584V11.8398H10.7393V17.6586ZM11.9643 13.064H15.333V16.4336H11.9643V13.064ZM24.2147 11.8398V17.6586H30.0334V11.8398H24.2147ZM25.4393 16.434V13.0648H28.8076L28.8084 16.434H25.4393ZM10.7393 31.9498H16.5584V26.1319H10.7393V31.9498ZM11.9643 27.3565H15.333V30.7253H11.9643V27.3565Z" fill="#EDEBD7" />
                    <path d="M20.5396 25.213C22.3437 25.213 23.8063 23.7505 23.8063 21.9464C23.8063 20.1422 22.3437 18.6797 20.5396 18.6797C18.7355 18.6797 17.2729 20.1422 17.2729 21.9464C17.2729 23.7505 18.7355 25.213 20.5396 25.213Z" fill="#E3B23C" />
                    <path d="M20.5547 21.9891L37.904 27.7311L32.7741 29.6392L37.0244 33.8896L32.8917 38.0235L28.6262 33.7581L26.6389 38.7843L20.5547 21.9891ZM32.8917 36.2902L35.2919 33.89L30.5585 29.1574L34.2077 27.7984L22.5662 23.9454L26.6891 35.3257L28.173 31.5731L32.8917 36.2902ZM13.0532 23.4321H14.159V22.3264H13.0532V23.4321ZM13.0532 21.5493H14.159V20.4435H13.0532V21.5493ZM13.0532 19.6673H14.159V18.5611H13.0532V19.6673ZM13.0532 25.3146H14.159V24.2088H13.0532V25.3146ZM26.5282 18.5611V19.6673H27.634V18.5611H26.5282ZM26.5282 23.4321H27.634V22.3264H26.5282V23.4321ZM26.5282 21.5493H27.634V20.4435H26.5282V21.5493ZM22.6148 15.2087H23.7205V14.1025H22.6148V15.2087ZM16.9671 15.2087H18.0733V14.1025H16.9671V15.2087ZM20.7319 15.2087H21.8377V14.1025H20.7319V15.2087ZM18.8495 15.2087H19.9553V14.1025H18.8495V15.2087ZM20.7319 29.5004H21.8377V28.3942H20.7319V29.5004ZM18.8495 29.5004H19.9553V28.3942H18.8495V29.5004ZM16.9671 29.5004H18.0733V28.3942H16.9671V29.5004Z" fill="#EDEBD7" />
                </svg>
                <svg className="hidden 2xl:block" width="166" height="67" viewBox="0 0 166 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.064 18.56V53H60.208V13.24H62.56L90.28 48.24V13.24H93.136V53H90.336L63.064 18.56ZM120.937 13.24H123.401L130.849 53H127.825L125.361 39.896H107.497L99.5445 53H96.4645L120.937 13.24ZM125.137 37.544L121.441 16.712L108.673 37.544H125.137ZM130.453 13.24H133.477L140.085 49.416L161.981 13.24H165.005L140.589 53H137.957L130.453 13.24Z" fill="#EDEBD7" />
                    <path d="M13.3691 23.7389H20.6134V16.4951H13.3691V23.7389ZM14.8941 18.0191H19.0879V22.2139H14.8941V18.0191ZM30.1446 16.4951V23.7389H37.3884V16.4951H30.1446V16.4951ZM31.6691 22.2144V18.0201H35.8624L35.8634 22.2144H31.6691ZM13.3691 41.53H20.6134V34.2873H13.3691V41.53V41.53ZM14.8941 35.8118H19.0879V40.0055H14.8941V35.8118V35.8118Z" fill="#EDEBD7" />
                    <path d="M25.5696 33.1431C27.8156 33.1431 29.6363 31.3224 29.6363 29.0764C29.6363 26.8305 27.8156 25.0098 25.5696 25.0098C23.3236 25.0098 21.5029 26.8305 21.5029 29.0764C21.5029 31.3224 23.3236 33.1431 25.5696 33.1431Z" fill="#E3B23C" />
                    <path d="M25.5886 29.1295L47.1866 36.2777L40.8005 38.6531L46.0917 43.9443L40.9469 49.0907L35.6368 43.7807L33.1628 50.0377L25.5886 29.1295ZM40.9469 46.9328L43.9348 43.9449L38.0422 38.0533L42.5852 36.3615L28.0926 31.5649L33.2253 45.7322L35.0726 41.0606L40.9469 46.9328ZM16.25 30.9259H17.6266V29.5494H16.25V30.9259ZM16.25 28.582H17.6266V27.2054H16.25V28.582ZM16.25 26.2391H17.6266V24.862H16.25V26.2391ZM16.25 33.2693H17.6266V31.8928H16.25V33.2693ZM33.025 24.862V26.2391H34.4016V24.862H33.025ZM33.025 30.9259H34.4016V29.5494H33.025V30.9259ZM33.025 28.582H34.4016V27.2054H33.025V28.582ZM28.1531 20.6886H29.5297V19.3115H28.1531V20.6886ZM21.1224 20.6886H22.4994V19.3115H21.1224V20.6886ZM25.8092 20.6886H27.1858V19.3115H25.8092V20.6886ZM23.4658 20.6886H24.8424V19.3115H23.4658V20.6886ZM25.8092 38.4803H27.1858V37.1032H25.8092V38.4803ZM23.4658 38.4803H24.8424V37.1032H23.4658V38.4803ZM21.1224 38.4803H22.4994V37.1032H21.1224V38.4803Z" fill="#EDEBD7" />
                </svg>
                <div className="-bottom-4 absolute mx-auto self-center">
                    <span className="whitespace-nowrap text-sm 2xl:text-base font-work font-medium tracking-wide opacity-0 group-hover:opacity-100">BACK TO HOME</span>
                </div>
            </div>
        </a>
    )
}

export default Logo;
