<svg class="meteor-logo" viewBox="0 0 532 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M101.896 25.352V125H88.792V50.696L55.672 125H46.456L13.192 50.552V125H0.0880127V25.352H14.2L51.064 107.72L87.928 25.352H101.896Z"
        stroke="#eaeaea"
        stroke-width="5"
    />
    <path
        d="M137.223 35.288V68.84H173.799V79.64H137.223V114.2H178.119V125H124.119V24.488H178.119V35.288H137.223Z"
        stroke="#eaeaea"
        stroke-width="5"
    />
    <path
        d="M259.723 24.632V35.288H232.363V125H219.259V35.288H191.755V24.632H259.723Z"
        stroke="#eaeaea"
        stroke-width="5"
    />
    <path
        d="M288.958 35.288V68.84H325.534V79.64H288.958V114.2H329.854V125H275.854V24.488H329.854V35.288H288.958Z"
        stroke="#eaeaea"
        stroke-width="5"
    />
    <path
        d="M515.733 125L491.829 83.96H475.989V125H462.885V24.632H495.285C502.869 24.632 509.253 25.928 514.437 28.52C519.717 31.112 523.653 34.616 526.245 39.032C528.837 43.448 530.133 48.488 530.133 54.152C530.133 61.064 528.117 67.16 524.085 72.44C520.149 77.72 514.197 81.224 506.229 82.952L531.429 125H515.733ZM475.989 73.448H495.285C502.389 73.448 507.717 71.72 511.269 68.264C514.821 64.712 516.597 60.008 516.597 54.152C516.597 48.2 514.821 43.592 511.269 40.328C507.813 37.064 502.485 35.432 495.285 35.432H475.989V73.448Z"
        stroke="#eaeaea"
        stroke-width="5"
    />
    <path
        d="M388.661 120.503C393.958 123.501 399.817 125 406.24 125C412.728 125 418.621 123.501 423.918 120.503C429.215 117.439 433.386 113.208 436.432 107.812C439.477 102.416 441 96.2872 441 89.4254C441 82.5637 439.477 76.4347 436.432 71.0386C433.386 65.6424 421.215 57.4454 415.918 54.4476L336.5 0L375.048 101.812C378 112 383.364 117.439 388.661 120.503Z"
        stroke="#cc0000"
        stroke-width="5"
    />
</svg>

<style>
    .meteor-logo {
        overflow: visible;
        animation: fill 0.5s ease forwards 3s;

        height: 8rem;
    }

    .meteor-logo path:nth-child(1) {
        stroke-dasharray: 755px;
        stroke-dashoffset: 755px;
        animation: logoAnim 2s ease forwards;
        stroke-linecap: square;
    }

    .meteor-logo path:nth-child(2) {
        stroke-dasharray: 464px;
        stroke-dashoffset: 464px;
        animation: logoAnim 2s ease forwards 0.3s;
        stroke-linecap: square;
    }

    .meteor-logo path:nth-child(3) {
        stroke-dasharray: 337px;
        stroke-dashoffset: 337px;
        animation: logoAnim 2s ease forwards 0.6s;
        stroke-linecap: square;
    }

    .meteor-logo path:nth-child(4) {
        stroke-dasharray: 464px;
        stroke-dashoffset: 464px;
        animation: logoAnim 2s ease forwards 0.9s;
        stroke-linecap: square;
    }

    .meteor-logo path:nth-child(5) {
        stroke-dasharray: 549px;
        stroke-dashoffset: 549px;
        animation: logoAnim 3s ease forwards 1.5s;
        stroke-linecap: round;
    }

    .meteor-logo path:nth-child(6) {
        stroke-dasharray: 549px;
        stroke-dashoffset: 549px;
        animation:
            logoAnim 3s ease forwards 1.5s,
            fill-red 0.5s ease forwards 3s;
    }

    @keyframes logoAnim {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fill {
        from {
            fill: transparent;
        }
        to {
            fill: #eaeaea;
        }
    }

    @keyframes fill-red {
        from {
            fill: transparent;
        }
        to {
            fill: #ff0000;
        }
    }

    @media screen and (max-width: 1100px) {
        .meteor-logo {
            height: 6rem;
        }
    }

    @media screen and (max-width: 700px) {
        .meteor-logo {
            height: 4rem;
        }
    }

    @media screen and (max-width: 300px) {
        .meteor-logo {
            height: 3rem;
        }
    }
</style>
