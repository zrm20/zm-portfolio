import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export default function AnimatedLogo({ stroke = 4, duration, ...props }) {
  const zmVariants = {
    zHidden: {
      opacity: 0,
      pathLength: 0
    },
    mHidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: duration * .66,
        east: "easeInOut"
      }
    }
  };

  const engineeringVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: duration * .66,
        duration: duration * .33
      }
    }
  }


  return (
    <Box {...props}>
      <svg viewBox="0 0 1024 1024" >
        <g id="Layer-2"/>
        <g id="Layer-1">

          {/* Z */}
          <motion.path 
            d="M89.8488 137.95L18.9041 274.614L18.9041 278.701L250.195 278.701L82.2787 685.812L82.4127 685.879L39.4707 774.343L39.4707 778.496L443.701 778.496L509.789 635.535L298.764 635.535L452.176 263.527L514.311 137.95L89.8488 137.95Z" 
            fill="none" 
            opacity="1" 
            stroke="#d96a00" 
            stroke-width={stroke.toString()}
            variants={zmVariants}
            initial="zHidden"
            animate="visible" 
          />

          {/* M */}
          <motion.path 
            d="M778.729 136.812L778.729 137.482L774.911 137.482L734.816 241.956L650.305 479.008L576.681 266.642L502.889 424.911L621.968 780.539L681.155 780.539L682.16 777.692L682.294 777.692L815.642 414.963L850.846 779.903L1005.1 779.903L920.652 136.812L778.729 136.812Z" 
            fill="none" 
            opacity="1" 
            stroke="#fff" 
            stroke-width={stroke.toString()} 
            variants={zmVariants}
            initial="mHidden"
            animate="visible"
          />
          <motion.g 
            fill="#303030" 
            opacity="1" 
            stroke="none"
            variants={engineeringVariants}
            initial="hidden"
            animate="visible"
          >
            <path d="M190.303 891.945L235.5 891.945L235.5 902.695L178.209 902.695L178.209 816.209L233.668 816.209L233.668 826.836L190.303 826.836L190.303 852.733L231.103 852.733L231.103 863.117L190.303 863.117L190.303 891.945Z" />
            <path d="M261.397 844.793C261.56 846.259 261.682 847.908 261.764 849.741C261.845 851.573 261.886 853.1 261.886 854.322L262.253 854.322C262.985 852.774 263.983 851.329 265.245 849.985C266.508 848.641 267.953 847.46 269.582 846.442C271.211 845.424 273.002 844.63 274.957 844.06C276.911 843.49 278.947 843.205 281.065 843.205C284.811 843.205 288.027 843.836 290.715 845.099C293.402 846.361 295.642 848.051 297.433 850.168C299.225 852.286 300.548 854.769 301.403 857.62C302.259 860.47 302.686 863.524 302.686 866.781L302.686 902.695L291.203 902.695L291.203 870.568C291.203 868.207 291.02 865.967 290.654 863.85C290.287 861.732 289.615 859.859 288.638 858.23C287.661 856.602 286.317 855.299 284.607 854.322C282.897 853.344 280.698 852.856 278.011 852.856C273.45 852.856 269.724 854.586 266.833 858.047C263.942 861.508 262.497 866.13 262.497 871.912L262.497 902.695L251.014 902.695L251.014 857.253C251.014 855.706 250.973 853.711 250.892 851.268C250.811 848.824 250.688 846.666 250.526 844.793L261.397 844.793Z" />
            <path d="M326.629 912.59C329.153 915.44 332.309 917.72 336.096 919.431C339.883 921.141 343.771 921.996 347.762 921.996C351.589 921.996 354.806 921.446 357.412 920.347C360.018 919.247 362.115 917.741 363.703 915.827C365.291 913.913 366.431 911.653 367.123 909.047C367.815 906.441 368.162 903.632 368.162 900.619L368.162 893.167L367.917 893.167C365.8 896.425 362.909 898.908 359.244 900.619C355.58 902.329 351.671 903.184 347.517 903.184C343.12 903.184 339.109 902.41 335.485 900.863C331.861 899.316 328.787 897.198 326.262 894.511C323.738 891.823 321.783 888.668 320.399 885.044C319.014 881.42 318.322 877.531 318.322 873.378C318.322 869.225 319.014 865.316 320.399 861.651C321.783 857.986 323.738 854.79 326.262 852.062C328.787 849.333 331.841 847.175 335.424 845.587C339.007 843.999 342.998 843.205 347.395 843.205C351.548 843.205 355.518 844.101 359.305 845.893C363.092 847.684 366.085 850.413 368.284 854.077L368.528 854.077L368.528 844.793L379.644 844.793L379.644 899.763C379.644 903.998 379.115 908.05 378.056 911.918C376.998 915.786 375.206 919.207 372.681 922.179C370.157 925.152 366.859 927.534 362.787 929.325C358.715 931.117 353.666 932.013 347.639 932.013C342.59 932.013 337.521 931.096 332.431 929.264C327.341 927.432 322.964 924.846 319.299 921.507L326.629 912.59ZM330.171 873.134C330.171 875.821 330.599 878.386 331.454 880.829C332.309 883.272 333.571 885.431 335.241 887.304C336.91 889.177 338.926 890.683 341.287 891.823C343.649 892.963 346.336 893.534 349.35 893.534C352.281 893.534 354.969 893.004 357.412 891.945C359.855 890.887 361.932 889.441 363.642 887.609C365.352 885.777 366.675 883.619 367.612 881.135C368.548 878.651 369.017 875.984 369.017 873.134C369.017 870.365 368.548 867.759 367.612 865.316C366.675 862.872 365.332 860.714 363.581 858.841C361.83 856.968 359.753 855.482 357.351 854.383C354.948 853.283 352.281 852.733 349.35 852.733C346.336 852.733 343.649 853.283 341.287 854.383C338.926 855.482 336.91 856.948 335.241 858.78C333.571 860.613 332.309 862.771 331.454 865.254C330.599 867.738 330.171 870.365 330.171 873.134Z" />
            <path d="M410.916 902.695L399.433 902.695L399.433 844.793L410.916 844.793L410.916 902.695ZM412.871 823.905C412.871 826.022 412.117 827.773 410.611 829.157C409.104 830.542 407.292 831.234 405.175 831.234C403.057 831.234 401.266 830.521 399.8 829.096C398.334 827.671 397.601 825.941 397.601 823.905C397.601 821.787 398.334 820.016 399.8 818.591C401.266 817.166 403.057 816.453 405.175 816.453C407.292 816.453 409.104 817.166 410.611 818.591C412.117 820.016 412.871 821.787 412.871 823.905Z" />
            <path d="M441.333 844.793C441.496 846.259 441.618 847.908 441.699 849.741C441.781 851.573 441.822 853.1 441.822 854.322L442.188 854.322C442.921 852.774 443.919 851.329 445.181 849.985C446.443 848.641 447.889 847.46 449.517 846.442C451.146 845.424 452.938 844.63 454.892 844.06C456.847 843.49 458.883 843.205 461 843.205C464.746 843.205 467.963 843.836 470.65 845.099C473.338 846.361 475.577 848.051 477.369 850.168C479.161 852.286 480.484 854.769 481.339 857.62C482.194 860.47 482.622 863.524 482.622 866.781L482.622 902.695L471.139 902.695L471.139 870.568C471.139 868.207 470.956 865.967 470.589 863.85C470.223 861.732 469.551 859.859 468.574 858.23C467.596 856.602 466.253 855.299 464.543 854.322C462.832 853.344 460.634 852.856 457.946 852.856C453.386 852.856 449.66 854.586 446.769 858.047C443.878 861.508 442.432 866.13 442.432 871.912L442.432 902.695L430.95 902.695L430.95 857.253C430.95 855.706 430.909 853.711 430.828 851.268C430.746 848.824 430.624 846.666 430.461 844.793L441.333 844.793Z" />
            <path d="M544.432 868.614C544.351 866.333 543.964 864.196 543.272 862.201C542.58 860.205 541.562 858.475 540.218 857.009C538.874 855.543 537.205 854.383 535.21 853.527C533.214 852.672 530.873 852.245 528.186 852.245C525.743 852.245 523.442 852.672 521.284 853.527C519.126 854.383 517.253 855.543 515.665 857.009C514.077 858.475 512.774 860.205 511.756 862.201C510.738 864.196 510.147 866.333 509.984 868.614L544.432 868.614ZM556.037 873.256C556.037 873.907 556.037 874.559 556.037 875.21C556.037 875.862 555.997 876.513 555.915 877.165L509.984 877.165C510.066 879.608 510.616 881.908 511.634 884.066C512.652 886.225 514.016 888.098 515.726 889.686C517.436 891.274 519.411 892.516 521.65 893.411C523.89 894.307 526.272 894.755 528.796 894.755C532.705 894.755 536.085 893.9 538.935 892.19C541.786 890.48 544.025 888.403 545.654 885.96L553.716 892.434C550.622 896.506 546.977 899.499 542.783 901.413C538.589 903.326 533.927 904.283 528.796 904.283C524.399 904.283 520.327 903.55 516.581 902.084C512.835 900.619 509.618 898.562 506.931 895.916C504.243 893.269 502.126 890.072 500.578 886.326C499.031 882.58 498.258 878.427 498.258 873.866C498.258 869.387 499.011 865.254 500.517 861.468C502.024 857.681 504.121 854.444 506.808 851.756C509.496 849.069 512.672 846.972 516.337 845.465C520.001 843.959 523.951 843.205 528.186 843.205C532.42 843.205 536.268 843.898 539.729 845.282C543.191 846.666 546.122 848.662 548.525 851.268C550.927 853.874 552.78 857.029 554.083 860.735C555.386 864.44 556.037 868.614 556.037 873.256Z" />
            <path d="M614.428 868.614C614.346 866.333 613.959 864.196 613.267 862.201C612.575 860.205 611.557 858.475 610.213 857.009C608.87 855.543 607.2 854.383 605.205 853.527C603.21 852.672 600.868 852.245 598.181 852.245C595.738 852.245 593.437 852.672 591.279 853.527C589.121 854.383 587.248 855.543 585.66 857.009C584.072 858.475 582.769 860.205 581.751 862.201C580.733 864.196 580.143 866.333 579.98 868.614L614.428 868.614ZM626.033 873.256C626.033 873.907 626.033 874.559 626.033 875.21C626.033 875.862 625.992 876.513 625.91 877.165L579.98 877.165C580.061 879.608 580.611 881.908 581.629 884.066C582.647 886.225 584.011 888.098 585.721 889.686C587.431 891.274 589.406 892.516 591.646 893.411C593.885 894.307 596.267 894.755 598.792 894.755C602.701 894.755 606.08 893.9 608.931 892.19C611.781 890.48 614.021 888.403 615.649 885.96L623.712 892.434C620.617 896.506 616.973 899.499 612.779 901.413C608.585 903.326 603.922 904.283 598.792 904.283C594.394 904.283 590.322 903.55 586.576 902.084C582.83 900.619 579.613 898.562 576.926 895.916C574.238 893.269 572.121 890.072 570.574 886.326C569.026 882.58 568.253 878.427 568.253 873.866C568.253 869.387 569.006 865.254 570.513 861.468C572.019 857.681 574.116 854.444 576.804 851.756C579.491 849.069 582.667 846.972 586.332 845.465C589.997 843.959 593.946 843.205 598.181 843.205C602.416 843.205 606.264 843.898 609.725 845.282C613.186 846.666 616.118 848.662 618.52 851.268C620.922 853.874 622.775 857.029 624.078 860.735C625.381 864.44 626.033 868.614 626.033 873.256Z" />
            <path d="M642.035 857.253C642.035 855.706 641.994 853.711 641.913 851.268C641.831 848.824 641.709 846.666 641.546 844.793L652.418 844.793C652.581 846.259 652.703 847.949 652.785 849.863C652.866 851.777 652.907 853.344 652.907 854.566L653.273 854.566C654.902 851.145 657.284 848.397 660.419 846.32C663.555 844.244 667.077 843.205 670.986 843.205C672.777 843.205 674.284 843.368 675.506 843.694L675.017 854.322C673.388 853.914 671.637 853.711 669.764 853.711C666.995 853.711 664.593 854.22 662.557 855.238C660.521 856.256 658.831 857.62 657.488 859.33C656.144 861.04 655.146 863.015 654.495 865.254C653.843 867.494 653.518 869.835 653.518 872.278L653.518 902.695L642.035 902.695L642.035 857.253Z" />
            <path d="M697.86 902.695L686.377 902.695L686.377 844.793L697.86 844.793L697.86 902.695ZM699.815 823.905C699.815 826.022 699.061 827.773 697.555 829.157C696.048 830.542 694.236 831.234 692.119 831.234C690.001 831.234 688.21 830.521 686.744 829.096C685.278 827.671 684.545 825.941 684.545 823.905C684.545 821.787 685.278 820.016 686.744 818.591C688.21 817.166 690.001 816.453 692.119 816.453C694.236 816.453 696.048 817.166 697.555 818.591C699.061 820.016 699.815 821.787 699.815 823.905Z" />
            <path d="M728.277 844.793C728.44 846.259 728.562 847.908 728.643 849.741C728.725 851.573 728.766 853.1 728.766 854.322L729.132 854.322C729.865 852.774 730.863 851.329 732.125 849.985C733.387 848.641 734.833 847.46 736.461 846.442C738.09 845.424 739.882 844.63 741.836 844.06C743.791 843.49 745.827 843.205 747.944 843.205C751.69 843.205 754.907 843.836 757.594 845.099C760.282 846.361 762.521 848.051 764.313 850.168C766.104 852.286 767.428 854.769 768.283 857.62C769.138 860.47 769.566 863.524 769.566 866.781L769.566 902.695L758.083 902.695L758.083 870.568C758.083 868.207 757.9 865.967 757.533 863.85C757.167 861.732 756.495 859.859 755.518 858.23C754.54 856.602 753.197 855.299 751.487 854.322C749.776 853.344 747.578 852.856 744.89 852.856C740.33 852.856 736.604 854.586 733.713 858.047C730.822 861.508 729.376 866.13 729.376 871.912L729.376 902.695L717.894 902.695L717.894 857.253C717.894 855.706 717.853 853.711 717.772 851.268C717.69 848.824 717.568 846.666 717.405 844.793L728.277 844.793Z" />
            <path d="M793.508 912.59C796.033 915.44 799.188 917.72 802.975 919.431C806.762 921.141 810.651 921.996 814.641 921.996C818.469 921.996 821.685 921.446 824.291 920.347C826.897 919.247 828.994 917.741 830.582 915.827C832.17 913.913 833.311 911.653 834.003 909.047C834.695 906.441 835.041 903.632 835.041 900.619L835.041 893.167L834.797 893.167C832.679 896.425 829.788 898.908 826.124 900.619C822.459 902.329 818.55 903.184 814.397 903.184C809.999 903.184 805.988 902.41 802.364 900.863C798.74 899.316 795.666 897.198 793.142 894.511C790.617 891.823 788.663 888.668 787.278 885.044C785.894 881.42 785.202 877.531 785.202 873.378C785.202 869.225 785.894 865.316 787.278 861.651C788.663 857.986 790.617 854.79 793.142 852.062C795.666 849.333 798.72 847.175 802.303 845.587C805.887 843.999 809.877 843.205 814.275 843.205C818.428 843.205 822.398 844.101 826.185 845.893C829.972 847.684 832.964 850.413 835.163 854.077L835.408 854.077L835.408 844.793L846.524 844.793L846.524 899.763C846.524 903.998 845.994 908.05 844.936 911.918C843.877 915.786 842.085 919.207 839.561 922.179C837.036 925.152 833.738 927.534 829.666 929.325C825.594 931.117 820.545 932.013 814.519 932.013C809.47 932.013 804.4 931.096 799.311 929.264C794.221 927.432 789.843 924.846 786.179 921.507L793.508 912.59ZM797.051 873.134C797.051 875.821 797.478 878.386 798.333 880.829C799.188 883.272 800.451 885.431 802.12 887.304C803.79 889.177 805.805 890.683 808.167 891.823C810.528 892.963 813.216 893.534 816.229 893.534C819.161 893.534 821.848 893.004 824.291 891.945C826.734 890.887 828.811 889.441 830.521 887.609C832.231 885.777 833.555 883.619 834.491 881.135C835.428 878.651 835.896 875.984 835.896 873.134C835.896 870.365 835.428 867.759 834.491 865.316C833.555 862.872 832.211 860.714 830.46 858.841C828.709 856.968 826.633 855.482 824.23 854.383C821.828 853.283 819.161 852.733 816.229 852.733C813.216 852.733 810.528 853.283 808.167 854.383C805.805 855.482 803.79 856.948 802.12 858.78C800.451 860.613 799.188 862.771 798.333 865.254C797.478 867.738 797.051 870.365 797.051 873.134Z" />
          </motion.g>
        </g>
      </svg>
    </Box>
  )
}
