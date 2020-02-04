/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * y Axis  config options
 */
export default {
    /**
     * Set clip-path attribute for y axis element
     * - **NOTE**: `clip-path` attribute for y Axis is set only when `axis.y.inner` option is true.
     * @name axis․y․clipPath
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * // don't set 'clip-path' attribute
     * clipPath: false
     */
    axis_y_clipPath: true,

    /**
     * Show or hide y axis.
     * @name axis․y․show
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * axis: {
     *   y: {
     *     show: false
     *   }
     * }
     */
    axis_y_show: true,

    /**
     * Set type of y axis.<br><br>
     * **Available Values:**
     *   - timeseries
     *   - category
     *   - indexed
     * @name axis․y․type
     * @memberof Options
     * @type {String}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     type: "timeseries"
     *   }
     * }
     */
    axis_y_type: undefined,

    /**
     * Set max value of y axis.
     * - **NOTE:** Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
     * @name axis․y․max
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     max: 1000
     *   }
     * }
     */
    axis_y_max: undefined,

    /**
     * Set min value of y axis.
     * - **NOTE:**
     *   Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
     * @name axis․y․min
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     min: 1000
     *   }
     * }
     */
    axis_y_min: undefined,

    /**
     * Change the direction of y axis.<br><br>
     * If true set, the direction will be from the top to the bottom.
     * @name axis․y․inverted
     * @memberof Options
     * @type {Boolean}
     * @default false
     * @example
     * axis: {
     *   y: {
     *     inverted: true
     *   }
     * }
     */
    axis_y_inverted: false,

    /**
     * Set center value of y axis.
     * @name axis․y․center
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     center: 0
     *   }
     * }
     */
    axis_y_center: undefined,

    /**
     * Show y axis inside of the chart.
     * @name axis․y․inner
     * @memberof Options
     * @type {Boolean}
     * @default false
     * @example
     * axis: {
     *   y: {
     *     inner: true
     *   }
     * }
     */
    axis_y_inner: false,

    /**
     * Set label on y axis.<br><br>
     * You can set y axis label and change its position by this option. This option works in the same way as [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label).
     * @name axis․y․label
     * @memberof Options
     * @type {String|Object}
     * @default {}
     * @see [axis.x.label](#.axis%25E2%2580%25A4x%25E2%2580%25A4label) for position string value.
     * @example
     * axis: {
     *   y: {
     *     label: "Your Y Axis"
     *   }
     * }
     *
     * axis: {
     *   y: {
     *     label: {
     *        text: "Your Y Axis",
     *        position: "outer-middle"
     *     }
     *   }
     * }
     */
    axis_y_label: {},

    /**
     * Set formatter for y axis tick text.<br><br>
     * This option accepts d3.format object as well as a function you define.
     * @name axis․y․tick․format
     * @memberof Options
     * @type {Function}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       format: function(x) {
     *           return x.getFullYear();
     *       }
     *     }
     *   }
     * }
     */
    axis_y_tick_format: undefined,

    /**
     * Setting for culling ticks.<br><br>
     * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
     * We can change the number of ticks to be shown by axis.y.tick.culling.max.
     * @name axis․y․tick․culling
     * @memberof Options
     * @type {Boolean}
     * @default false
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       culling: false
     *     }
     *   }
     * }
     */
    axis_y_tick_culling: false,

    /**
     * The number of tick texts will be adjusted to less than this value.
     * @name axis․y․tick․culling․max
     * @memberof Options
     * @type {Number}
     * @default 5
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       culling: {
     *           max: 5
     *       }
     *     }
     *   }
     * }
     */
    axis_y_tick_culling_max: 5,

    /**
     * Show y axis outer tick.
     * @name axis․y․tick․outer
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       outer: false
     *     }
     *   }
     * }
     */
    axis_y_tick_outer: true,

    /**
     * Set y axis tick values manually.
     * @name axis․y․tick․values
     * @memberof Options
     * @type {Array}
     * @default null
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       values: [100, 1000, 10000]
     *     }
     *   }
     * }
     */
    axis_y_tick_values: null,

    /**
     * Rotate y axis tick text.
     * - If you set negative value, it will rotate to opposite direction.
     * - Applied when [`axis.rotated`](#.axis%25E2%2580%25A4rotated) option is `true`.
     * @name axis․y․tick․rotate
     * @memberof Options
     * @type {Number}
     * @default 0
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       rotate: 60
     *     }
     *   }
     * }
     */
    axis_y_tick_rotate: 0,

    /**
     * Set the number of y axis ticks.<br><br>
     * - **NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
     * @name axis․y․tick․count
     * @memberof Options
     * @type {Number}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       count: 5
     *     }
     *   }
     * }
     */
    axis_y_tick_count: undefined,

    /**
     * Show or hide y axis tick line.
     * @name axis․y․tick․show
     * @memberof Options
     * @type {Boolean}
     * @default true
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       show: false
     *     }
     *   }
     * }
     */
    axis_y_tick_show: true,

    /**
    * Show or hide y axis tick text.
    * @name axis․y․tick․text․show
    * @memberof Options
    * @type {Boolean}
    * @default true
    * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.HideTickLineText)
    * @example
    * axis: {
    *   y: {
    *     tick: {
    *       text: {
    *           show: false
    *       }
    *     }
    *   }
    * }
    */
    axis_y_tick_text_show: true,

    /**
     * Set the y Axis tick text's position relatively its original position
     * @name axis․y․tick․text․position
     * @memberof Options
     * @type {Object}
     * @default {x: 0, y:0}
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       text: {
     *         position: {
     *           x: 10,
     *           y: 10
     *         }
     *       }
     *     }
     *   }
     * }
     */
    axis_y_tick_text_position: {x: 0, y: 0},

    /**
     * Set the number of y axis ticks.<br><br>
     * - **NOTE:** The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
     * @name axis․y․tick․time
     * @memberof Options
     * @private
     * @type {Object}
     * @property {Function} [time.value] D3's time interval function (https://github.com/d3/d3-time#intervals)
     * @example
     * axis: {
     *   y: {
     *     tick: {
     *       time: {
     *          // ticks at 15-minute intervals
     *          // https://github.com/d3/d3-scale/blob/master/README.md#time_ticks
     *          value: d3.timeMinute.every(15)
     *       }
     *     }
     *   }
     * }
     */
    // @TODO: not fully implemented yet
    axis_y_tick_time_value: undefined,

    /**
     * Set padding for y axis.<br><br>
     * You can set padding for y axis to create more space on the edge of the axis.
     * This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.
     *
     * - **NOTE:** For area and bar type charts, [area.zerobased](#.area) or [bar.zerobased](#.bar) options should be set to 'false` to get padded bottom.
     * @name axis․y․padding
     * @memberof Options
     * @type {Object|Number}
     * @default {}
     * @example
     * axis: {
     *   y: {
     *     padding: {
     *       top: 0,
     *       bottom: 0
     *     },
     *
     *     // or set both values at once.
     *     padding: 10
     *   }
     * }
     */
    axis_y_padding: {},

    /**
     * Set default range of y axis.<br><br>
     * This option set the default value for y axis when there is no data on init.
     * @name axis․y․default
     * @memberof Options
     * @type {Array}
     * @default undefined
     * @example
     * axis: {
     *   y: {
     *     default: [0, 1000]
     *   }
     * }
     */
    axis_y_default: undefined,

    /**
     * Set additional axes for y Axis.
     * - **NOTE:** Axis' scale is based on y Axis value if domain option isn't set.
     *
     * Each axis object should consist with following options:
     *
     * | Name | Type | Default | Description |
     * | --- | --- | --- | --- |
     * | domain | Array | - | Set the domain value |
     * | tick.outer | Boolean | true | Show outer tick |
     * | tick.format | Function | - | Set formatter for tick text |
     * | tick.count | Number | - | Set the number of y axis ticks |
     * | tick.values | Array | - | Set tick values manually |
     * @name axis․y․axes
     * @memberof Options
     * @type {Array}
     * @see [Demo](https://naver.github.io/billboard.js/demo/#Axis.MultiAxes)
     * @see [Demo: Domain](https://naver.github.io/billboard.js/demo/#Axis.MultiAxesDomain)
     * @example
     * y: {
     *    axes: [
     *      {
     *        // if set, will not be correlated with the main y Axis domain value
     *        domain: [0, 1000],
     *        tick: {
     *          outer: false,
     *          format: function(x) {
     *             return x + "%";
     *          },
     *          count: 2,
     *          values: [10, 20, 30]
     *        }
     *      },
     *      ...
     *    ]
     * }
     */
    axis_y_axes: []
};