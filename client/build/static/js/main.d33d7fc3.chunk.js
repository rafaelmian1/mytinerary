;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    102: function (e, t, n) {},
    103: function (e, t, n) {},
    105: function (e, t, n) {},
    107: function (e, t, n) {},
    108: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(1),
        s = n.n(r),
        c = n(20),
        a = n.n(c),
        i = (n(59), n(60), n(75), n(4)),
        o = n(11),
        l = n(2),
        u = (n(76), n(0)),
        d = function (e) {
          var t = e.children,
            n = e.classList,
            r = e.title,
            s = e.id
          return Object(u.jsxs)('div', {
            id: s,
            className: 'carousel slide carousel-dark ' + n,
            'data-bs-ride': 'carousel',
            children: [
              r && Object(u.jsx)('h2', { className: 'pop', children: r }),
              t,
            ],
          })
        },
        j = function (e) {
          var t = e.children,
            n = e.index,
            r = e.home
          return Object(u.jsx)('div', {
            className: 'carousel-item'.concat(0 === n ? ' active' : ''),
            children: r
              ? Object(u.jsx)('div', {
                  className: 'd-flex w-100 flex-column align-items-center',
                  children: Object(u.jsx)('div', {
                    className: 'row flex-grow-1 carouItem',
                    children: t,
                  }),
                })
              : Object(u.jsx)('div', {
                  className: 'w-100',
                  style: { height: '50vh' },
                  children: t,
                }),
          })
        },
        b = n(19),
        m = function (e) {
          var t = e.number,
            n = e.id
          return Object(u.jsx)(
            'div',
            {
              className: 'carousel-indicators d-flex',
              children: Object(b.a)(Array(t)).map(function (e, t) {
                return 0 === t
                  ? Object(u.jsx)(
                      'button',
                      {
                        type: 'button',
                        'data-bs-target': '#' + n,
                        'data-bs-slide-to': t,
                        className: 'active',
                        'aria-current': 'true',
                        'aria-label': 'Slide ' + (t + 1),
                      },
                      'indicators' + t
                    )
                  : Object(u.jsx)(
                      'button',
                      {
                        type: 'button',
                        'data-bs-target': '#' + n,
                        'data-bs-slide-to': t,
                        'aria-label': 'Slide ' + (t + 1),
                      },
                      'indicators' + t
                    )
              }),
            },
            'tuki'
          )
        },
        p = function (e) {
          var t = e.id,
            n = e.interval,
            s = Object(r.useRef)(''),
            c = Object(r.useRef)(null)
          return (
            Object(r.useEffect)(function () {
              return (
                (c.current = setTimeout(function () {
                  return s.current.click()
                }, n)),
                function () {
                  return clearTimeout(c.current)
                }
              )
            }),
            Object(u.jsxs)('div', {
              children: [
                Object(u.jsx)('button', {
                  className: 'carousel-control-prev color d-none d-md-flex',
                  type: 'button',
                  'data-bs-target': '#' + t,
                  'data-bs-slide': 'prev',
                  children: Object(u.jsx)('span', {
                    className: 'carousel-control-prev-icon',
                    'aria-hidden': 'true',
                  }),
                }),
                Object(u.jsx)('button', {
                  ref: s,
                  className: 'carousel-control-next color d-none d-md-flex',
                  type: 'button',
                  'data-bs-target': '#' + t,
                  'data-bs-slide': 'next',
                  children: Object(u.jsx)('span', {
                    className: 'carousel-control-next-icon',
                    'aria-hidden': 'true',
                  }),
                }),
              ],
            })
          )
        },
        h = n(9),
        x = function (e) {
          var t = e.image,
            n = e.card,
            s = e.carousel,
            c = e.act,
            a = e.children,
            i = Object(r.useState)(0),
            o = Object(h.a)(i, 2),
            l = o[0],
            d = o[1],
            j = Object(r.useState)(!1),
            b = Object(h.a)(j, 2),
            m = b[0],
            p = b[1],
            x = Object(r.useRef)(null)
          return (
            Object(r.useEffect)(function () {
              return (
                m &&
                  (x.current = setTimeout(function () {
                    return d(3 === l ? 0 : l + 1)
                  }, 2e3)),
                function () {
                  return clearTimeout(x.current)
                }
              )
            }),
            c
              ? Object(u.jsx)('div', {
                  className: 'text-center text-light foto',
                  id: t.city,
                  style: {
                    backgroundImage: 'url('.concat(t.img, ')'),
                    height: '50vh',
                  },
                  children: Object(u.jsxs)('div', {
                    className: 'description',
                    children: [
                      Object(u.jsx)('h5', {
                        className: 'px-3 fs-1',
                        children: t.name,
                      }),
                      Object(u.jsx)('h5', { children: t.description }),
                    ],
                  }),
                })
              : Object(u.jsxs)('div', {
                  className: 'd-flex foto '.concat(
                    n
                      ? 'cityCard m-0 p-0 a align-items-center justify-content-center'
                      : 'carru hover justify-content-end align-items-end text-light'
                  ),
                  id: t.city,
                  onMouseEnter: function () {
                    return p(!0)
                  },
                  onMouseLeave: function () {
                    return p(!1)
                  },
                  style: {
                    backgroundImage: 'url('.concat(
                      n ? t.img[0] : t.img[l],
                      ')'
                    ),
                  },
                  children: [
                    n &&
                      !m &&
                      Object(u.jsx)('div', {
                        className: 'd-flex flex-column',
                        children: Object(u.jsx)('h5', {
                          className: 'cityName',
                          children: t.city,
                        }),
                      }),
                    s && a,
                  ],
                })
          )
        },
        O = n(5),
        f = n(3),
        g = n.n(f),
        v = n(7),
        y = n(52),
        w = n.n(y),
        N = localStorage.getItem('token'),
        C = { Authorization: 'Bearer '.concat(N) },
        k = w.a.create({
          baseURL: 'https://mytinerary.rafaelmiandev.com/api',
          headers: C,
        }),
        I = n(6),
        S = function () {
          return Object(u.jsxs)('div', {
            id: 'fountainG',
            children: [
              Object(u.jsx)('div', {
                id: 'fountainG_1',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_2',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_3',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_4',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_5',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_6',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_7',
                className: 'fountainG',
              }),
              Object(u.jsx)('div', {
                id: 'fountainG_8',
                className: 'fountainG',
              }),
            ],
          })
        },
        E = {
          getSlides: {
            getSlides: function (e) {
              return (function () {
                var t = Object(v.a)(
                  g.a.mark(function t(n) {
                    var r
                    return g.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0), (t.next = 3), k.get('/carousel')
                              )
                            case 3:
                              if ((r = t.sent).data.success) {
                                t.next = 6
                                break
                              }
                              throw new Error(r.data.response)
                            case 6:
                              n({
                                type: 'GET_SLIDES',
                                payload: r.data.response,
                              }),
                                (t.next = 14)
                              break
                            case 9:
                              ;(t.prev = 9),
                                (t.t0 = t.catch(0)),
                                I.b.error(
                                  "We're doing some maintenance, please try later!",
                                  {
                                    position: 'top-right',
                                    autoClose: 2e3,
                                    hideProgressBar: !1,
                                    closeOnClick: !0,
                                    pauseOnHover: !1,
                                    draggable: !0,
                                    progress: void 0,
                                  }
                                ),
                                console.error(t.t0.message),
                                e.history.push('/error')
                            case 14:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[0, 9]]
                    )
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()
            },
          }.getSlides,
        },
        T = Object(O.b)(function (e) {
          return { slides: e.carousel.slides }
        }, E)(function (e) {
          return (
            Object(r.useEffect)(function () {
              0 === e.slides.length && e.getSlides(e)
            }, []),
            window.scrollTo(0, 0),
            0 === e.slides.length
              ? Object(u.jsx)('div', {
                  className: 'cities bg-dark text-light fs-1',
                  children: Object(u.jsx)(S, {}),
                })
              : Object(u.jsxs)(d, {
                  classList: 'text-center carouselToggler',
                  title: 'Popular MyTineraries',
                  id: 'home',
                  children: [
                    Object(u.jsx)(m, { number: 3, id: 'home' }),
                    Object(u.jsx)('div', {
                      className: 'carousel-inner',
                      children: e.slides.map(function (e, t) {
                        return Object(u.jsx)(
                          j,
                          {
                            home: !0,
                            index: t,
                            children: e.map(function (e) {
                              return Object(u.jsx)(
                                'div',
                                {
                                  className: 'col-12 col-lg-6 g-4',
                                  children: Object(u.jsx)(i.b, {
                                    to: '/cities/'.concat(e._id),
                                    onClick: function () {
                                      return window.scrollTo(0, 0)
                                    },
                                    children: Object(u.jsx)(x, {
                                      image: e,
                                      card: !1,
                                      carousel: !0,
                                      children: Object(u.jsx)('div', {
                                        className: 'description',
                                        children: Object(u.jsx)('h5', {
                                          className: 'px-3 fs-1',
                                          children: e.city,
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                                e.city
                              )
                            }),
                          },
                          'cities' + t
                        )
                      }),
                    }),
                    Object(u.jsx)(p, { id: 'home', interval: 3e3 }, 'cities'),
                  ],
                })
          )
        }),
        _ = function () {
          return Object(u.jsx)('div', {
            className: 'content',
            children: Object(u.jsxs)('div', {
              className: 'subcontent',
              children: [
                Object(u.jsxs)('h1', {
                  className: 'brand',
                  children: [
                    'My',
                    Object(u.jsx)('span', {
                      className: 'tinerary',
                      children: 'Tinerary',
                    }),
                  ],
                }),
                Object(u.jsx)('h2', {
                  className: 'px-4 mb-5 sub',
                  style: { fontStyle: 'italic' },
                  children:
                    'Find your perfect trip, designed by insiders who know and love their cities!',
                }),
                Object(u.jsx)('button', {
                  type: 'button',
                  className: 'px-4 gap-3 go',
                  children: Object(u.jsx)(i.b, {
                    to: '/cities',
                    children: Object(u.jsx)('span', {
                      className: 'callToAction',
                      children: 'Explore!',
                    }),
                  }),
                }),
              ],
            }),
          })
        },
        R = function () {
          return Object(u.jsxs)('video', {
            autoPlay: 'autoplay',
            loop: 'loop',
            muted: !0,
            id: 'video-id',
            className: 'video',
            children: [
              Object(u.jsx)('source', {
                src: './assets/video2.mp4',
                type: 'video/mp4',
              }),
              'Your browser does not support the video tag.',
            ],
          })
        },
        B = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [Object(u.jsx)(R, {}), Object(u.jsx)(_, {})],
          })
        },
        G = function (e) {
          return (
            Object(r.useEffect)(
              function () {
                e.history.push('/'), (document.title = 'myTinerary - Home')
              },
              [e.history]
            ),
            Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)(B, {}),
                Object(u.jsx)(T, Object(l.a)({}, e)),
                Object(u.jsx)(I.a, {
                  position: 'top-right',
                  autoClose: 5e3,
                  hideProgressBar: !1,
                  newestOnTop: !1,
                  closeOnClick: !0,
                  rtl: !1,
                  pauseOnFocusLoss: !0,
                  draggable: !0,
                  pauseOnHover: !0,
                }),
              ],
            })
          )
        },
        L =
          (n(102),
          function (e) {
            var t = e.img,
              n = e.text
            return Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)('div', {
                  style: {
                    backgroundImage: 'url('.concat(t, ')'),
                    border: '4px solid white',
                  },
                  className: 'd-flex w-100 my-4 foto banner',
                }),
                n &&
                  Object(u.jsx)('h1', {
                    className: 'welcome',
                    children: n.toUpperCase(),
                  }),
              ],
            })
          }),
        H = {
          getCities: function (e) {
            return (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), k.get('/cities')
                          case 3:
                            if ((r = t.sent).data.success) {
                              t.next = 6
                              break
                            }
                            throw new Error(r.data.response)
                          case 6:
                            n({ type: 'GET_CITIES', payload: r.data.response }),
                              (t.next = 14)
                            break
                          case 9:
                            ;(t.prev = 9),
                              (t.t0 = t.catch(0)),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              ),
                              console.error(t.t0.message),
                              e.history.push('/error')
                          case 14:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          },
          getCity: function (e) {
            return (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              k.get('/city/' + e.match.params.id)
                            )
                          case 3:
                            if ((r = t.sent).data.success) {
                              t.next = 6
                              break
                            }
                            throw new Error(r.data.response)
                          case 6:
                            n({ type: 'GET_CITY', payload: r.data.response }),
                              (t.next = 14)
                            break
                          case 9:
                            ;(t.prev = 9),
                              (t.t0 = t.catch(0)),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              ),
                              console.error(t.t0.message),
                              e.history.push('/error')
                          case 14:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          },
          filterCities: function (e) {
            return function (t) {
              return t({ type: 'FILTER_CITIES', payload: e })
            }
          },
          resetFilteredCities: function () {
            return function (e) {
              return e({ type: 'RESET_FILTERED_CITIES' })
            }
          },
          resetCity: function () {
            return function (e) {
              return e({ type: 'RESET_CITY' })
            }
          },
        },
        A = function (e) {
          var t = e.cities,
            n = e.all
          return t.map(function (e, r) {
            return Object(u.jsx)(
              'div',
              {
                className: ''.concat(
                  t.length === n.length ? 'item' : 'itemFiltered'
                ),
                children: Object(u.jsx)(i.b, {
                  to: '/cities/'.concat(e._id),
                  onClick: function () {
                    return window.scrollTo(0, 0)
                  },
                  children: Object(u.jsx)(x, { image: e, card: !0 }),
                }),
              },
              r
            )
          })
        },
        U = {
          getCities: H.getCities,
          filterCities: H.filterCities,
          resetFilteredCities: H.resetFilteredCities,
        },
        z = Object(O.b)(function (e) {
          return {
            cities: e.cities.cities,
            filteredCities: e.cities.filteredCities,
          }
        }, U)(function (e) {
          return (
            (document.title = 'myTinerary - Cities'),
            Object(r.useEffect)(function () {
              return (
                0 === e.cities.length && e.getCities(e),
                window.scrollTo(0, 0),
                function () {
                  return e.resetFilteredCities()
                }
              )
            }, []),
            0 === e.cities.length
              ? Object(u.jsx)('div', {
                  className: 'cities bg-dark text-light fs-1',
                  children: Object(u.jsx)(S, {}),
                })
              : Object(u.jsx)('div', {
                  className: 'contenedorCities',
                  children: Object(u.jsxs)('div', {
                    className: 'cities',
                    children: [
                      Object(u.jsx)(L, {
                        img: 'https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10019278401.jpg',
                        text: '',
                        light: !1,
                      }),
                      Object(u.jsx)('label', {
                        htmlFor: 'filter',
                        children: "Find what you're looking for",
                      }),
                      Object(u.jsx)('input', {
                        style: { backgroundImage: 'url(/assets/search.jpg)' },
                        id: 'filter',
                        className: 'input mb-5',
                        type: 'text',
                        name: 'cities',
                        placeholder: 'Search by cities',
                        onChange: function (t) {
                          return e.filterCities(
                            t.target.value.trim().toLowerCase()
                          )
                        },
                      }),
                      0 === e.filteredCities.length &&
                        Object(u.jsx)('div', {
                          children: Object(u.jsx)('img', {
                            src: '/assets/oops.png',
                            alt: 'oops not found',
                            style: { width: '20vw', marginTop: '5vh' },
                          }),
                        }),
                      Object(u.jsx)('div', {
                        className: 'grid',
                        children: Object(u.jsx)(A, {
                          cities: e.filteredCities,
                          all: e.cities,
                        }),
                      }),
                      Object(u.jsx)('button', {
                        type: 'button',
                        className: 'px-4 gap-3 mt-5 go',
                        children: Object(u.jsx)(i.b, {
                          to: '/',
                          onClick: function () {
                            return window.scrollTo(0, 0)
                          },
                          children: Object(u.jsx)('span', {
                            className: 'text-dark fs-4',
                            children: 'Back to Home',
                          }),
                        }),
                      }),
                    ],
                  }),
                })
          )
        }),
        F = (n(103), n(18)),
        P = n.n(F),
        M = {
          getCountries: function () {
            return (function () {
              var e = Object(v.a)(
                g.a.mark(function e(t) {
                  var n
                  return g.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              k.get(
                                'https://restcountries.eu/rest/v2/all?fields=name'
                              )
                            )
                          case 3:
                            ;(n = e.sent),
                              t({ type: 'GET_COUNTRIES', payload: n.data }),
                              (e.next = 11)
                            break
                          case 7:
                            ;(e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              )
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          },
          signUp: function (e) {
            return (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              k.post('/user/signup', e)
                            )
                          case 3:
                            if (!(r = t.sent).data.success) {
                              t.next = 9
                              break
                            }
                            P.a.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Signed up successfully',
                              showConfirmButton: !0,
                              timer: 1e3,
                            }),
                              n({ type: 'LOGGED_IN', payload: r.data }),
                              (t.next = 11)
                            break
                          case 9:
                            return (
                              r.data.error.forEach(function (e) {
                                I.b.error(e.message, {
                                  position: 'top-right',
                                  autoClose: 5e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !0,
                                  draggable: !0,
                                  progress: void 0,
                                })
                              }),
                              t.abrupt('return', r.data.error)
                            )
                          case 11:
                            t.next = 17
                            break
                          case 13:
                            ;(t.prev = 13),
                              (t.t0 = t.catch(0)),
                              console.error(t.t0),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              )
                          case 17:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 13]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          },
          logIn: function (e) {
            return (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              k.post('/user/login', e)
                            )
                          case 3:
                            ;(r = t.sent).data.success
                              ? (P.a.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'Welcome ' + r.data.user.first_name,
                                  showConfirmButton: !1,
                                  timer: 1500,
                                }),
                                n({ type: 'LOGGED_IN', payload: r.data }))
                              : I.b.error(
                                  r.data.response.includes('Google')
                                    ? r.data.response
                                    : 'Email and/or password incorrect',
                                  {
                                    position: 'top-right',
                                    autoClose: 4e3,
                                    hideProgressBar: !1,
                                    closeOnClick: !0,
                                    pauseOnHover: !1,
                                    draggable: !0,
                                    progress: void 0,
                                  }
                                ),
                              (t.next = 11)
                            break
                          case 7:
                            ;(t.prev = 7),
                              (t.t0 = t.catch(0)),
                              console.error(t.t0),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              )
                          case 11:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          },
          like: function (e, t) {
            return (function () {
              var n = Object(v.a)(
                g.a.mark(function n(r, s) {
                  return g.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (n.next = 3),
                              k.put('/user/like/', { bool: e, id: t })
                            )
                          case 3:
                            return n.abrupt('return', { success: !0 })
                          case 6:
                            ;(n.prev = 6),
                              (n.t0 = n.catch(0)),
                              P.a.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Session timed out',
                                footer:
                                  '<a href="">Why do I have this issue?</a>',
                              }),
                              r({ type: 'RESET_USER' })
                          case 10:
                          case 'end':
                            return n.stop()
                        }
                    },
                    n,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (e, t) {
                return n.apply(this, arguments)
              }
            })()
          },
          comment: function (e, t, n, r) {
            return (function () {
              var s = Object(v.a)(
                g.a.mark(function s(c) {
                  return g.a.wrap(
                    function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.prev = 0),
                              (s.next = 3),
                              k.put('/user/comment/', {
                                comment: n,
                                id: e,
                                action: t,
                                newComment: r,
                              })
                            )
                          case 3:
                            return s.abrupt('return', { success: !0 })
                          case 6:
                            ;(s.prev = 6),
                              (s.t0 = s.catch(0)),
                              P.a.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Session timed out',
                                footer:
                                  '<a href="">Why do I have this issue?</a>',
                              }),
                              c({ type: 'RESET_USER' })
                          case 10:
                          case 'end':
                            return s.stop()
                        }
                    },
                    s,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (e) {
                return s.apply(this, arguments)
              }
            })()
          },
          getId: function () {
            return (function () {
              var e = Object(v.a)(
                g.a.mark(function e(t, n) {
                  var r
                  return g.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), k.get('/user/id')
                          case 3:
                            return (r = e.sent), e.abrupt('return', r.data.id)
                          case 7:
                            ;(e.prev = 7),
                              (e.t0 = e.catch(0)),
                              P.a.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Session timed out',
                                footer:
                                  '<a href="">Why do I have this issue?</a>',
                              }),
                              t({ type: 'RESET_USER' })
                          case 11:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  )
                })
              )
              return function (t, n) {
                return e.apply(this, arguments)
              }
            })()
          },
          resetUser: function () {
            return function (e) {
              I.b.info('Hope to see you soon!', {
                position: 'top-right',
                autoClose: 2e3,
                hideProgressBar: !1,
                closeOnClick: !0,
                pauseOnHover: !1,
                draggable: !0,
                progress: void 0,
              }),
                e({ type: 'RESET_USER' })
            }
          },
          validateToken: function () {
            return (function () {
              var e = Object(v.a)(
                g.a.mark(function e(t, n) {
                  var r, s
                  return g.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = localStorage.getItem('token')),
                              (e.prev = 1),
                              (e.next = 4),
                              k.get('/user/token')
                            )
                          case 4:
                            ;(s = e.sent).data.success &&
                              t({
                                type: 'LOGGED_IN',
                                payload: Object(l.a)(
                                  Object(l.a)({}, s.data),
                                  {},
                                  { token: r }
                                ),
                              }),
                              (e.next = 12)
                            break
                          case 8:
                            ;(e.prev = 8),
                              (e.t0 = e.catch(1)),
                              P.a.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Session timed out',
                                footer:
                                  '<a href="">Why do I have this issue?</a>',
                              }),
                              t({ type: 'RESET_USER' })
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  )
                })
              )
              return function (t, n) {
                return e.apply(this, arguments)
              }
            })()
          },
        },
        W = { resetUser: M.resetUser, validateToken: M.validateToken },
        V = Object(O.b)(function (e) {
          return { user: e.users.user }
        }, W)(function (e) {
          var t = Object(r.useState)(!1),
            n = Object(h.a)(t, 2),
            s = n[0],
            c = n[1]
          return (
            Object(r.useEffect)(function () {
              var t = localStorage.getItem('token')
              return (
                console.log(t),
                t && e.validateToken(),
                function () {
                  return c(!1)
                }
              )
            }, []),
            Object(u.jsx)('div', {
              className: 'dropdown d-none d-sm-block mx-5',
              children: e.user
                ? Object(u.jsxs)(u.Fragment, {
                    children: [
                      Object(u.jsx)('span', {
                        id: 'button',
                        'data-bs-toggle': 'dropdown',
                        'aria-expanded': 'false',
                        type: 'button',
                        children: Object(u.jsxs)('div', {
                          className: 'avatar d-none d-sm-flex',
                          children: [
                            Object(u.jsx)('span', {
                              className: 'px-2 fs-2 fw-bold text-light',
                              children: 'Hi ' + e.user.first_name + '!',
                            }),
                            Object(u.jsx)('div', {
                              className: 'avatarImg',
                              style: {
                                backgroundImage: 'url('.concat(e.user.img, ')'),
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '75px',
                                height: '75px',
                              },
                            }),
                          ],
                        }),
                      }),
                      Object(u.jsx)('ul', {
                        className: 'dropdown-menu dropdown-menu-end m-4',
                        'aria-labelledby': 'button',
                        children: Object(u.jsx)('li', {
                          children: Object(u.jsx)(i.b, {
                            to: '/',
                            onClick: function () {
                              return e.resetUser()
                            },
                            children: Object(u.jsx)('span', {
                              className: 'dropdown-item',
                              children: 'Log out',
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                : Object(u.jsxs)(u.Fragment, {
                    children: [
                      Object(u.jsx)('span', {
                        id: 'button',
                        'data-bs-toggle': 'dropdown',
                        'aria-expanded': 'false',
                        type: 'button',
                        onClick: function () {
                          return c(!s)
                        },
                        children: Object(u.jsxs)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '50',
                          height: '50',
                          fill: 'currentColor',
                          className: 'bi bi-person-circle '.concat(
                            s && 'clicked'
                          ),
                          viewBox: '0 0 16 16',
                          children: [
                            Object(u.jsx)('path', {
                              d: 'M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
                            }),
                            Object(u.jsx)('path', {
                              fillRule: 'evenodd',
                              d: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z',
                            }),
                          ],
                        }),
                      }),
                      Object(u.jsxs)('ul', {
                        className: 'dropdown-menu dropdown-menu-end m-4',
                        'aria-labelledby': 'button',
                        children: [
                          Object(u.jsx)('li', {
                            children: Object(u.jsx)(i.b, {
                              to: '/signup',
                              onClick: function () {
                                return c(!s) && window.scrollTo(0, 0)
                              },
                              children: Object(u.jsx)('span', {
                                className: 'dropdown-item',
                                children: 'Sign up',
                              }),
                            }),
                          }),
                          Object(u.jsx)('li', {
                            children: Object(u.jsx)(i.b, {
                              to: '/login',
                              onClick: function () {
                                return c(!s) && window.scrollTo(0, 0)
                              },
                              children: Object(u.jsx)('span', {
                                className: 'dropdown-item',
                                children: 'Log in',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
            })
          )
        }),
        D = function (e) {
          var t = e.children
          return Object(u.jsxs)('header', {
            className:
              'w-100 position-absolute d-flex align-items-center justify-content-between',
            children: [
              Object(u.jsx)('nav', {
                className: 'navbar navbar-dark navbar-expand-sm',
                children: Object(u.jsxs)('div', {
                  className: 'container-fluid',
                  children: [
                    Object(u.jsx)('button', {
                      className: 'navbar-toggler',
                      type: 'button',
                      'data-bs-toggle': 'collapse',
                      'data-bs-target': '#content',
                      'aria-controls': 'content',
                      'aria-expanded': 'false',
                      'aria-label': 'Toggle navigation',
                      children: Object(u.jsx)('span', {
                        className: 'navbar-toggler-icon',
                      }),
                    }),
                    Object(u.jsx)('div', {
                      className: 'collapse navbar-collapse',
                      id: 'content',
                      children: Object(u.jsx)('ul', {
                        className:
                          'navbar-nav me-auto mt-2 text-center d-flex align-items-center',
                        children: t,
                      }),
                    }),
                  ],
                }),
              }),
              Object(u.jsx)(V, {}),
            ],
          })
        },
        Y = { resetUser: M.resetUser, validateToken: M.validateToken },
        J = Object(O.b)(function (e) {
          return { user: e.users.user }
        }, Y)(function (e) {
          return Object(u.jsxs)(u.Fragment, {
            children: [
              e.user &&
                Object(u.jsx)('li', {
                  className: 'nav-item mb-4',
                  children: Object(u.jsxs)('div', {
                    className: 'avatar d-flex d-sm-none',
                    children: [
                      Object(u.jsx)('span', {
                        className: 'px-2 fs-2 fw-bold',
                        children: 'Hi ' + e.user.first_name + '!',
                      }),
                      Object(u.jsx)('div', {
                        className: 'avatarImg',
                        style: {
                          backgroundImage: 'url('.concat(e.user.img, ')'),
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          width: '50px',
                          height: '50px',
                        },
                      }),
                    ],
                  }),
                }),
              Object(u.jsx)('li', {
                className: 'nav-item my-sm-1',
                children: Object(u.jsx)(i.c, {
                  exact: !0,
                  to: '/',
                  className: 'mx-sm-4',
                  children: Object(u.jsx)('span', { children: 'HOME' }),
                }),
              }),
              Object(u.jsx)('li', {
                className: 'nav-item my-sm-1',
                children: Object(u.jsx)(i.c, {
                  className: 'mx-sm-4',
                  exact: !0,
                  to: '/cities',
                  children: Object(u.jsx)('span', { children: 'CITIES' }),
                }),
              }),
              e.user
                ? Object(u.jsx)(u.Fragment, {
                    children: Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.b, {
                        className: 'd-sm-none',
                        to: '/',
                        onClick: function () {
                          return e.resetUser()
                        },
                        children: Object(u.jsx)('span', {
                          children: 'LOG OUT',
                        }),
                      }),
                    }),
                  })
                : Object(u.jsxs)(u.Fragment, {
                    children: [
                      Object(u.jsx)('li', {
                        className: 'nav-item',
                        children: Object(u.jsx)(i.c, {
                          className: 'd-sm-none',
                          to: '/signup',
                          children: Object(u.jsx)('span', {
                            children: 'SIGN UP',
                          }),
                        }),
                      }),
                      Object(u.jsx)('li', {
                        className: 'nav-item',
                        children: Object(u.jsx)(i.c, {
                          className: 'd-sm-none',
                          to: '/login',
                          children: Object(u.jsx)('span', {
                            children: 'LOG IN',
                          }),
                        }),
                      }),
                    ],
                  }),
            ],
          })
        }),
        q = function () {
          return Object(u.jsx)(D, { children: Object(u.jsx)(J, {}) })
        },
        K =
          (n(105),
          function () {
            return Object(u.jsxs)('span', {
              className: 'mx-4 d-none d-md-block redes',
              children: [
                Object(u.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  fill: 'currentColor',
                  className: 'bi mx-1 mx-md-2 bi-instagram',
                  viewBox: '0 0 16 16',
                  children: Object(u.jsx)('path', {
                    d: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z',
                  }),
                }),
                Object(u.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  fill: 'currentColor',
                  className: 'bi mx-1 mx-md-2 bi-facebook',
                  viewBox: '0 0 16 16',
                  children: Object(u.jsx)('path', {
                    d: 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z',
                  }),
                }),
                Object(u.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  fill: 'currentColor',
                  className: 'bi mx-1 mx-md-2 bi-twitter',
                  viewBox: '0 0 16 16',
                  children: Object(u.jsx)('path', {
                    d: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z',
                  }),
                }),
                Object(u.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  fill: 'currentColor',
                  className: 'bi mx-1 mx-md-2 bi-envelope',
                  viewBox: '0 0 16 16',
                  children: Object(u.jsx)('path', {
                    d: 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z',
                  }),
                }),
              ],
            })
          }),
        Q = function () {
          return Object(u.jsxs)('footer', {
            className: 'w-100 d-flex flex-column justify-content-between',
            children: [
              Object(u.jsxs)('div', {
                className:
                  'w-100 p-3 d-flex align-items-center justify-content-between',
                children: [
                  Object(u.jsx)(i.b, {
                    to: '/',
                    children: Object(u.jsxs)('h1', {
                      className: 'pop',
                      children: [
                        'my',
                        Object(u.jsx)('span', {
                          className: 'tinerary',
                          children: 'tinerary',
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsxs)('div', {
                    className: 'd-flex align-items-center',
                    children: [
                      Object(u.jsx)(i.c, {
                        className: 'mx-2 mx-sm-4',
                        exact: !0,
                        to: '/',
                        children: Object(u.jsx)('span', { children: 'HOME' }),
                      }),
                      Object(u.jsx)(i.c, {
                        className: 'mx-2 mx-sm-4',
                        to: '/cities',
                        onClick: function () {
                          return window.scrollTo(0, 0)
                        },
                        children: Object(u.jsx)('span', { children: 'CITIES' }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsxs)('div', {
                className:
                  'w-100 text-center d-flex justify-content-center align-items-center pb-2',
                children: [
                  Object(u.jsx)('span', {
                    className: 'redes fs-5',
                    children: '\xa9 MyTinerary Project 2021',
                  }),
                  Object(u.jsx)(K, {}),
                ],
              }),
            ],
          })
        },
        X = (n(106), n(16)),
        Z = function (e) {
          var t = e.user
          return Object(u.jsxs)('div', {
            className: 'avatar d-flex',
            children: [
              Object(u.jsx)('div', {
                className: 'avatarImg',
                style: { backgroundImage: 'url('.concat(t.avatar, ')') },
              }),
              Object(u.jsx)('span', {
                className: 'px-2 fs-2 fw-bold',
                children: t.name,
              }),
            ],
          })
        },
        $ = {
          getItineraries: function (e) {
            return (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              k.get('/itineraries/' + e.match.params.id)
                            )
                          case 3:
                            if ((r = t.sent).data.success) {
                              t.next = 6
                              break
                            }
                            throw new Error(r.data.response)
                          case 6:
                            return (
                              n({
                                type: 'GET_ITINERARIES',
                                payload: r.data.response,
                              }),
                              t.abrupt('return', { success: !0 })
                            )
                          case 10:
                            ;(t.prev = 10),
                              (t.t0 = t.catch(0)),
                              I.b.error(
                                "We're doing some maintenance, please try later!",
                                {
                                  position: 'top-right',
                                  autoClose: 2e3,
                                  hideProgressBar: !1,
                                  closeOnClick: !0,
                                  pauseOnHover: !1,
                                  draggable: !0,
                                  progress: void 0,
                                }
                              ),
                              console.error(t.t0.message)
                          case 14:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 10]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })()
          },
          sortItineraries: function (e) {
            return function (t) {
              t({ type: 'SORT_ITINERARIES', payload: e })
            }
          },
          resetState: function () {
            return function (e) {
              e({ type: 'RESET' })
            }
          },
        },
        ee = ['index', 'itinerary', 'children'],
        te = {
          getActivities: {
            getActivities: function (e) {
              return (function () {
                var t = Object(v.a)(
                  g.a.mark(function t(n, r) {
                    var s
                    return g.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                k.get('/activities/' + e)
                              )
                            case 3:
                              return (
                                (s = t.sent).data.success &&
                                  n({
                                    type: 'GET_ACTIVITIES',
                                    payload: s.data.response,
                                  }),
                                t.abrupt('return', s.data.success)
                              )
                            case 8:
                              ;(t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0),
                                I.b.error(
                                  "We're doing some maintenance, please try later!",
                                  {
                                    position: 'top-right',
                                    autoClose: 2e3,
                                    hideProgressBar: !1,
                                    closeOnClick: !0,
                                    pauseOnHover: !1,
                                    draggable: !0,
                                    progress: void 0,
                                  }
                                )
                            case 12:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    )
                  })
                )
                return function (e, n) {
                  return t.apply(this, arguments)
                }
              })()
            },
          }.getActivities,
          getItineraries: $.getItineraries,
        },
        ne = Object(O.b)(null, te)(function (e) {
          var t = e.index,
            n = e.itinerary,
            s = e.children,
            c = Object(X.a)(e, ee),
            a = Object(r.useState)(!0),
            i = Object(h.a)(a, 2),
            o = i[0],
            l = i[1],
            d = Object(r.useState)(!0),
            j = Object(h.a)(d, 2),
            b = j[0],
            m = j[1],
            p = Object(r.useRef)(!1),
            x = (function () {
              var e = Object(v.a)(
                g.a.mark(function e() {
                  return g.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((l(!o), p.current)) {
                            e.next = 4
                            break
                          }
                          return (e.next = 4), c.getActivities(n._id)
                        case 4:
                          m(!1), (p.current = !0)
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)('div', {
                className: 'collapse w-100 mt-3 p-0',
                id: 'collapse' + t,
                children: Object(u.jsx)('div', {
                  className: 'card card-body text-dark p-0 p-md-1',
                  children: b
                    ? Object(u.jsx)(S, {})
                    : s
                    ? Object(u.jsx)('div', {
                        className: 'row',
                        style: { minHeight: '50vh' },
                        children: s,
                      })
                    : Object(u.jsx)('h2', {
                        children:
                          "There's not activities for this itinerary yet! :(",
                      }),
                }),
              }),
              Object(u.jsx)('div', {
                className: 'w-100 d-flex justify-content-center',
                children: Object(u.jsx)('button', {
                  className: 'more',
                  type: 'button',
                  'data-bs-toggle': 'collapse',
                  'data-bs-target': '#collapse' + t,
                  'aria-expanded': 'false',
                  'aria-controls': 'collapseExample',
                  onClick: x,
                  children: o ? 'View more' : 'View less',
                }),
              }),
            ],
          })
        }),
        re = (n(107), ['itinerary', 'userId', 'index']),
        se = { like: M.like },
        ce = Object(O.b)(function (e) {
          return { user: e.users.user }
        }, se)(function (e) {
          var t = e.itinerary,
            n = e.userId,
            s = (e.index, Object(X.a)(e, re)),
            c = Object(r.useState)(!0),
            a = Object(h.a)(c, 2),
            i = a[0],
            o = a[1],
            l = Object(r.useState)(t.likes.likes),
            d = Object(h.a)(l, 2),
            j = d[0],
            b = d[1],
            m = Object(r.useState)(!1),
            p = Object(h.a)(m, 2),
            x = p[0],
            O = p[1]
          Object(r.useEffect)(
            function () {
              O(t.likes.users.includes(n))
            },
            [n]
          )
          var f = (function () {
            var e = Object(v.a)(
              g.a.mark(function e(n) {
                return g.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (i) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return', !1)
                      case 2:
                        if (s.user) {
                          e.next = 5
                          break
                        }
                        return (
                          I.b.error(
                            'You must be logged in to like the itineraries',
                            {
                              position: 'top-right',
                              autoClose: 3e3,
                              hideProgressBar: !1,
                              closeOnClick: !0,
                              pauseOnHover: !1,
                              draggable: !0,
                              progress: void 0,
                            }
                          ),
                          e.abrupt('return', !1)
                        )
                      case 5:
                        return o(!1), (e.next = 8), s.like(n, t._id)
                      case 8:
                        e.sent.success &&
                          (n ? (b(j + 1), O(n)) : (b(j - 1), O(n)), o(!0))
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
          return Object(u.jsx)('div', {
            children: x
              ? Object(u.jsxs)('a', {
                  className: 'like-button liked',
                  onClick: function () {
                    return i && f(!x)
                  },
                  children: [
                    Object(u.jsxs)('span', {
                      className: 'like-icon',
                      children: [
                        Object(u.jsx)('div', {
                          className: 'heart-animation-1',
                        }),
                        Object(u.jsx)('div', {
                          className: 'heart-animation-2',
                        }),
                      ],
                    }),
                    j,
                  ],
                })
              : Object(u.jsxs)('a', {
                  className: 'like-button',
                  onClick: function () {
                    return i && f(!x)
                  },
                  children: [
                    Object(u.jsxs)('span', {
                      className: 'like-icon',
                      children: [
                        Object(u.jsx)('div', {
                          className: 'heart-animation-1',
                        }),
                        Object(u.jsx)('div', {
                          className: 'heart-animation-2',
                        }),
                      ],
                    }),
                    j,
                  ],
                }),
          })
        }),
        ae = function (e) {
          var t = e.itinerary
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)('h4', { className: 'mt-4', children: t.title }),
              Object(u.jsx)('p', { children: t.description }),
              Object(u.jsx)('p', {
                children: t.hashtags.map(function (e, t) {
                  return Object(u.jsx)(
                    'span',
                    { className: 'hashtag', children: '#' + e + ' ' },
                    t
                  )
                }),
              }),
            ],
          })
        },
        ie = function (e) {
          var t = e.itinerary
          return Object(u.jsx)('div', {
            className: 'row',
            children: Object(u.jsxs)('div', {
              className: 'col-12 col-sm-5',
              children: [
                Object(u.jsx)('div', {
                  children: Object(u.jsx)('h3', {
                    className: 'price',
                    children: Object(b.a)(Array(5))
                      .map(function (e, n) {
                        return Object(u.jsx)(
                          'span',
                          {
                            className: ''.concat(
                              n >= t.price ? 'dollarOff' : ''
                            ),
                            children: Object(u.jsx)('img', {
                              src: '/assets/dollar.png',
                              style: { width: '25px' },
                              alt: 'dollar',
                            }),
                          },
                          ''.concat(n).concat(t._id)
                        )
                      })
                      .map(function (e) {
                        return e
                      }),
                  }),
                }),
                Object(u.jsx)('div', {
                  children: Object(u.jsxs)('span', {
                    className: 'duration',
                    children: ['\ud83d\udd54 ', t.duration + ' hs'],
                  }),
                }),
              ],
            }),
          })
        },
        oe = function (e) {
          var t = e.children
          return Object(u.jsx)('div', {
            className: 'py-4 container-md container-fluid',
            children: Object(u.jsx)('div', {
              className: 'itinerariesContainer bg-light row',
              children: t,
            }),
          })
        },
        le = ['id'],
        ue = Object(O.b)(function (e) {
          return { activities: e.activities.activities }
        })(function (e) {
          var t = e.id,
            n = Object(X.a)(e, le).activities.find(function (e) {
              return e.length > 0 && e[0].itinerary === t
            })
          return Object(u.jsx)('div', {
            className: 'col-12 col-md-6 order-first order-md-last',
            children:
              n &&
              Object(u.jsxs)(d, {
                id: 'iti' + n[0].itinerary,
                children: [
                  Object(u.jsx)(m, { number: 3, id: 'iti' + n[0].itinerary }),
                  Object(u.jsx)('div', {
                    className: 'carousel-inner flex-grow-1 actInner',
                    children: n.map(function (e, t) {
                      return Object(u.jsx)(
                        j,
                        {
                          index: t,
                          children: Object(u.jsx)(x, { image: e, act: !0 }),
                        },
                        e._id + t
                      )
                    }),
                  }),
                  Object(u.jsx)(
                    p,
                    { act: !0, id: 'iti' + n[0].itinerary, interval: 2e3 },
                    n[0]._id
                  ),
                ],
              }),
          })
        }),
        de = function (e) {
          var t = e.authorized,
            n = e.functions
          return Object(u.jsx)(u.Fragment, {
            children:
              t &&
              Object(u.jsxs)('span', {
                children: [
                  Object(u.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '26',
                    height: '26',
                    style: { cursor: 'pointer' },
                    fill: 'currentColor',
                    className: 'bi bi-pen-fill mx-2',
                    viewBox: '0 0 16 16',
                    onClick: n[0],
                    children: Object(u.jsx)('path', {
                      d: 'm13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z',
                    }),
                  }),
                  Object(u.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '26',
                    height: '26',
                    style: { cursor: 'pointer' },
                    fill: 'currentColor',
                    className: 'bi bi-trash-fill',
                    viewBox: '0 0 16 16',
                    onClick: function () {
                      return P.a
                        .fire({
                          title: 'Are you sure?',
                          showCancelButton: !0,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!',
                        })
                        .then(function (e) {
                          e.isConfirmed && n[1]()
                        })
                    },
                    children: Object(u.jsx)('path', {
                      d: 'M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z',
                    }),
                  }),
                ],
              }),
          })
        },
        je = ['comm', 'id', 'userId'],
        be = { comment: M.comment, getId: M.getId },
        me = Object(O.b)(null, be)(function (e) {
          var t = e.comm,
            n = e.id,
            s = e.userId,
            c = Object(X.a)(e, je),
            a = Object(r.useState)(t.comment),
            i = Object(h.a)(a, 2),
            o = i[0],
            l = i[1],
            d = Object(r.useState)(t.comment),
            j = Object(h.a)(d, 2),
            b = j[0],
            m = j[1],
            p = Object(r.useState)(!1),
            x = Object(h.a)(p, 2),
            O = x[0],
            f = x[1],
            g = Object(r.useRef)(),
            v = Object(r.useRef)()
          return Object(u.jsxs)('div', {
            ref: v,
            className: 'my-2',
            children: [
              t &&
                Object(u.jsxs)('div', {
                  className: 'avatar d-flex',
                  children: [
                    Object(u.jsx)('div', {
                      className: 'avatarImg',
                      style: {
                        backgroundImage: 'url('.concat(t.user.img, ')'),
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '45px',
                        width: '45px',
                      },
                    }),
                    Object(u.jsx)('span', {
                      className: 'px-2 fs-5 fw-bold',
                      children: t.user.first_name + ' ' + t.user.last_name,
                    }),
                  ],
                }),
              Object(u.jsxs)('div', {
                className: 'w-100 d-flex align-items-center',
                children: [
                  Object(u.jsx)('div', {
                    className: 'col-9 col-lg-10',
                    children: Object(u.jsx)('input', {
                      type: 'text',
                      className: ''.concat(
                        s === t.user._id ? 'inputUser' : 'inputComment',
                        ' text-start my-2 px-2'
                      ),
                      disabled: !0,
                      ref: g,
                      value: o,
                      onChange: function () {
                        return l(g.current.value)
                      },
                      onKeyPress: function (e) {
                        'Enter' === e.key &&
                          ((e.target.disabled = !0),
                          (e.target.className =
                            'inputUser text-start my-2 px-2'),
                          c.comment(n, 'update', b, o))
                      },
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'col-3 col-lg-2',
                    children: Object(u.jsx)(de, {
                      authorized: t.user._id === s,
                      functions: [
                        function (e) {
                          ;(g.current.disabled = O),
                            (g.current.className = O
                              ? 'inputUser text-start my-2 px-2'
                              : 'inputComment text-start my-2 px-2'),
                            !O && m(o),
                            O && c.comment(n, 'update', b, o),
                            f(!O)
                        },
                        function (e) {
                          ;(g.current.className = 'd-none'),
                            (v.current.className = 'd-none'),
                            c.comment(n, 'delete', o)
                        },
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        }),
        pe = n(53),
        he = ['itinerary', 'userId'],
        xe = { comment: M.comment },
        Oe = Object(O.b)(function (e) {
          return { user: e.users.user }
        }, xe)(function (e) {
          var t = e.itinerary,
            n = e.userId,
            s = Object(X.a)(e, he),
            c = t.comments,
            a = t._id,
            i = Object(r.useState)(''),
            o = Object(h.a)(i, 2),
            l = o[0],
            d = o[1],
            j = Object(r.useState)(c),
            m = Object(h.a)(j, 2),
            p = m[0],
            x = m[1],
            O = Object(r.useRef)(''),
            f = Object(r.useState)(!0),
            y = Object(h.a)(f, 2),
            w = y[0],
            N = y[1],
            C = (function () {
              var e = Object(v.a)(
                g.a.mark(function e(t, r) {
                  var c
                  return g.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!r || 'Enter' === t.key) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return', !1)
                        case 2:
                          if (
                            (!s.user &&
                              I.b.error('You must be logged in to comment', {
                                position: 'top-right',
                                autoClose: 3e3,
                                hideProgressBar: !1,
                                closeOnClick: !0,
                                pauseOnHover: !1,
                                draggable: !0,
                                progress: void 0,
                              }),
                            !l || !s.user)
                          ) {
                            e.next = 10
                            break
                          }
                          return (
                            (c = {
                              user: {
                                _id: n,
                                img: s.user.img,
                                first_name: s.user.first_name,
                                last_name: s.user.last_name,
                              },
                              comment: l,
                            }),
                            x([].concat(Object(b.a)(p), [c])),
                            (e.next = 8),
                            s.comment(a, 'post', l)
                          )
                        case 8:
                          O.current.scrollTo(0, O.current.scrollHeight), d('')
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (t, n) {
                return e.apply(this, arguments)
              }
            })()
          return Object(u.jsx)('div', {
            className: 'col-12 col-md-6',
            children: Object(u.jsxs)('div', {
              className: 'd-flex flex-column comments',
              style: { height: '50vh' },
              children: [
                Object(u.jsxs)('div', {
                  style: { height: '90%' },
                  className: 'navbar-nav-scroll',
                  ref: O,
                  children: [
                    Object(u.jsx)('h2', {
                      className: 'inputComment fs-3 mt-1',
                      children: 'Comments',
                    }),
                    p.map(function (e, t) {
                      return Object(u.jsx)(me, { comm: e, id: a, userId: n }, t)
                    }),
                  ],
                }),
                Object(u.jsxs)('div', {
                  className:
                    'commentInput d-flex w-100 flex-wrap mt-2 flex-grow-1',
                  children: [
                    Object(u.jsx)('div', {
                      className: ''.concat(w ? 'd-none' : 'd-block', ' mt-2'),
                      children: Object(u.jsx)(pe.a, {
                        onEmojiClick: function (e, t) {
                          d(l + t.emoji)
                        },
                        pickerStyle: { width: '100%' },
                        disableSearchBar: !0,
                        disableSkinTonePicker: !0,
                      }),
                    }),
                    Object(u.jsxs)('div', {
                      className: 'w-100 d-flex align-items-center',
                      style: { height: '6vh' },
                      children: [
                        Object(u.jsx)('div', {
                          className: 'col-9 col-lg-10',
                          children: Object(u.jsx)('input', {
                            type: 'text',
                            placeholder: 'Leave us a comment',
                            className: 'inputComment m-1',
                            value: l,
                            onKeyPress: function (e) {
                              return C(e, !0)
                            },
                            onChange: function (e) {
                              return d(e.target.value)
                            },
                          }),
                        }),
                        Object(u.jsx)('div', {
                          className: 'col-3 col-lg-2',
                          children: Object(u.jsxs)('span', {
                            children: [
                              Object(u.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '26',
                                height: '26',
                                fill: 'currentColor',
                                className: 'bi bi-cursor-fill mx-2',
                                style: { cursor: 'pointer' },
                                viewBox: '0 0 16 16',
                                onClick: function (e) {
                                  return C(e, !1)
                                },
                                children: Object(u.jsx)('path', {
                                  d: 'M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z',
                                }),
                              }),
                              Object(u.jsxs)('svg', {
                                onClick: function (e) {
                                  N(!w)
                                },
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '26',
                                height: '26',
                                fill: 'currentColor',
                                className: 'bi bi-emoji-smile',
                                style: { cursor: 'pointer' },
                                viewBox: '0 0 16 16',
                                children: [
                                  Object(u.jsx)('path', {
                                    d: 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z',
                                  }),
                                  Object(u.jsx)('path', {
                                    d: 'M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        }),
        fe = ['itinerary', 'index'],
        ge = { comment: M.comment, getId: M.getId },
        ve = Object(O.b)(function (e) {
          return { user: e.users.user, activities: e.activities.activities }
        }, ge)(function (e) {
          var t = e.itinerary,
            n = e.index,
            s = Object(X.a)(e, fe),
            c = Object(r.useState)(null),
            a = Object(h.a)(c, 2),
            i = a[0],
            o = a[1]
          Object(r.useEffect)(function () {
            s.user && d()
          }, [])
          var d = (function () {
              var e = Object(v.a)(
                g.a.mark(function e() {
                  return g.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.t0 = o), (e.next = 3), s.getId()
                        case 3:
                          ;(e.t1 = e.sent), (0, e.t0)(e.t1)
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            j = s.activities.find(function (e) {
              return e.length > 0 && e[0].itinerary === t._id
            })
          return Object(u.jsxs)(oe, {
            children: [
              Object(u.jsx)('div', {
                className: 'col-12 col-md-5',
                children: Object(u.jsx)('div', {
                  className: 'itineraryImg foto',
                  style: {
                    backgroundImage: 'url('.concat(t.img, ')'),
                    height: '40vh',
                    width: '100%',
                  },
                }),
              }),
              Object(u.jsx)('div', {
                className: 'col-12 col-md-7 mt-4 mt-md-0',
                children: Object(u.jsxs)('div', {
                  className: 'row',
                  children: [
                    Object(u.jsxs)('div', {
                      className:
                        'd-flex align-items-center justify-content-between col-12',
                      children: [
                        Object(u.jsx)(Z, { user: t.user }),
                        Object(u.jsx)(
                          ce,
                          Object(l.a)({ itinerary: t, userId: i }, s)
                        ),
                      ],
                    }),
                    Object(u.jsx)(ae, { itinerary: t }),
                    Object(u.jsx)(ie, { itinerary: t }),
                  ],
                }),
              }),
              Object(u.jsx)(
                ne,
                Object(l.a)(
                  Object(l.a)({ index: n, itinerary: t }, s),
                  {},
                  {
                    children:
                      j &&
                      Object(u.jsxs)(u.Fragment, {
                        children: [
                          Object(u.jsx)(
                            Oe,
                            Object(l.a)({ itinerary: t, userId: i }, s)
                          ),
                          Object(u.jsx)(ue, { id: t._id }),
                        ],
                      }),
                  }
                )
              ),
            ],
          })
        }),
        ye = {
          getItineraries: $.getItineraries,
          resetState: $.resetState,
          getCities: H.getCities,
          getCity: H.getCity,
          resetCity: H.resetCity,
        },
        we = Object(O.b)(function (e) {
          return {
            itineraries: e.itineraries.itineraries,
            cities: e.cities.cities,
            city: e.cities.city,
          }
        }, ye)(function (e) {
          document.title = 'myTinerary - Itineraries'
          var t = e.cities.find(function (t) {
            return t._id === e.match.params.id
          })
          return (
            Object(r.useEffect)(function () {
              return (
                e.getItineraries(e),
                0 === e.cities.length && e.getCity(e),
                function () {
                  e.resetState(), e.resetCity()
                }
              )
            }, []),
            (t || e.city) && e.itineraries
              ? Object(u.jsxs)('div', {
                  className: 'contenedorCities min-vh-100',
                  children: [
                    Object(u.jsxs)('div', {
                      className: 'cities',
                      children: [
                        Object(u.jsx)(L, {
                          img: t ? t.img[4] : e.city.img[4],
                          text: 'WELCOME TO '.concat(t ? t.city : e.city.city),
                          light: !0,
                        }),
                        0 === e.itineraries.length
                          ? Object(u.jsx)('h1', {
                              className: 'text-dark',
                              children: 'Nothing to show yet',
                            })
                          : e.itineraries.map(function (t, n) {
                              return Object(r.createElement)(
                                ve,
                                Object(l.a)(
                                  Object(l.a)({ itinerary: t }, e),
                                  {},
                                  { index: n, key: n }
                                )
                              )
                            }),
                        Object(u.jsx)('button', {
                          type: 'button',
                          className: 'px-4 mt-5 gap-3 go',
                          children: Object(u.jsx)(i.b, {
                            to: '/cities',
                            onClick: function () {
                              return window.scrollTo(0, 0)
                            },
                            children: Object(u.jsx)('span', {
                              className: 'text-dark fs-4',
                              children: 'Back to Cities',
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)(I.a, {
                      position: 'top-right',
                      autoClose: 5e3,
                      hideProgressBar: !1,
                      newestOnTop: !1,
                      closeOnClick: !0,
                      rtl: !1,
                      pauseOnFocusLoss: !0,
                      draggable: !0,
                      pauseOnHover: !0,
                    }),
                  ],
                })
              : Object(u.jsx)('div', {
                  className: 'cities bg-dark text-light fs-1',
                  children: Object(u.jsx)(S, {}),
                })
          )
        }),
        Ne = function (e) {
          return (
            (document.title = 'myTinerary - Error 404'),
            Object(u.jsx)('div', {
              className: 'contenedorCities min-vh-100',
              children: Object(u.jsxs)('div', {
                className: 'cities',
                children: [
                  Object(u.jsx)(I.a, {
                    position: 'top-right',
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                  }),
                  Object(u.jsx)('h1', {
                    style: {
                      color: '#885e44',
                      fontSize: '5rem',
                      marginTop: '10%',
                    },
                    children: 'ERROR 404',
                  }),
                  Object(u.jsx)('span', {
                    style: { color: '#885e44' },
                    className: 'fs-4',
                    children:
                      'Sorry, the page you are looking for was not found.',
                  }),
                  Object(u.jsx)('button', {
                    type: 'button',
                    className: 'px-4 gap-3 mt-5 error googleButton',
                    onClick: function () {
                      return window.scrollTo(0, 0)
                    },
                    children: Object(u.jsx)(i.b, {
                      to: '/',
                      children: Object(u.jsx)('span', {
                        className: 'text-dark fs-4',
                        children: 'Go Home',
                      }),
                    }),
                  }),
                ],
              }),
            })
          )
        },
        Ce = n(22),
        ke = (n(51), n(29)),
        Ie = n.n(ke),
        Se = { getCountries: M.getCountries, signUp: M.signUp },
        Ee = Object(O.b)(function (e) {
          return { countries: e.users.countries, user: e.users.user }
        }, Se)(function (e) {
          var t = Object(r.useState)([]),
            n = Object(h.a)(t, 2),
            s = n[0],
            c = n[1],
            a = Object(r.useState)({
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              img: '',
              country: '',
            }),
            o = Object(h.a)(a, 2),
            d = o[0],
            j = o[1]
          Object(r.useEffect)(function () {
            e.getCountries()
          }, [])
          var b = (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.signUp(d)
                        case 2:
                          ;(r = t.sent) &&
                            c(
                              r.map(function (e) {
                                return e.field
                              })
                            )
                        case 4:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })(),
            m = (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!n.error) {
                            t.next = 2
                            break
                          }
                          return t.abrupt('return', !1)
                        case 2:
                          return (
                            (r = {
                              first_name: n.profileObj.givenName,
                              last_name: n.profileObj.familyName,
                              email: n.profileObj.email,
                              password: n.profileObj.googleId,
                              img: n.profileObj.imageUrl,
                              country: 'Argentina',
                              google: !0,
                            }),
                            (t.next = 5),
                            e.signUp(r)
                          )
                        case 5:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })(),
            p = function (e) {
              j(
                Object(l.a)(
                  Object(l.a)({}, d),
                  {},
                  Object(Ce.a)({}, e.target.name, e.target.value)
                )
              )
            }
          return e.user
            ? Object(u.jsx)('div', {
                className: 'cities bg-dark text-light fs-1',
                children: Object(u.jsx)(S, {}),
              })
            : Object(u.jsxs)('div', {
                className: 'contenedorCities min-vh-100',
                children: [
                  Object(u.jsx)('div', {
                    className: 'container cities',
                    children: Object(u.jsxs)('div', {
                      className: 'formCont p-3 ',
                      children: [
                        Object(u.jsx)('h1', {
                          className: 'form',
                          children: 'Create an account',
                        }),
                        Object(u.jsx)('h3', {
                          className: 'fs-2 mb-4 form',
                          children: 'Please, complete the fields to sign up',
                        }),
                        Object(u.jsx)('input', {
                          className: ''.concat(
                            s.includes('first_name') && 'blurred',
                            ' inputSignUp mb-2'
                          ),
                          type: 'text',
                          name: 'first_name',
                          placeholder: 'First Name',
                          autoComplete: 'false',
                          value: d.first_name,
                          onChange: p,
                        }),
                        Object(u.jsx)('input', {
                          className: ''.concat(
                            s.includes('last_name') && 'blurred',
                            ' inputSignUp mb-2'
                          ),
                          type: 'text',
                          name: 'last_name',
                          placeholder: 'Last Name',
                          autoComplete: 'false',
                          value: d.last_name,
                          onChange: p,
                        }),
                        Object(u.jsx)('input', {
                          className: ''.concat(
                            s.includes('email') && 'blurred',
                            ' inputSignUp mb-2'
                          ),
                          type: 'email',
                          name: 'email',
                          placeholder: 'Email',
                          autoComplete: 'false',
                          value: d.email,
                          onChange: p,
                        }),
                        Object(u.jsx)('input', {
                          className: ''.concat(
                            s.includes('password') && 'blurred',
                            ' inputSignUp mb-2'
                          ),
                          type: 'password',
                          name: 'password',
                          placeholder: 'Password (8 characters or more)',
                          autoComplete: 'false',
                          value: d.password,
                          onChange: p,
                        }),
                        Object(u.jsx)('input', {
                          className: ''.concat(
                            s.includes('img') && 'blurred',
                            ' inputSignUp mb-2'
                          ),
                          type: 'text',
                          name: 'img',
                          placeholder: 'Profile picture URL',
                          autoComplete: 'false',
                          value: d.img,
                          onChange: p,
                        }),
                        Object(u.jsxs)('select', {
                          className: ''.concat(
                            s.includes('country') && 'blurred',
                            ' inputSignUp'
                          ),
                          name: 'country',
                          id: 'countrySelect',
                          value: d.country,
                          onChange: p,
                          children: [
                            Object(u.jsx)('option', {
                              value: 'choose',
                              defaultChecked: !0,
                              children: 'Choose your country',
                            }),
                            e.countries.map(function (e, t) {
                              return Object(u.jsx)(
                                'option',
                                {
                                  className: 'text-center',
                                  value: e.name,
                                  children: e.name,
                                },
                                t
                              )
                            }),
                          ],
                        }),
                        Object(u.jsx)('button', {
                          type: 'button',
                          className: 'googleButton error',
                          onClick: b,
                          children: Object(u.jsx)('span', {
                            children: 'Sign up',
                          }),
                        }),
                        Object(u.jsx)('p', {
                          className: 'my-2 fw-bold',
                          children: 'or',
                        }),
                        Object(u.jsx)(Ie.a, {
                          clientId:
                            '82723603056-lk77oj61k8vpqgsasbd74ndpf6b136re.apps.googleusercontent.com',
                          buttonText: Object(u.jsxs)(u.Fragment, {
                            children: [
                              Object(u.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '32',
                                height: '32',
                                fill: 'currentColor',
                                className: 'bi bi-google m-2 pb-1',
                                viewBox: '0 0 16 16',
                                children: Object(u.jsx)('path', {
                                  d: 'M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z',
                                }),
                              }),
                              'Sign up with Google',
                            ],
                          }),
                          onSuccess: m,
                          onFailure: m,
                          cookiePolicy: 'single_host_origin',
                          className: 'googleButton error',
                        }),
                        Object(u.jsxs)('h4', {
                          className: 'mt-4 fw-bold fs-5',
                          children: [
                            'Already have an account?',
                            Object(u.jsx)(i.b, {
                              to: '/login',
                              children: Object(u.jsx)('span', {
                                children: ' Log in here!',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)(I.a, {
                    position: 'top-right',
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                  }),
                ],
              })
        }),
        Te = { logIn: M.logIn },
        _e = Object(O.b)(null, Te)(function (e) {
          var t = Object(r.useState)({ email: '', password: '', google: !1 }),
            n = Object(h.a)(t, 2),
            s = n[0],
            c = n[1],
            a = (function () {
              var t = Object(v.a)(
                g.a.mark(function t(n) {
                  var r
                  return g.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!n.error) {
                            t.next = 2
                            break
                          }
                          return t.abrupt('return', !1)
                        case 2:
                          return (
                            (r = {
                              email: n.profileObj.email,
                              password: n.profileObj.googleId,
                              google: !0,
                            }),
                            (t.next = 5),
                            e.logIn(r)
                          )
                        case 5:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })(),
            o = function (e) {
              c(
                Object(l.a)(
                  Object(l.a)({}, s),
                  {},
                  Object(Ce.a)({}, e.target.name, e.target.value)
                )
              )
            }
          return e.user
            ? Object(u.jsx)('div', {
                className: 'cities bg-dark text-light fs-1',
                children: Object(u.jsx)(S, {}),
              })
            : Object(u.jsxs)('div', {
                className: 'contenedorCities min-vh-100',
                children: [
                  Object(u.jsx)('div', {
                    className: 'container cities',
                    children: Object(u.jsxs)('div', {
                      className: 'formCont p-3 ',
                      children: [
                        Object(u.jsx)('h1', {
                          className: 'form',
                          children: 'Welcome to MyTinerary',
                        }),
                        Object(u.jsx)('h3', {
                          className: 'form fs-3 mb-5',
                          children:
                            "Please, complete the fields to log in and see all we've got for you",
                        }),
                        Object(u.jsx)('input', {
                          onChange: o,
                          className: 'inputSignUp mb-2',
                          type: 'text',
                          name: 'email',
                          placeholder: 'Email',
                        }),
                        Object(u.jsx)('input', {
                          onChange: o,
                          className: 'inputSignUp mb-2',
                          type: 'password',
                          name: 'password',
                          placeholder: 'Password',
                        }),
                        Object(u.jsx)('button', {
                          type: 'button',
                          className: 'googleButton error mt-5',
                          onClick: function () {
                            return e.logIn(s)
                          },
                          children: Object(u.jsx)('span', {
                            className: 'but',
                            children: 'Log in',
                          }),
                        }),
                        Object(u.jsx)('p', {
                          className: 'my-2 fw-bold',
                          children: 'or',
                        }),
                        Object(u.jsx)(Ie.a, {
                          clientId:
                            '82723603056-lk77oj61k8vpqgsasbd74ndpf6b136re.apps.googleusercontent.com',
                          buttonText: Object(u.jsxs)(u.Fragment, {
                            children: [
                              Object(u.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '32',
                                height: '32',
                                fill: 'currentColor',
                                className: 'bi bi-google m-2 pb-1',
                                viewBox: '0 0 16 16',
                                children: Object(u.jsx)('path', {
                                  d: 'M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z',
                                }),
                              }),
                              'Log in with Google',
                            ],
                          }),
                          onSuccess: a,
                          onFailure: a,
                          cookiePolicy: 'single_host_origin',
                          className: 'googleButton error',
                        }),
                        Object(u.jsxs)('h4', {
                          className: 'mt-4 fw-bold fs-5',
                          children: [
                            'Not registered yet?',
                            Object(u.jsx)(i.b, {
                              to: '/signup',
                              children: Object(u.jsx)('span', {
                                children: ' Sign up here!',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)(I.a, {
                    position: 'top-right',
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                  }),
                ],
              })
        }),
        Re = Object(O.b)(function (e) {
          return { user: e.users.user }
        })(function (e) {
          return Object(u.jsxs)(i.a, {
            children: [
              Object(u.jsxs)('div', {
                className: 'd-flex flex-column min-vh-100 papu',
                children: [
                  Object(u.jsx)(q, {}),
                  Object(u.jsxs)(o.d, {
                    children: [
                      Object(u.jsx)(o.b, {
                        exact: !0,
                        path: '/',
                        component: G,
                      }),
                      Object(u.jsx)(o.b, {
                        exact: !0,
                        path: '/cities',
                        component: z,
                      }),
                      Object(u.jsx)(o.b, {
                        path: '/cities/:id',
                        component: we,
                      }),
                      Object(u.jsx)(o.b, { path: '/error', component: Ne }),
                      Object(u.jsx)(o.b, {
                        path: '/signup',
                        component: e.user ? G : Ee,
                      }),
                      Object(u.jsx)(o.b, {
                        path: '/login',
                        component: e.user ? G : _e,
                      }),
                      Object(u.jsx)(o.a, { to: '/error' }),
                    ],
                  }),
                ],
              }),
              Object(u.jsx)(Q, {}),
            ],
          })
        }),
        Be = n(25),
        Ge = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { slides: [] },
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'GET_SLIDES':
              return Object(l.a)(Object(l.a)({}, e), {}, { slides: t.payload })
            default:
              return e
          }
        },
        Le = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { cities: [], filteredCities: [], city: null },
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'GET_CITIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { cities: t.payload, filteredCities: t.payload }
              )
            case 'GET_CITY':
              return Object(l.a)(Object(l.a)({}, e), {}, { city: t.payload })
            case 'FILTER_CITIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  filteredCities: e.cities.filter(function (e) {
                    return e.city.toLowerCase().startsWith(t.payload)
                  }),
                }
              )
            case 'RESET_CITY':
              return Object(l.a)(Object(l.a)({}, e), {}, { city: null })
            case 'RESET_FILTERED_CITIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { filteredCities: e.cities }
              )
            default:
              return e
          }
        },
        He = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { itineraries: null },
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'GET_ITINERARIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { itineraries: t.payload }
              )
            case 'SORT_ITINERARIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  itineraries: e.itineraries.sort(function (e, n) {
                    return t.payload ? e.likes - n.likes : n.likes - e.likes
                  }),
                }
              )
            case 'RESET':
              return Object(l.a)(Object(l.a)({}, e), {}, { itineraries: null })
            default:
              return e
          }
        },
        Ae = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { countries: [], user: null, token: null },
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'GET_COUNTRIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  countries: t.payload
                    .map(function (e) {
                      return {
                        name: e.name.includes('(')
                          ? e.name.slice(0, e.name.indexOf(' (')) +
                            e.name.slice(e.name.indexOf(')') + 1)
                          : e.name,
                      }
                    })
                    .filter(function (e) {
                      return e.name.length < 25
                    }),
                }
              )
            case 'LOGGED_IN':
              return (
                !e.token &&
                  localStorage.setItem(
                    'token',
                    JSON.stringify(t.payload.token)
                  ),
                Object(l.a)(Object(l.a)({}, e), {}, { user: t.payload.user })
              )
            case 'RESET_USER':
              return (
                localStorage.removeItem('token'),
                Object(l.a)(Object(l.a)({}, e), {}, { user: null })
              )
            default:
              return e
          }
        },
        Ue = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { activities: [] },
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'GET_ACTIVITIES':
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  activities: [].concat(Object(b.a)(e.activities), [t.payload]),
                }
              )
            default:
              return e
          }
        },
        ze = Object(Be.b)({
          carousel: Ge,
          cities: Le,
          itineraries: He,
          users: Ae,
          activities: Ue,
        }),
        Fe = n(54),
        Pe = Object(Be.c)(ze, Object(Be.a)(Fe.a))
      a.a.render(
        Object(u.jsx)(s.a.StrictMode, {
          children: Object(u.jsx)(O.a, {
            store: Pe,
            children: Object(u.jsx)(Re, {}),
          }),
        }),
        document.getElementById('root')
      )
    },
    51: function (e, t, n) {},
    75: function (e, t, n) {},
    76: function (e, t, n) {},
  },
  [[108, 1, 2]],
])
//# sourceMappingURL=main.d33d7fc3.chunk.js.map
