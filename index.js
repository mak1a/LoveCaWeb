
var Runtime = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Runtime) {
  Runtime = Runtime || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Runtime != 'undefined' ? Runtime : {};

// See https://caniuse.com/mdn-javascript_builtins_object_assign

// See https://caniuse.com/mdn-javascript_builtins_bigint64array

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }

  Module.expectedDataFileDownloads++;
  (function() {
    // When running as a pthread, FS operations are proxied to the main thread, so we don't need to
    // fetch the .data bundle on the worker
    if (Module['ENVIRONMENT_IS_PTHREAD']) return;
    var loadPackage = function(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'index.data';
      var REMOTE_PACKAGE_BASE = 'index.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string') {
          require('fs').readFile(packageName, function(err, contents) {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };

      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "resources", true, true);
Module['FS_createPath']("/resources", "CardImage", true, true);
Module['FS_createPath']("/resources", "Config", true, true);
Module['FS_createPath']("/resources/Config", "cards", true, true);
Module['FS_createPath']("/resources/Config", "imports", true, true);
Module['FS_createPath']("/resources", "UI", true, true);
Module['FS_createPath']("/resources", "engine", true, true);
Module['FS_createPath']("/resources/engine", "font", true, true);
Module['FS_createPath']("/resources/engine/font", "fontawesome", true, true);
Module['FS_createPath']("/resources/engine/font", "materialdesignicons", true, true);
Module['FS_createPath']("/resources/engine/font", "min", true, true);
Module['FS_createPath']("/resources/engine/font", "mplus", true, true);
Module['FS_createPath']("/resources/engine/font", "noto-cjk", true, true);
Module['FS_createPath']("/resources/engine/font", "noto-emoji", true, true);
Module['FS_createPath']("/resources/engine", "shader", true, true);
Module['FS_createPath']("/resources/engine/shader", "essl", true, true);
Module['FS_createPath']("/resources/engine/shader", "wgsl", true, true);
Module['FS_createPath']("/resources/engine", "soundfont", true, true);
Module['FS_createPath']("/resources/engine", "texture", true, true);
Module['FS_createPath']("/resources/engine/texture", "box-shadow", true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
          // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true);
          Module['removeRunDependency']('fp ' + that.name);
          this.requests[this.name] = null;
        }
      };

      var files = metadata['files'];
      for (var i = 0; i < files.length; ++i) {
        new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio'] || 0).open('GET', files[i]['filename']);
      }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }          Module['removeRunDependency']('datafile_index.data');

      };
      Module['addRunDependency']('datafile_index.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/resources/CardImage/IKZL-PR-001-PR.webp", "start": 0, "end": 63636}, {"filename": "/resources/CardImage/LL-E-001-SD.webp", "start": 63636, "end": 90474}, {"filename": "/resources/CardImage/LL-E-002-PR.webp", "start": 90474, "end": 121598}, {"filename": "/resources/CardImage/LL-E-002-SD.webp", "start": 121598, "end": 150492}, {"filename": "/resources/CardImage/LL-E-003-SD.webp", "start": 150492, "end": 180986}, {"filename": "/resources/CardImage/LL-E-004-PR.webp", "start": 180986, "end": 212018}, {"filename": "/resources/CardImage/LL-E-004-SD.webp", "start": 212018, "end": 240550}, {"filename": "/resources/CardImage/LL-E-005-SD.webp", "start": 240550, "end": 269210}, {"filename": "/resources/CardImage/LL-PR-001-PR.webp", "start": 269210, "end": 317088}, {"filename": "/resources/CardImage/LL-PR-002-PR.webp", "start": 317088, "end": 372130}, {"filename": "/resources/CardImage/LL-PR-003-PR.webp", "start": 372130, "end": 423604}, {"filename": "/resources/CardImage/LL-PR-004-PR.webp", "start": 423604, "end": 472826}, {"filename": "/resources/CardImage/LL-PR-005-PR.webp", "start": 472826, "end": 522482}, {"filename": "/resources/CardImage/LL-PR-006-PR.webp", "start": 522482, "end": 564580}, {"filename": "/resources/CardImage/LL-PR-007-PR.webp", "start": 564580, "end": 618158}, {"filename": "/resources/CardImage/LL-PR-007-PRLLD.webp", "start": 618158, "end": 686162}, {"filename": "/resources/CardImage/LL-PR-008-PR.webp", "start": 686162, "end": 735608}, {"filename": "/resources/CardImage/LL-bp1-001-R2.webp", "start": 735608, "end": 807274}, {"filename": "/resources/CardImage/LL-bp1-E01-RE.webp", "start": 807274, "end": 878850}, {"filename": "/resources/CardImage/LL-bp2-001-R2.webp", "start": 878850, "end": 948916}, {"filename": "/resources/CardImage/LL-bp2-E01-RE.webp", "start": 948916, "end": 1011908}, {"filename": "/resources/CardImage/LL-bp3-001-R2.webp", "start": 1011908, "end": 1061852}, {"filename": "/resources/CardImage/LL-bp3-E01-RE.webp", "start": 1061852, "end": 1116308}, {"filename": "/resources/CardImage/LL-bp4-001-R2.webp", "start": 1116308, "end": 1176166}, {"filename": "/resources/CardImage/LL-bp4-E01-RE.webp", "start": 1176166, "end": 1240936}, {"filename": "/resources/CardImage/LL-bp5-001-L.webp", "start": 1240936, "end": 1269160}, {"filename": "/resources/CardImage/LL-bp5-002-L.webp", "start": 1269160, "end": 1308088}, {"filename": "/resources/CardImage/LL-bp6-001-R2.webp", "start": 1308088, "end": 1388994}, {"filename": "/resources/CardImage/LL-bp7-001-R2.webp", "start": 1388994, "end": 1460800}, {"filename": "/resources/CardImage/LL-bp7-E11-LLE.webp", "start": 1460800, "end": 1538648}, {"filename": "/resources/CardImage/LL-bp7-E22-LLE.webp", "start": 1538648, "end": 1602010}, {"filename": "/resources/CardImage/LL-bp7-E33-LLE.webp", "start": 1602010, "end": 1683008}, {"filename": "/resources/CardImage/LL-bp7-E44-LLE.webp", "start": 1683008, "end": 1755856}, {"filename": "/resources/CardImage/LL-bp7-E55-LLE.webp", "start": 1755856, "end": 1821824}, {"filename": "/resources/CardImage/PL!-PR-001-PR.webp", "start": 1821824, "end": 1889676}, {"filename": "/resources/CardImage/PL!-PR-002-PR.webp", "start": 1889676, "end": 1960030}, {"filename": "/resources/CardImage/PL!-PR-003-PR.webp", "start": 1960030, "end": 2030250}, {"filename": "/resources/CardImage/PL!-PR-004-PR.webp", "start": 2030250, "end": 2100814}, {"filename": "/resources/CardImage/PL!-PR-005-PR.webp", "start": 2100814, "end": 2170528}, {"filename": "/resources/CardImage/PL!-PR-006-PR.webp", "start": 2170528, "end": 2238444}, {"filename": "/resources/CardImage/PL!-PR-007-PR.webp", "start": 2238444, "end": 2309036}, {"filename": "/resources/CardImage/PL!-PR-008-PR.webp", "start": 2309036, "end": 2381184}, {"filename": "/resources/CardImage/PL!-PR-009-PR.webp", "start": 2381184, "end": 2451706}, {"filename": "/resources/CardImage/PL!-PR-010-PR2.webp", "start": 2451706, "end": 2498980}, {"filename": "/resources/CardImage/PL!-PR-011-PR2.webp", "start": 2498980, "end": 2538748}, {"filename": "/resources/CardImage/PL!-PR-012-PR.webp", "start": 2538748, "end": 2601100}, {"filename": "/resources/CardImage/PL!-PR-013-PR2.webp", "start": 2601100, "end": 2642374}, {"filename": "/resources/CardImage/PL!-PR-014-PR.webp", "start": 2642374, "end": 2702144}, {"filename": "/resources/CardImage/PL!-PR-015-PR.webp", "start": 2702144, "end": 2760350}, {"filename": "/resources/CardImage/PL!-PR-016-PR2.webp", "start": 2760350, "end": 2817052}, {"filename": "/resources/CardImage/PL!-PR-017-PR.webp", "start": 2817052, "end": 2857532}, {"filename": "/resources/CardImage/PL!-PR-018-PR.webp", "start": 2857532, "end": 2922164}, {"filename": "/resources/CardImage/PL!-PR-019-PR.webp", "start": 2922164, "end": 2974750}, {"filename": "/resources/CardImage/PL!-PR-019-PR2.webp", "start": 2974750, "end": 3025924}, {"filename": "/resources/CardImage/PL!-PR-020-PR.webp", "start": 3025924, "end": 3092064}, {"filename": "/resources/CardImage/PL!-PR-021-PR.webp", "start": 3092064, "end": 3156470}, {"filename": "/resources/CardImage/PL!-PR-022-PR.webp", "start": 3156470, "end": 3208880}, {"filename": "/resources/CardImage/PL!-bp1-000-LLE.webp", "start": 3208880, "end": 3254992}, {"filename": "/resources/CardImage/PL!-bp3-005-RM.webp", "start": 3254992, "end": 3319724}, {"filename": "/resources/CardImage/PL!-bp3-012-PR.webp", "start": 3319724, "end": 3374606}, {"filename": "/resources/CardImage/PL!-bp3-012-RM.webp", "start": 3374606, "end": 3444650}, {"filename": "/resources/CardImage/PL!-bp3-014-PR.webp", "start": 3444650, "end": 3508282}, {"filename": "/resources/CardImage/PL!-bp3-E01-RE.webp", "start": 3508282, "end": 3553560}, {"filename": "/resources/CardImage/PL!-bp3-L-019-L.webp", "start": 3553560, "end": 3590760}, {"filename": "/resources/CardImage/PL!-bp3-L-020-L.webp", "start": 3590760, "end": 3628290}, {"filename": "/resources/CardImage/PL!-bp3-L-021-L.webp", "start": 3628290, "end": 3663728}, {"filename": "/resources/CardImage/PL!-bp3-L-022-L.webp", "start": 3663728, "end": 3701064}, {"filename": "/resources/CardImage/PL!-bp3-L-023-L.webp", "start": 3701064, "end": 3740674}, {"filename": "/resources/CardImage/PL!-bp3-L-024-L.webp", "start": 3740674, "end": 3783646}, {"filename": "/resources/CardImage/PL!-bp3-L-025-L.webp", "start": 3783646, "end": 3828696}, {"filename": "/resources/CardImage/PL!-bp3-L-026-L.webp", "start": 3828696, "end": 3873938}, {"filename": "/resources/CardImage/PL!-bp3-L2.webp", "start": 3873938, "end": 3928308}, {"filename": "/resources/CardImage/PL!-bp3-LLE-100-LLE.webp", "start": 3928308, "end": 3983526}, {"filename": "/resources/CardImage/PL!-bp3-LLE-200-LLE.webp", "start": 3983526, "end": 4054496}, {"filename": "/resources/CardImage/PL!-bp3-N-010-N.webp", "start": 4054496, "end": 4103050}, {"filename": "/resources/CardImage/PL!-bp3-N-011-N.webp", "start": 4103050, "end": 4151948}, {"filename": "/resources/CardImage/PL!-bp3-N-012-N.webp", "start": 4151948, "end": 4198538}, {"filename": "/resources/CardImage/PL!-bp3-N-013-N.webp", "start": 4198538, "end": 4246334}, {"filename": "/resources/CardImage/PL!-bp3-N-014-N.webp", "start": 4246334, "end": 4296236}, {"filename": "/resources/CardImage/PL!-bp3-N-015-N.webp", "start": 4296236, "end": 4343066}, {"filename": "/resources/CardImage/PL!-bp3-N-016-N.webp", "start": 4343066, "end": 4388972}, {"filename": "/resources/CardImage/PL!-bp3-N-017-N.webp", "start": 4388972, "end": 4436590}, {"filename": "/resources/CardImage/PL!-bp3-N-018-N.webp", "start": 4436590, "end": 4486736}, {"filename": "/resources/CardImage/PL!-bp3-P-001-P.webp", "start": 4486736, "end": 4549266}, {"filename": "/resources/CardImage/PL!-bp3-P-002-P.webp", "start": 4549266, "end": 4614378}, {"filename": "/resources/CardImage/PL!-bp3-P-003-P.webp", "start": 4614378, "end": 4677448}, {"filename": "/resources/CardImage/PL!-bp3-P-004-P.webp", "start": 4677448, "end": 4757926}, {"filename": "/resources/CardImage/PL!-bp3-P-005-P.webp", "start": 4757926, "end": 4819440}, {"filename": "/resources/CardImage/PL!-bp3-P-006-P.webp", "start": 4819440, "end": 4881970}, {"filename": "/resources/CardImage/PL!-bp3-P-007-P.webp", "start": 4881970, "end": 4944798}, {"filename": "/resources/CardImage/PL!-bp3-P-008-P.webp", "start": 4944798, "end": 5023436}, {"filename": "/resources/CardImage/PL!-bp3-P-009-P.webp", "start": 5023436, "end": 5085398}, {"filename": "/resources/CardImage/PL!-bp3-P2-004-P2.webp", "start": 5085398, "end": 5144492}, {"filename": "/resources/CardImage/PL!-bp3-P2-008-P2.webp", "start": 5144492, "end": 5188126}, {"filename": "/resources/CardImage/PL!-bp3-P2-009-P2.webp", "start": 5188126, "end": 5236764}, {"filename": "/resources/CardImage/PL!-bp3-PE-030-PE.webp", "start": 5236764, "end": 5270316}, {"filename": "/resources/CardImage/PL!-bp3-PE-031-PE.webp", "start": 5270316, "end": 5302258}, {"filename": "/resources/CardImage/PL!-bp3-PE-032-PE.webp", "start": 5302258, "end": 5348980}, {"filename": "/resources/CardImage/PL!-bp3-PE2-030-PE2.webp", "start": 5348980, "end": 5388088}, {"filename": "/resources/CardImage/PL!-bp3-PE2-031-PE2.webp", "start": 5388088, "end": 5426510}, {"filename": "/resources/CardImage/PL!-bp3-PE2-032-PE2.webp", "start": 5426510, "end": 5473828}, {"filename": "/resources/CardImage/PL!-bp3-R-001-R.webp", "start": 5473828, "end": 5517830}, {"filename": "/resources/CardImage/PL!-bp3-R-002-R.webp", "start": 5517830, "end": 5563656}, {"filename": "/resources/CardImage/PL!-bp3-R-003-R.webp", "start": 5563656, "end": 5605362}, {"filename": "/resources/CardImage/PL!-bp3-R-005-R.webp", "start": 5605362, "end": 5649844}, {"filename": "/resources/CardImage/PL!-bp3-R-006-R.webp", "start": 5649844, "end": 5697618}, {"filename": "/resources/CardImage/PL!-bp3-R-007-R.webp", "start": 5697618, "end": 5739536}, {"filename": "/resources/CardImage/PL!-bp3-R2-004-R2.webp", "start": 5739536, "end": 5795866}, {"filename": "/resources/CardImage/PL!-bp3-R2-008-R2.webp", "start": 5795866, "end": 5842614}, {"filename": "/resources/CardImage/PL!-bp3-R2-009-R2.webp", "start": 5842614, "end": 5886688}, {"filename": "/resources/CardImage/PL!-bp3-SEC-004-SEC.webp", "start": 5886688, "end": 5975080}, {"filename": "/resources/CardImage/PL!-bp3-SEC-008-SEC.webp", "start": 5975080, "end": 6044904}, {"filename": "/resources/CardImage/PL!-bp3-SEC-009-SEC.webp", "start": 6044904, "end": 6119880}, {"filename": "/resources/CardImage/PL!-bp3-SECE-027-SECE.webp", "start": 6119880, "end": 6181484}, {"filename": "/resources/CardImage/PL!-bp3-SECE-028-SECE.webp", "start": 6181484, "end": 6228392}, {"filename": "/resources/CardImage/PL!-bp3-SECE-029-SECE.webp", "start": 6228392, "end": 6281652}, {"filename": "/resources/CardImage/PL!-bp3-SECL.webp", "start": 6281652, "end": 6365822}, {"filename": "/resources/CardImage/PL!-bp4-001-P.webp", "start": 6365822, "end": 6420678}, {"filename": "/resources/CardImage/PL!-bp4-001-R.webp", "start": 6420678, "end": 6468908}, {"filename": "/resources/CardImage/PL!-bp4-002-P.webp", "start": 6468908, "end": 6525342}, {"filename": "/resources/CardImage/PL!-bp4-002-P2.webp", "start": 6525342, "end": 6577354}, {"filename": "/resources/CardImage/PL!-bp4-002-R2.webp", "start": 6577354, "end": 6627502}, {"filename": "/resources/CardImage/PL!-bp4-002-SEC.webp", "start": 6627502, "end": 6687074}, {"filename": "/resources/CardImage/PL!-bp4-003-P.webp", "start": 6687074, "end": 6742160}, {"filename": "/resources/CardImage/PL!-bp4-003-R.webp", "start": 6742160, "end": 6788564}, {"filename": "/resources/CardImage/PL!-bp4-004-P.webp", "start": 6788564, "end": 6845010}, {"filename": "/resources/CardImage/PL!-bp4-004-R.webp", "start": 6845010, "end": 6889888}, {"filename": "/resources/CardImage/PL!-bp4-005-P.webp", "start": 6889888, "end": 6948164}, {"filename": "/resources/CardImage/PL!-bp4-005-P2.webp", "start": 6948164, "end": 7000144}, {"filename": "/resources/CardImage/PL!-bp4-005-R2.webp", "start": 7000144, "end": 7048872}, {"filename": "/resources/CardImage/PL!-bp4-005-SEC.webp", "start": 7048872, "end": 7111406}, {"filename": "/resources/CardImage/PL!-bp4-006-P.webp", "start": 7111406, "end": 7167018}, {"filename": "/resources/CardImage/PL!-bp4-006-R.webp", "start": 7167018, "end": 7213204}, {"filename": "/resources/CardImage/PL!-bp4-007-P.webp", "start": 7213204, "end": 7269672}, {"filename": "/resources/CardImage/PL!-bp4-007-R.webp", "start": 7269672, "end": 7316070}, {"filename": "/resources/CardImage/PL!-bp4-008-P.webp", "start": 7316070, "end": 7367412}, {"filename": "/resources/CardImage/PL!-bp4-008-R.webp", "start": 7367412, "end": 7421568}, {"filename": "/resources/CardImage/PL!-bp4-009-P.webp", "start": 7421568, "end": 7474214}, {"filename": "/resources/CardImage/PL!-bp4-009-R.webp", "start": 7474214, "end": 7519304}, {"filename": "/resources/CardImage/PL!-bp4-010-N.webp", "start": 7519304, "end": 7566882}, {"filename": "/resources/CardImage/PL!-bp4-011-N.webp", "start": 7566882, "end": 7616312}, {"filename": "/resources/CardImage/PL!-bp4-012-N.webp", "start": 7616312, "end": 7658810}, {"filename": "/resources/CardImage/PL!-bp4-013-N.webp", "start": 7658810, "end": 7708044}, {"filename": "/resources/CardImage/PL!-bp4-014-N.webp", "start": 7708044, "end": 7757184}, {"filename": "/resources/CardImage/PL!-bp4-015-N.webp", "start": 7757184, "end": 7800478}, {"filename": "/resources/CardImage/PL!-bp4-016-N.webp", "start": 7800478, "end": 7844352}, {"filename": "/resources/CardImage/PL!-bp4-017-N.webp", "start": 7844352, "end": 7888604}, {"filename": "/resources/CardImage/PL!-bp4-018-N.webp", "start": 7888604, "end": 7937950}, {"filename": "/resources/CardImage/PL!-bp4-019-L.webp", "start": 7937950, "end": 7980956}, {"filename": "/resources/CardImage/PL!-bp4-020-L.webp", "start": 7980956, "end": 8007514}, {"filename": "/resources/CardImage/PL!-bp4-021-L.webp", "start": 8007514, "end": 8052298}, {"filename": "/resources/CardImage/PL!-bp4-022-L.webp", "start": 8052298, "end": 8094152}, {"filename": "/resources/CardImage/PL!-bp4-022-SECL.webp", "start": 8094152, "end": 8166890}, {"filename": "/resources/CardImage/PL!-bp4-023-L.webp", "start": 8166890, "end": 8208910}, {"filename": "/resources/CardImage/PL!-bp4-024-L.webp", "start": 8208910, "end": 8245460}, {"filename": "/resources/CardImage/PL!-bp4-025-L.webp", "start": 8245460, "end": 8281420}, {"filename": "/resources/CardImage/PL!-bp4-026-L.webp", "start": 8281420, "end": 8316310}, {"filename": "/resources/CardImage/PL!-bp4-027-SECE.webp", "start": 8316310, "end": 8366022}, {"filename": "/resources/CardImage/PL!-bp4-028-SECE.webp", "start": 8366022, "end": 8414250}, {"filename": "/resources/CardImage/PL!-bp4-029-PE.webp", "start": 8414250, "end": 8451710}, {"filename": "/resources/CardImage/PL!-bp4-029-PE2.webp", "start": 8451710, "end": 8493022}, {"filename": "/resources/CardImage/PL!-bp4-030-PE.webp", "start": 8493022, "end": 8532700}, {"filename": "/resources/CardImage/PL!-bp4-030-PE2.webp", "start": 8532700, "end": 8576270}, {"filename": "/resources/CardImage/PL!-bp4-031-PE.webp", "start": 8576270, "end": 8618146}, {"filename": "/resources/CardImage/PL!-bp4-031-PE2.webp", "start": 8618146, "end": 8662026}, {"filename": "/resources/CardImage/PL!-bp4-100-LLE.webp", "start": 8662026, "end": 8730398}, {"filename": "/resources/CardImage/PL!-bp4-200-LLE.webp", "start": 8730398, "end": 8799142}, {"filename": "/resources/CardImage/PL!-bp4-E01-RE.webp", "start": 8799142, "end": 8862178}, {"filename": "/resources/CardImage/PL!-bp5-001-AR.webp", "start": 8862178, "end": 8924494}, {"filename": "/resources/CardImage/PL!-bp5-001-P.webp", "start": 8924494, "end": 8978952}, {"filename": "/resources/CardImage/PL!-bp5-001-R2.webp", "start": 8978952, "end": 9063802}, {"filename": "/resources/CardImage/PL!-bp5-001-SEC.webp", "start": 9063802, "end": 9122976}, {"filename": "/resources/CardImage/PL!-bp5-002-AR.webp", "start": 9122976, "end": 9184878}, {"filename": "/resources/CardImage/PL!-bp5-002-P.webp", "start": 9184878, "end": 9240444}, {"filename": "/resources/CardImage/PL!-bp5-002-R.webp", "start": 9240444, "end": 9329100}, {"filename": "/resources/CardImage/PL!-bp5-003-AR.webp", "start": 9329100, "end": 9392130}, {"filename": "/resources/CardImage/PL!-bp5-003-P.webp", "start": 9392130, "end": 9449886}, {"filename": "/resources/CardImage/PL!-bp5-003-R2.webp", "start": 9449886, "end": 9538672}, {"filename": "/resources/CardImage/PL!-bp5-003-SEC.webp", "start": 9538672, "end": 9600782}, {"filename": "/resources/CardImage/PL!-bp5-004-AR.webp", "start": 9600782, "end": 9664904}, {"filename": "/resources/CardImage/PL!-bp5-004-P.webp", "start": 9664904, "end": 9720722}, {"filename": "/resources/CardImage/PL!-bp5-004-R2.webp", "start": 9720722, "end": 9808884}, {"filename": "/resources/CardImage/PL!-bp5-004-SEC.webp", "start": 9808884, "end": 9866544}, {"filename": "/resources/CardImage/PL!-bp5-005-AR.webp", "start": 9866544, "end": 9923694}, {"filename": "/resources/CardImage/PL!-bp5-005-P.webp", "start": 9923694, "end": 9976676}, {"filename": "/resources/CardImage/PL!-bp5-005-R.webp", "start": 9976676, "end": 10062052}, {"filename": "/resources/CardImage/PL!-bp5-006-AR.webp", "start": 10062052, "end": 10117862}, {"filename": "/resources/CardImage/PL!-bp5-006-P.webp", "start": 10117862, "end": 10168610}, {"filename": "/resources/CardImage/PL!-bp5-006-R.webp", "start": 10168610, "end": 10253000}, {"filename": "/resources/CardImage/PL!-bp5-007-AR.webp", "start": 10253000, "end": 10316606}, {"filename": "/resources/CardImage/PL!-bp5-007-P.webp", "start": 10316606, "end": 10371694}, {"filename": "/resources/CardImage/PL!-bp5-007-R.webp", "start": 10371694, "end": 10457678}, {"filename": "/resources/CardImage/PL!-bp5-008-AR.webp", "start": 10457678, "end": 10514540}, {"filename": "/resources/CardImage/PL!-bp5-008-P.webp", "start": 10514540, "end": 10568644}, {"filename": "/resources/CardImage/PL!-bp5-008-R.webp", "start": 10568644, "end": 10653992}, {"filename": "/resources/CardImage/PL!-bp5-009-AR.webp", "start": 10653992, "end": 10713040}, {"filename": "/resources/CardImage/PL!-bp5-009-P.webp", "start": 10713040, "end": 10766422}, {"filename": "/resources/CardImage/PL!-bp5-009-R.webp", "start": 10766422, "end": 10850564}, {"filename": "/resources/CardImage/PL!-bp5-010-N.webp", "start": 10850564, "end": 10907520}, {"filename": "/resources/CardImage/PL!-bp5-011-N.webp", "start": 10907520, "end": 10958744}, {"filename": "/resources/CardImage/PL!-bp5-012-N.webp", "start": 10958744, "end": 11006566}, {"filename": "/resources/CardImage/PL!-bp5-013-N.webp", "start": 11006566, "end": 11057984}, {"filename": "/resources/CardImage/PL!-bp5-014-N.webp", "start": 11057984, "end": 11110774}, {"filename": "/resources/CardImage/PL!-bp5-015-N.webp", "start": 11110774, "end": 11160050}, {"filename": "/resources/CardImage/PL!-bp5-016-N.webp", "start": 11160050, "end": 11208414}, {"filename": "/resources/CardImage/PL!-bp5-017-N.webp", "start": 11208414, "end": 11259870}, {"filename": "/resources/CardImage/PL!-bp5-018-N.webp", "start": 11259870, "end": 11310474}, {"filename": "/resources/CardImage/PL!-bp5-019-L.webp", "start": 11310474, "end": 11351538}, {"filename": "/resources/CardImage/PL!-bp5-020-L.webp", "start": 11351538, "end": 11396046}, {"filename": "/resources/CardImage/PL!-bp5-021-L.webp", "start": 11396046, "end": 11442402}, {"filename": "/resources/CardImage/PL!-bp5-022-L.webp", "start": 11442402, "end": 11487840}, {"filename": "/resources/CardImage/PL!-bp5-023-L.webp", "start": 11487840, "end": 11527756}, {"filename": "/resources/CardImage/PL!-bp5-024-L.webp", "start": 11527756, "end": 11571822}, {"filename": "/resources/CardImage/PL!-bp5-111-P2.webp", "start": 11571822, "end": 11628080}, {"filename": "/resources/CardImage/PL!-bp5-111-R.webp", "start": 11628080, "end": 11677546}, {"filename": "/resources/CardImage/PL!-bp5-222-P2.webp", "start": 11677546, "end": 11730526}, {"filename": "/resources/CardImage/PL!-bp5-222-R.webp", "start": 11730526, "end": 11777884}, {"filename": "/resources/CardImage/PL!-bp5-333-P2.webp", "start": 11777884, "end": 11827920}, {"filename": "/resources/CardImage/PL!-bp5-333-R.webp", "start": 11827920, "end": 11871392}, {"filename": "/resources/CardImage/PL!-bp5-E00-SECE.webp", "start": 11871392, "end": 11953508}, {"filename": "/resources/CardImage/PL!-bp5-E01-PE.webp", "start": 11953508, "end": 12005594}, {"filename": "/resources/CardImage/PL!-bp5-E01-SECE.webp", "start": 12005594, "end": 12053340}, {"filename": "/resources/CardImage/PL!-bp5-E02-PE.webp", "start": 12053340, "end": 12104362}, {"filename": "/resources/CardImage/PL!-bp5-E03-PE.webp", "start": 12104362, "end": 12156004}, {"filename": "/resources/CardImage/PL!-bp5-E03-SECE.webp", "start": 12156004, "end": 12207066}, {"filename": "/resources/CardImage/PL!-bp5-E04-PE.webp", "start": 12207066, "end": 12259172}, {"filename": "/resources/CardImage/PL!-bp5-E04-SECE.webp", "start": 12259172, "end": 12305360}, {"filename": "/resources/CardImage/PL!-bp5-E05-PE.webp", "start": 12305360, "end": 12357650}, {"filename": "/resources/CardImage/PL!-bp5-E06-PE.webp", "start": 12357650, "end": 12407844}, {"filename": "/resources/CardImage/PL!-bp5-E07-PE.webp", "start": 12407844, "end": 12460056}, {"filename": "/resources/CardImage/PL!-bp5-E08-PE.webp", "start": 12460056, "end": 12509376}, {"filename": "/resources/CardImage/PL!-bp5-E09-PE.webp", "start": 12509376, "end": 12561812}, {"filename": "/resources/CardImage/PL!-bp5-LLE.webp", "start": 12561812, "end": 12632560}, {"filename": "/resources/CardImage/PL!-bp6-001-P.webp", "start": 12632560, "end": 12702834}, {"filename": "/resources/CardImage/PL!-bp6-001-P2.webp", "start": 12702834, "end": 12758972}, {"filename": "/resources/CardImage/PL!-bp6-001-R2.webp", "start": 12758972, "end": 12813050}, {"filename": "/resources/CardImage/PL!-bp6-001-SEC.webp", "start": 12813050, "end": 12899032}, {"filename": "/resources/CardImage/PL!-bp6-002-P.webp", "start": 12899032, "end": 12970032}, {"filename": "/resources/CardImage/PL!-bp6-002-R.webp", "start": 12970032, "end": 13025474}, {"filename": "/resources/CardImage/PL!-bp6-003-P.webp", "start": 13025474, "end": 13098316}, {"filename": "/resources/CardImage/PL!-bp6-003-P2.webp", "start": 13098316, "end": 13155816}, {"filename": "/resources/CardImage/PL!-bp6-003-R2.webp", "start": 13155816, "end": 13212892}, {"filename": "/resources/CardImage/PL!-bp6-003-SEC.webp", "start": 13212892, "end": 13286804}, {"filename": "/resources/CardImage/PL!-bp6-004-P.webp", "start": 13286804, "end": 13357012}, {"filename": "/resources/CardImage/PL!-bp6-004-R.webp", "start": 13357012, "end": 13411356}, {"filename": "/resources/CardImage/PL!-bp6-005-P.webp", "start": 13411356, "end": 13484432}, {"filename": "/resources/CardImage/PL!-bp6-005-R.webp", "start": 13484432, "end": 13535738}, {"filename": "/resources/CardImage/PL!-bp6-006-P.webp", "start": 13535738, "end": 13603154}, {"filename": "/resources/CardImage/PL!-bp6-006-P2.webp", "start": 13603154, "end": 13663240}, {"filename": "/resources/CardImage/PL!-bp6-006-R2.webp", "start": 13663240, "end": 13716518}, {"filename": "/resources/CardImage/PL!-bp6-006-SEC.webp", "start": 13716518, "end": 13773540}, {"filename": "/resources/CardImage/PL!-bp6-007-P.webp", "start": 13773540, "end": 13837410}, {"filename": "/resources/CardImage/PL!-bp6-007-P2.webp", "start": 13837410, "end": 13896052}, {"filename": "/resources/CardImage/PL!-bp6-007-R2.webp", "start": 13896052, "end": 13948874}, {"filename": "/resources/CardImage/PL!-bp6-007-SEC.webp", "start": 13948874, "end": 14037778}, {"filename": "/resources/CardImage/PL!-bp6-008-P.webp", "start": 14037778, "end": 14103298}, {"filename": "/resources/CardImage/PL!-bp6-008-R.webp", "start": 14103298, "end": 14147560}, {"filename": "/resources/CardImage/PL!-bp6-009-P.webp", "start": 14147560, "end": 14205926}, {"filename": "/resources/CardImage/PL!-bp6-009-R.webp", "start": 14205926, "end": 14254716}, {"filename": "/resources/CardImage/PL!-bp6-010-N.webp", "start": 14254716, "end": 14315232}, {"filename": "/resources/CardImage/PL!-bp6-011-N.webp", "start": 14315232, "end": 14370260}, {"filename": "/resources/CardImage/PL!-bp6-012-N.webp", "start": 14370260, "end": 14427704}, {"filename": "/resources/CardImage/PL!-bp6-013-N.webp", "start": 14427704, "end": 14486968}, {"filename": "/resources/CardImage/PL!-bp6-014-N.webp", "start": 14486968, "end": 14542354}, {"filename": "/resources/CardImage/PL!-bp6-015-N.webp", "start": 14542354, "end": 14596556}, {"filename": "/resources/CardImage/PL!-bp6-016-N.webp", "start": 14596556, "end": 14653096}, {"filename": "/resources/CardImage/PL!-bp6-017-N.webp", "start": 14653096, "end": 14703210}, {"filename": "/resources/CardImage/PL!-bp6-018-N.webp", "start": 14703210, "end": 14760048}, {"filename": "/resources/CardImage/PL!-bp6-019-L.webp", "start": 14760048, "end": 14808786}, {"filename": "/resources/CardImage/PL!-bp6-020-L.webp", "start": 14808786, "end": 14859622}, {"filename": "/resources/CardImage/PL!-bp6-021-L.webp", "start": 14859622, "end": 14902332}, {"filename": "/resources/CardImage/PL!-bp6-022-L.webp", "start": 14902332, "end": 14945986}, {"filename": "/resources/CardImage/PL!-bp6-023-L.webp", "start": 14945986, "end": 14987108}, {"filename": "/resources/CardImage/PL!-bp6-024-L.webp", "start": 14987108, "end": 15032490}, {"filename": "/resources/CardImage/PL!-bp6-E01-SECE.webp", "start": 15032490, "end": 15104208}, {"filename": "/resources/CardImage/PL!-bp6-E02-SECE.webp", "start": 15104208, "end": 15163386}, {"filename": "/resources/CardImage/PL!-bp6-E03-SECE.webp", "start": 15163386, "end": 15204114}, {"filename": "/resources/CardImage/PL!-bp6-E04-SECE.webp", "start": 15204114, "end": 15280902}, {"filename": "/resources/CardImage/PL!-bp6-E05-PE.webp", "start": 15280902, "end": 15330204}, {"filename": "/resources/CardImage/PL!-bp6-E05-PE2.webp", "start": 15330204, "end": 15385722}, {"filename": "/resources/CardImage/PL!-bp6-E06-PE.webp", "start": 15385722, "end": 15430070}, {"filename": "/resources/CardImage/PL!-bp6-E06-PE2.webp", "start": 15430070, "end": 15482734}, {"filename": "/resources/CardImage/PL!-bp6-E10-LLE.webp", "start": 15482734, "end": 15564918}, {"filename": "/resources/CardImage/PL!-bp6-E20-LLE.webp", "start": 15564918, "end": 15634396}, {"filename": "/resources/CardImage/PL!-pb1-001-P2.webp", "start": 15634396, "end": 15694428}, {"filename": "/resources/CardImage/PL!-pb1-001-R.webp", "start": 15694428, "end": 15738674}, {"filename": "/resources/CardImage/PL!-pb1-002-P2.webp", "start": 15738674, "end": 15800482}, {"filename": "/resources/CardImage/PL!-pb1-002-R.webp", "start": 15800482, "end": 15844232}, {"filename": "/resources/CardImage/PL!-pb1-003-P2.webp", "start": 15844232, "end": 15903102}, {"filename": "/resources/CardImage/PL!-pb1-003-R.webp", "start": 15903102, "end": 15948434}, {"filename": "/resources/CardImage/PL!-pb1-004-P2.webp", "start": 15948434, "end": 16009190}, {"filename": "/resources/CardImage/PL!-pb1-004-R.webp", "start": 16009190, "end": 16054428}, {"filename": "/resources/CardImage/PL!-pb1-005-P2.webp", "start": 16054428, "end": 16108286}, {"filename": "/resources/CardImage/PL!-pb1-005-R.webp", "start": 16108286, "end": 16143402}, {"filename": "/resources/CardImage/PL!-pb1-006-P2.webp", "start": 16143402, "end": 16201726}, {"filename": "/resources/CardImage/PL!-pb1-006-R.webp", "start": 16201726, "end": 16239498}, {"filename": "/resources/CardImage/PL!-pb1-007-P2.webp", "start": 16239498, "end": 16299554}, {"filename": "/resources/CardImage/PL!-pb1-007-R.webp", "start": 16299554, "end": 16343472}, {"filename": "/resources/CardImage/PL!-pb1-008-P2.webp", "start": 16343472, "end": 16399028}, {"filename": "/resources/CardImage/PL!-pb1-008-R.webp", "start": 16399028, "end": 16439408}, {"filename": "/resources/CardImage/PL!-pb1-009-P2.webp", "start": 16439408, "end": 16498208}, {"filename": "/resources/CardImage/PL!-pb1-009-R.webp", "start": 16498208, "end": 16539548}, {"filename": "/resources/CardImage/PL!-pb1-010-P2.webp", "start": 16539548, "end": 16596680}, {"filename": "/resources/CardImage/PL!-pb1-010-R.webp", "start": 16596680, "end": 16648680}, {"filename": "/resources/CardImage/PL!-pb1-011-P2.webp", "start": 16648680, "end": 16705084}, {"filename": "/resources/CardImage/PL!-pb1-011-R.webp", "start": 16705084, "end": 16756018}, {"filename": "/resources/CardImage/PL!-pb1-012-P2.webp", "start": 16756018, "end": 16811010}, {"filename": "/resources/CardImage/PL!-pb1-012-R.webp", "start": 16811010, "end": 16860734}, {"filename": "/resources/CardImage/PL!-pb1-013-P2.webp", "start": 16860734, "end": 16920794}, {"filename": "/resources/CardImage/PL!-pb1-013-R.webp", "start": 16920794, "end": 16972128}, {"filename": "/resources/CardImage/PL!-pb1-014-P2.webp", "start": 16972128, "end": 17027990}, {"filename": "/resources/CardImage/PL!-pb1-014-R.webp", "start": 17027990, "end": 17081194}, {"filename": "/resources/CardImage/PL!-pb1-015-P2.webp", "start": 17081194, "end": 17139748}, {"filename": "/resources/CardImage/PL!-pb1-015-R.webp", "start": 17139748, "end": 17193780}, {"filename": "/resources/CardImage/PL!-pb1-016-P2.webp", "start": 17193780, "end": 17249956}, {"filename": "/resources/CardImage/PL!-pb1-016-R.webp", "start": 17249956, "end": 17301828}, {"filename": "/resources/CardImage/PL!-pb1-017-P2.webp", "start": 17301828, "end": 17357902}, {"filename": "/resources/CardImage/PL!-pb1-017-R.webp", "start": 17357902, "end": 17408208}, {"filename": "/resources/CardImage/PL!-pb1-018-P2.webp", "start": 17408208, "end": 17464444}, {"filename": "/resources/CardImage/PL!-pb1-018-R.webp", "start": 17464444, "end": 17513842}, {"filename": "/resources/CardImage/PL!-pb1-019-N.webp", "start": 17513842, "end": 17571522}, {"filename": "/resources/CardImage/PL!-pb1-019-PR.webp", "start": 17571522, "end": 17618572}, {"filename": "/resources/CardImage/PL!-pb1-019-SD.webp", "start": 17618572, "end": 17652894}, {"filename": "/resources/CardImage/PL!-pb1-020-N.webp", "start": 17652894, "end": 17700488}, {"filename": "/resources/CardImage/PL!-pb1-020-SD.webp", "start": 17700488, "end": 17732816}, {"filename": "/resources/CardImage/PL!-pb1-021-N.webp", "start": 17732816, "end": 17785874}, {"filename": "/resources/CardImage/PL!-pb1-021-PR.webp", "start": 17785874, "end": 17834506}, {"filename": "/resources/CardImage/PL!-pb1-021-SD.webp", "start": 17834506, "end": 17861186}, {"filename": "/resources/CardImage/PL!-pb1-022-N.webp", "start": 17861186, "end": 17915844}, {"filename": "/resources/CardImage/PL!-pb1-022-PR.webp", "start": 17915844, "end": 17951398}, {"filename": "/resources/CardImage/PL!-pb1-022-SD.webp", "start": 17951398, "end": 17991488}, {"filename": "/resources/CardImage/PL!-pb1-023-N.webp", "start": 17991488, "end": 18049184}, {"filename": "/resources/CardImage/PL!-pb1-024-N.webp", "start": 18049184, "end": 18100422}, {"filename": "/resources/CardImage/PL!-pb1-025-N.webp", "start": 18100422, "end": 18153798}, {"filename": "/resources/CardImage/PL!-pb1-026-N.webp", "start": 18153798, "end": 18206074}, {"filename": "/resources/CardImage/PL!-pb1-027-N.webp", "start": 18206074, "end": 18254856}, {"filename": "/resources/CardImage/PL!-pb1-034-PE.webp", "start": 18254856, "end": 18299918}, {"filename": "/resources/CardImage/PL!-pb1-035-PE.webp", "start": 18299918, "end": 18339876}, {"filename": "/resources/CardImage/PL!-pb1-036-PE.webp", "start": 18339876, "end": 18380788}, {"filename": "/resources/CardImage/PL!-pb1-037-PE.webp", "start": 18380788, "end": 18421770}, {"filename": "/resources/CardImage/PL!-pb1-038-PE.webp", "start": 18421770, "end": 18464794}, {"filename": "/resources/CardImage/PL!-pb1-039-PE.webp", "start": 18464794, "end": 18508510}, {"filename": "/resources/CardImage/PL!-pb1-040-PE.webp", "start": 18508510, "end": 18550102}, {"filename": "/resources/CardImage/PL!-pb1-041-PE.webp", "start": 18550102, "end": 18588806}, {"filename": "/resources/CardImage/PL!-pb1-042-PE.webp", "start": 18588806, "end": 18629598}, {"filename": "/resources/CardImage/PL!-pb1-043-SRE.webp", "start": 18629598, "end": 18689308}, {"filename": "/resources/CardImage/PL!-pb1-044-SRE.webp", "start": 18689308, "end": 18732728}, {"filename": "/resources/CardImage/PL!-pb1-045-SRE.webp", "start": 18732728, "end": 18779188}, {"filename": "/resources/CardImage/PL!-pb1-046-SRE.webp", "start": 18779188, "end": 18819504}, {"filename": "/resources/CardImage/PL!-pb1-047-SRE.webp", "start": 18819504, "end": 18859622}, {"filename": "/resources/CardImage/PL!-pb1-048-SRE.webp", "start": 18859622, "end": 18894452}, {"filename": "/resources/CardImage/PL!-pb1-049-SRE.webp", "start": 18894452, "end": 18935706}, {"filename": "/resources/CardImage/PL!-pb1-050-SRE.webp", "start": 18935706, "end": 18973616}, {"filename": "/resources/CardImage/PL!-pb1-051-SRE.webp", "start": 18973616, "end": 19009384}, {"filename": "/resources/CardImage/PL!-pb1-052-SRE.webp", "start": 19009384, "end": 19050712}, {"filename": "/resources/CardImage/PL!-pb1-053-SRE.webp", "start": 19050712, "end": 19108066}, {"filename": "/resources/CardImage/PL!-pb1-054-SRE.webp", "start": 19108066, "end": 19153634}, {"filename": "/resources/CardImage/PL!-pb1-055-SRE.webp", "start": 19153634, "end": 19197038}, {"filename": "/resources/CardImage/PL!-pb1-056-SRE.webp", "start": 19197038, "end": 19241888}, {"filename": "/resources/CardImage/PL!-pb1-057-SRE.webp", "start": 19241888, "end": 19284218}, {"filename": "/resources/CardImage/PL!-pb1-058-SRE.webp", "start": 19284218, "end": 19331148}, {"filename": "/resources/CardImage/PL!-pb1-059-SRE.webp", "start": 19331148, "end": 19357788}, {"filename": "/resources/CardImage/PL!-pb1-060-SRE.webp", "start": 19357788, "end": 19388686}, {"filename": "/resources/CardImage/PL!-pb1-061-SRE.webp", "start": 19388686, "end": 19411828}, {"filename": "/resources/CardImage/PL!-pb1-100-LLE.webp", "start": 19411828, "end": 19458028}, {"filename": "/resources/CardImage/PL!-pb1-200-LLE.webp", "start": 19458028, "end": 19504254}, {"filename": "/resources/CardImage/PL!-pb1-300-LLE.webp", "start": 19504254, "end": 19548638}, {"filename": "/resources/CardImage/PL!-pb1-400-LLE.webp", "start": 19548638, "end": 19605868}, {"filename": "/resources/CardImage/PL!-pb1-500-LLE.webp", "start": 19605868, "end": 19672728}, {"filename": "/resources/CardImage/PL!-pb1-600-LLE.webp", "start": 19672728, "end": 19735996}, {"filename": "/resources/CardImage/PL!-pb1-L-028-L.webp", "start": 19735996, "end": 19785478}, {"filename": "/resources/CardImage/PL!-pb1-L-029-L.webp", "start": 19785478, "end": 19828144}, {"filename": "/resources/CardImage/PL!-pb1-L-030-L.webp", "start": 19828144, "end": 19877094}, {"filename": "/resources/CardImage/PL!-pb1-L-031-L.webp", "start": 19877094, "end": 19920026}, {"filename": "/resources/CardImage/PL!-pb1-L-032-L.webp", "start": 19920026, "end": 19958344}, {"filename": "/resources/CardImage/PL!-pb1-L-033-L.webp", "start": 19958344, "end": 19995592}, {"filename": "/resources/CardImage/PL!-pb1-PE2-034-PE2.webp", "start": 19995592, "end": 20051870}, {"filename": "/resources/CardImage/PL!-pb1-PE2-035-PE2.webp", "start": 20051870, "end": 20109556}, {"filename": "/resources/CardImage/PL!-pb1-PE2-036-PE2.webp", "start": 20109556, "end": 20168148}, {"filename": "/resources/CardImage/PL!-pb1-PE2-037-PE2.webp", "start": 20168148, "end": 20221970}, {"filename": "/resources/CardImage/PL!-pb1-PE2-038-PE2.webp", "start": 20221970, "end": 20278098}, {"filename": "/resources/CardImage/PL!-pb1-PE2-039-PE2.webp", "start": 20278098, "end": 20332138}, {"filename": "/resources/CardImage/PL!-pb1-PE2-040-PE2.webp", "start": 20332138, "end": 20385966}, {"filename": "/resources/CardImage/PL!-pb1-PE2-041-PE2.webp", "start": 20385966, "end": 20440284}, {"filename": "/resources/CardImage/PL!-pb1-PE2-042-PE2.webp", "start": 20440284, "end": 20495268}, {"filename": "/resources/CardImage/PL!-pb1-SECE.webp", "start": 20495268, "end": 20540036}, {"filename": "/resources/CardImage/PL!-sd1-001-SD.webp", "start": 20540036, "end": 20603538}, {"filename": "/resources/CardImage/PL!-sd1-002-SD.webp", "start": 20603538, "end": 20669998}, {"filename": "/resources/CardImage/PL!-sd1-003-SD.webp", "start": 20669998, "end": 20731848}, {"filename": "/resources/CardImage/PL!-sd1-004-SD.webp", "start": 20731848, "end": 20793420}, {"filename": "/resources/CardImage/PL!-sd1-005-SD.webp", "start": 20793420, "end": 20854876}, {"filename": "/resources/CardImage/PL!-sd1-006-SD.webp", "start": 20854876, "end": 20918082}, {"filename": "/resources/CardImage/PL!-sd1-007-SD.webp", "start": 20918082, "end": 20974332}, {"filename": "/resources/CardImage/PL!-sd1-008-SD.webp", "start": 20974332, "end": 21037544}, {"filename": "/resources/CardImage/PL!-sd1-009-SD.webp", "start": 21037544, "end": 21100590}, {"filename": "/resources/CardImage/PL!-sd1-010-SD.webp", "start": 21100590, "end": 21142382}, {"filename": "/resources/CardImage/PL!-sd1-011-PR.webp", "start": 21142382, "end": 21201890}, {"filename": "/resources/CardImage/PL!-sd1-011-SD.webp", "start": 21201890, "end": 21243778}, {"filename": "/resources/CardImage/PL!-sd1-012-SD.webp", "start": 21243778, "end": 21280524}, {"filename": "/resources/CardImage/PL!-sd1-013-SD.webp", "start": 21280524, "end": 21319414}, {"filename": "/resources/CardImage/PL!-sd1-014-SD.webp", "start": 21319414, "end": 21360676}, {"filename": "/resources/CardImage/PL!-sd1-015-SD.webp", "start": 21360676, "end": 21402120}, {"filename": "/resources/CardImage/PL!-sd1-016-PR.webp", "start": 21402120, "end": 21468774}, {"filename": "/resources/CardImage/PL!-sd1-016-SD.webp", "start": 21468774, "end": 21509694}, {"filename": "/resources/CardImage/PL!-sd1-017-SD.webp", "start": 21509694, "end": 21548622}, {"filename": "/resources/CardImage/PL!-sd1-018-SD.webp", "start": 21548622, "end": 21588226}, {"filename": "/resources/CardImage/PL!-sd1-023-P.webp", "start": 21588226, "end": 21638904}, {"filename": "/resources/CardImage/PL!-sd1-024-P.webp", "start": 21638904, "end": 21686918}, {"filename": "/resources/CardImage/PL!-sd1-025-P.webp", "start": 21686918, "end": 21736466}, {"filename": "/resources/CardImage/PL!-sd1-026-P.webp", "start": 21736466, "end": 21786694}, {"filename": "/resources/CardImage/PL!-sd1-027-P.webp", "start": 21786694, "end": 21833994}, {"filename": "/resources/CardImage/PL!-sd1-028-P.webp", "start": 21833994, "end": 21883090}, {"filename": "/resources/CardImage/PL!-sd1-029-P.webp", "start": 21883090, "end": 21929678}, {"filename": "/resources/CardImage/PL!-sd1-030-P.webp", "start": 21929678, "end": 21978072}, {"filename": "/resources/CardImage/PL!-sd1-031-P.webp", "start": 21978072, "end": 22026788}, {"filename": "/resources/CardImage/PL!HS-016-PR.webp", "start": 22026788, "end": 22074434}, {"filename": "/resources/CardImage/PL!HS-017-PR.webp", "start": 22074434, "end": 22122084}, {"filename": "/resources/CardImage/PL!HS-018-PR.webp", "start": 22122084, "end": 22168464}, {"filename": "/resources/CardImage/PL!HS-019-PR.webp", "start": 22168464, "end": 22212052}, {"filename": "/resources/CardImage/PL!HS-020-PR.webp", "start": 22212052, "end": 22257244}, {"filename": "/resources/CardImage/PL!HS-021-PR.webp", "start": 22257244, "end": 22306006}, {"filename": "/resources/CardImage/PL!HS-022-PR.webp", "start": 22306006, "end": 22352518}, {"filename": "/resources/CardImage/PL!HS-023-PR.webp", "start": 22352518, "end": 22396990}, {"filename": "/resources/CardImage/PL!HS-024-PR2.webp", "start": 22396990, "end": 22441058}, {"filename": "/resources/CardImage/PL!HS-PR-001-PR.webp", "start": 22441058, "end": 22493206}, {"filename": "/resources/CardImage/PL!HS-PR-002-PR.webp", "start": 22493206, "end": 22544488}, {"filename": "/resources/CardImage/PL!HS-PR-003-PR.webp", "start": 22544488, "end": 22589202}, {"filename": "/resources/CardImage/PL!HS-PR-004-PR.webp", "start": 22589202, "end": 22638874}, {"filename": "/resources/CardImage/PL!HS-PR-005-PR.webp", "start": 22638874, "end": 22691622}, {"filename": "/resources/CardImage/PL!HS-PR-006-PR.webp", "start": 22691622, "end": 22740888}, {"filename": "/resources/CardImage/PL!HS-PR-007-PR.webp", "start": 22740888, "end": 22786742}, {"filename": "/resources/CardImage/PL!HS-PR-008-PR.webp", "start": 22786742, "end": 22838274}, {"filename": "/resources/CardImage/PL!HS-PR-009-PR.webp", "start": 22838274, "end": 22885516}, {"filename": "/resources/CardImage/PL!HS-PR-010-PR.webp", "start": 22885516, "end": 22917084}, {"filename": "/resources/CardImage/PL!HS-PR-011-PR.webp", "start": 22917084, "end": 22951286}, {"filename": "/resources/CardImage/PL!HS-PR-012-PR.webp", "start": 22951286, "end": 22985588}, {"filename": "/resources/CardImage/PL!HS-PR-013-PR.webp", "start": 22985588, "end": 23028114}, {"filename": "/resources/CardImage/PL!HS-PR-014-PR.webp", "start": 23028114, "end": 23083214}, {"filename": "/resources/CardImage/PL!HS-PR-014-RM.webp", "start": 23083214, "end": 23137474}, {"filename": "/resources/CardImage/PL!HS-PR-015-PR.webp", "start": 23137474, "end": 23216394}, {"filename": "/resources/CardImage/PL!HS-PR-018-RM.webp", "start": 23216394, "end": 23274312}, {"filename": "/resources/CardImage/PL!HS-PR-019-RM.webp", "start": 23274312, "end": 23332270}, {"filename": "/resources/CardImage/PL!HS-PR-021-RM.webp", "start": 23332270, "end": 23395506}, {"filename": "/resources/CardImage/PL!HS-PR-025-PR2.webp", "start": 23395506, "end": 23437138}, {"filename": "/resources/CardImage/PL!HS-PR-026-PR.webp", "start": 23437138, "end": 23493620}, {"filename": "/resources/CardImage/PL!HS-PR-027-PR.webp", "start": 23493620, "end": 23550584}, {"filename": "/resources/CardImage/PL!HS-PR-028-PR.webp", "start": 23550584, "end": 23591552}, {"filename": "/resources/CardImage/PL!HS-PR-029-PR.webp", "start": 23591552, "end": 23659742}, {"filename": "/resources/CardImage/PL!HS-PR-030-PR.webp", "start": 23659742, "end": 23730408}, {"filename": "/resources/CardImage/PL!HS-PR-031-PR.webp", "start": 23730408, "end": 23785448}, {"filename": "/resources/CardImage/PL!HS-PR-032-PR.webp", "start": 23785448, "end": 23841394}, {"filename": "/resources/CardImage/PL!HS-PR-033-PR.webp", "start": 23841394, "end": 23903944}, {"filename": "/resources/CardImage/PL!HS-PR-034-PR.webp", "start": 23903944, "end": 23960454}, {"filename": "/resources/CardImage/PL!HS-PR-034-PR2.webp", "start": 23960454, "end": 24015090}, {"filename": "/resources/CardImage/PL!HS-PR-035-PR.webp", "start": 24015090, "end": 24059556}, {"filename": "/resources/CardImage/PL!HS-PR-036-PR.webp", "start": 24059556, "end": 24117882}, {"filename": "/resources/CardImage/PL!HS-PR-037-PR2.webp", "start": 24117882, "end": 24174832}, {"filename": "/resources/CardImage/PL!HS-bp1-000-LLE.webp", "start": 24174832, "end": 24221458}, {"filename": "/resources/CardImage/PL!HS-bp1-001-P.webp", "start": 24221458, "end": 24281404}, {"filename": "/resources/CardImage/PL!HS-bp1-001-R.webp", "start": 24281404, "end": 24337488}, {"filename": "/resources/CardImage/PL!HS-bp1-002-P.webp", "start": 24337488, "end": 24402940}, {"filename": "/resources/CardImage/PL!HS-bp1-002-R.webp", "start": 24402940, "end": 24459938}, {"filename": "/resources/CardImage/PL!HS-bp1-002-RM.webp", "start": 24459938, "end": 24513064}, {"filename": "/resources/CardImage/PL!HS-bp1-003-P.webp", "start": 24513064, "end": 24580000}, {"filename": "/resources/CardImage/PL!HS-bp1-003-P2.webp", "start": 24580000, "end": 24640248}, {"filename": "/resources/CardImage/PL!HS-bp1-003-R2.webp", "start": 24640248, "end": 24700986}, {"filename": "/resources/CardImage/PL!HS-bp1-003-SEC.webp", "start": 24700986, "end": 24775160}, {"filename": "/resources/CardImage/PL!HS-bp1-004-P.webp", "start": 24775160, "end": 24837276}, {"filename": "/resources/CardImage/PL!HS-bp1-004-P2.webp", "start": 24837276, "end": 24894346}, {"filename": "/resources/CardImage/PL!HS-bp1-004-R2.webp", "start": 24894346, "end": 24950724}, {"filename": "/resources/CardImage/PL!HS-bp1-004-SEC.webp", "start": 24950724, "end": 25017560}, {"filename": "/resources/CardImage/PL!HS-bp1-005-P.webp", "start": 25017560, "end": 25085188}, {"filename": "/resources/CardImage/PL!HS-bp1-005-PR.webp", "start": 25085188, "end": 25123830}, {"filename": "/resources/CardImage/PL!HS-bp1-005-R.webp", "start": 25123830, "end": 25180996}, {"filename": "/resources/CardImage/PL!HS-bp1-006-P.webp", "start": 25180996, "end": 25239632}, {"filename": "/resources/CardImage/PL!HS-bp1-006-P2.webp", "start": 25239632, "end": 25297814}, {"filename": "/resources/CardImage/PL!HS-bp1-006-R2.webp", "start": 25297814, "end": 25358774}, {"filename": "/resources/CardImage/PL!HS-bp1-006-SEC.webp", "start": 25358774, "end": 25444372}, {"filename": "/resources/CardImage/PL!HS-bp1-007-P.webp", "start": 25444372, "end": 25501988}, {"filename": "/resources/CardImage/PL!HS-bp1-007-R.webp", "start": 25501988, "end": 25555078}, {"filename": "/resources/CardImage/PL!HS-bp1-008-P.webp", "start": 25555078, "end": 25613586}, {"filename": "/resources/CardImage/PL!HS-bp1-008-R.webp", "start": 25613586, "end": 25667990}, {"filename": "/resources/CardImage/PL!HS-bp1-009-P.webp", "start": 25667990, "end": 25726338}, {"filename": "/resources/CardImage/PL!HS-bp1-009-R.webp", "start": 25726338, "end": 25783972}, {"filename": "/resources/CardImage/PL!HS-bp1-010-N.webp", "start": 25783972, "end": 25846388}, {"filename": "/resources/CardImage/PL!HS-bp1-011-N.webp", "start": 25846388, "end": 25904406}, {"filename": "/resources/CardImage/PL!HS-bp1-011-PR.webp", "start": 25904406, "end": 25940140}, {"filename": "/resources/CardImage/PL!HS-bp1-012-N.webp", "start": 25940140, "end": 25996680}, {"filename": "/resources/CardImage/PL!HS-bp1-012-PR.webp", "start": 25996680, "end": 26052086}, {"filename": "/resources/CardImage/PL!HS-bp1-013-N.webp", "start": 26052086, "end": 26105138}, {"filename": "/resources/CardImage/PL!HS-bp1-014-N.webp", "start": 26105138, "end": 26160528}, {"filename": "/resources/CardImage/PL!HS-bp1-015-N.webp", "start": 26160528, "end": 26218964}, {"filename": "/resources/CardImage/PL!HS-bp1-016-N.webp", "start": 26218964, "end": 26274456}, {"filename": "/resources/CardImage/PL!HS-bp1-016-PR.webp", "start": 26274456, "end": 26315464}, {"filename": "/resources/CardImage/PL!HS-bp1-017-N.webp", "start": 26315464, "end": 26372132}, {"filename": "/resources/CardImage/PL!HS-bp1-018-N.webp", "start": 26372132, "end": 26430936}, {"filename": "/resources/CardImage/PL!HS-bp1-019-L.webp", "start": 26430936, "end": 26469210}, {"filename": "/resources/CardImage/PL!HS-bp1-019-SECL.webp", "start": 26469210, "end": 26524090}, {"filename": "/resources/CardImage/PL!HS-bp1-020-L.webp", "start": 26524090, "end": 26555524}, {"filename": "/resources/CardImage/PL!HS-bp1-021-L.webp", "start": 26555524, "end": 26592782}, {"filename": "/resources/CardImage/PL!HS-bp1-022-L.webp", "start": 26592782, "end": 26629824}, {"filename": "/resources/CardImage/PL!HS-bp1-023-L.webp", "start": 26629824, "end": 26674660}, {"filename": "/resources/CardImage/PL!HS-bp1-024-SECE.webp", "start": 26674660, "end": 26738324}, {"filename": "/resources/CardImage/PL!HS-bp1-025-SECE.webp", "start": 26738324, "end": 26794388}, {"filename": "/resources/CardImage/PL!HS-bp1-026-SECE.webp", "start": 26794388, "end": 26867904}, {"filename": "/resources/CardImage/PL!HS-bp1-027-PE.webp", "start": 26867904, "end": 26902648}, {"filename": "/resources/CardImage/PL!HS-bp1-027-PE2.webp", "start": 26902648, "end": 26942576}, {"filename": "/resources/CardImage/PL!HS-bp1-028-PE.webp", "start": 26942576, "end": 26974960}, {"filename": "/resources/CardImage/PL!HS-bp1-028-PE2.webp", "start": 26974960, "end": 27013896}, {"filename": "/resources/CardImage/PL!HS-bp1-029-PE.webp", "start": 27013896, "end": 27046868}, {"filename": "/resources/CardImage/PL!HS-bp1-029-PE2.webp", "start": 27046868, "end": 27085126}, {"filename": "/resources/CardImage/PL!HS-bp1-030-PE.webp", "start": 27085126, "end": 27118740}, {"filename": "/resources/CardImage/PL!HS-bp1-030-PE2.webp", "start": 27118740, "end": 27159554}, {"filename": "/resources/CardImage/PL!HS-bp1-031-PE.webp", "start": 27159554, "end": 27189674}, {"filename": "/resources/CardImage/PL!HS-bp1-031-PE2.webp", "start": 27189674, "end": 27226452}, {"filename": "/resources/CardImage/PL!HS-bp1-E01-RE.webp", "start": 27226452, "end": 27274572}, {"filename": "/resources/CardImage/PL!HS-bp2-001-P.webp", "start": 27274572, "end": 27341754}, {"filename": "/resources/CardImage/PL!HS-bp2-001-R.webp", "start": 27341754, "end": 27394760}, {"filename": "/resources/CardImage/PL!HS-bp2-002-P.webp", "start": 27394760, "end": 27452014}, {"filename": "/resources/CardImage/PL!HS-bp2-002-P2.webp", "start": 27452014, "end": 27508690}, {"filename": "/resources/CardImage/PL!HS-bp2-002-R2.webp", "start": 27508690, "end": 27559980}, {"filename": "/resources/CardImage/PL!HS-bp2-002-SEC.webp", "start": 27559980, "end": 27628182}, {"filename": "/resources/CardImage/PL!HS-bp2-003-P.webp", "start": 27628182, "end": 27687956}, {"filename": "/resources/CardImage/PL!HS-bp2-003-R.webp", "start": 27687956, "end": 27755268}, {"filename": "/resources/CardImage/PL!HS-bp2-004-P.webp", "start": 27755268, "end": 27808316}, {"filename": "/resources/CardImage/PL!HS-bp2-004-R.webp", "start": 27808316, "end": 27867208}, {"filename": "/resources/CardImage/PL!HS-bp2-005-P.webp", "start": 27867208, "end": 27924160}, {"filename": "/resources/CardImage/PL!HS-bp2-005-P2.webp", "start": 27924160, "end": 27988370}, {"filename": "/resources/CardImage/PL!HS-bp2-005-R2.webp", "start": 27988370, "end": 28042606}, {"filename": "/resources/CardImage/PL!HS-bp2-005-SEC.webp", "start": 28042606, "end": 28117164}, {"filename": "/resources/CardImage/PL!HS-bp2-006-P.webp", "start": 28117164, "end": 28175056}, {"filename": "/resources/CardImage/PL!HS-bp2-006-R.webp", "start": 28175056, "end": 28243910}, {"filename": "/resources/CardImage/PL!HS-bp2-007-P.webp", "start": 28243910, "end": 28294402}, {"filename": "/resources/CardImage/PL!HS-bp2-007-P2.webp", "start": 28294402, "end": 28355426}, {"filename": "/resources/CardImage/PL!HS-bp2-007-R2.webp", "start": 28355426, "end": 28417114}, {"filename": "/resources/CardImage/PL!HS-bp2-007-SEC.webp", "start": 28417114, "end": 28486348}, {"filename": "/resources/CardImage/PL!HS-bp2-008-P.webp", "start": 28486348, "end": 28538822}, {"filename": "/resources/CardImage/PL!HS-bp2-008-R.webp", "start": 28538822, "end": 28606644}, {"filename": "/resources/CardImage/PL!HS-bp2-009-P.webp", "start": 28606644, "end": 28666508}, {"filename": "/resources/CardImage/PL!HS-bp2-009-R.webp", "start": 28666508, "end": 28728388}, {"filename": "/resources/CardImage/PL!HS-bp2-010-N.webp", "start": 28728388, "end": 28783082}, {"filename": "/resources/CardImage/PL!HS-bp2-010-PR.webp", "start": 28783082, "end": 28826674}, {"filename": "/resources/CardImage/PL!HS-bp2-011-N.webp", "start": 28826674, "end": 28875620}, {"filename": "/resources/CardImage/PL!HS-bp2-011-PR.webp", "start": 28875620, "end": 28932176}, {"filename": "/resources/CardImage/PL!HS-bp2-012-N.webp", "start": 28932176, "end": 28981768}, {"filename": "/resources/CardImage/PL!HS-bp2-013-N.webp", "start": 28981768, "end": 29032416}, {"filename": "/resources/CardImage/PL!HS-bp2-014-N.webp", "start": 29032416, "end": 29082334}, {"filename": "/resources/CardImage/PL!HS-bp2-015-N.webp", "start": 29082334, "end": 29133102}, {"filename": "/resources/CardImage/PL!HS-bp2-016-N.webp", "start": 29133102, "end": 29180058}, {"filename": "/resources/CardImage/PL!HS-bp2-017-N.webp", "start": 29180058, "end": 29227474}, {"filename": "/resources/CardImage/PL!HS-bp2-018-N.webp", "start": 29227474, "end": 29283772}, {"filename": "/resources/CardImage/PL!HS-bp2-019-L.webp", "start": 29283772, "end": 29330780}, {"filename": "/resources/CardImage/PL!HS-bp2-020-L.webp", "start": 29330780, "end": 29374134}, {"filename": "/resources/CardImage/PL!HS-bp2-021-L.webp", "start": 29374134, "end": 29420570}, {"filename": "/resources/CardImage/PL!HS-bp2-022-L.webp", "start": 29420570, "end": 29464342}, {"filename": "/resources/CardImage/PL!HS-bp2-022-L2.webp", "start": 29464342, "end": 29493954}, {"filename": "/resources/CardImage/PL!HS-bp2-023-L.webp", "start": 29493954, "end": 29533218}, {"filename": "/resources/CardImage/PL!HS-bp2-024-L.webp", "start": 29533218, "end": 29574584}, {"filename": "/resources/CardImage/PL!HS-bp2-024-L2.webp", "start": 29574584, "end": 29601888}, {"filename": "/resources/CardImage/PL!HS-bp2-025-L.webp", "start": 29601888, "end": 29645988}, {"filename": "/resources/CardImage/PL!HS-bp2-026-L.webp", "start": 29645988, "end": 29694762}, {"filename": "/resources/CardImage/PL!HS-bp2-026-L2.webp", "start": 29694762, "end": 29735506}, {"filename": "/resources/CardImage/PL!HS-bp2-027-SECE.webp", "start": 29735506, "end": 29792122}, {"filename": "/resources/CardImage/PL!HS-bp2-028-SECE.webp", "start": 29792122, "end": 29855816}, {"filename": "/resources/CardImage/PL!HS-bp2-029-SECE.webp", "start": 29855816, "end": 29913900}, {"filename": "/resources/CardImage/PL!HS-bp2-030-PE.webp", "start": 29913900, "end": 29947958}, {"filename": "/resources/CardImage/PL!HS-bp2-030-PE2.webp", "start": 29947958, "end": 29989264}, {"filename": "/resources/CardImage/PL!HS-bp2-031-PE.webp", "start": 29989264, "end": 30025100}, {"filename": "/resources/CardImage/PL!HS-bp2-031-PE2.webp", "start": 30025100, "end": 30068534}, {"filename": "/resources/CardImage/PL!HS-bp2-032-PE.webp", "start": 30068534, "end": 30099144}, {"filename": "/resources/CardImage/PL!HS-bp2-032-PE2.webp", "start": 30099144, "end": 30138558}, {"filename": "/resources/CardImage/PL!HS-bp2-033-PE.webp", "start": 30138558, "end": 30170020}, {"filename": "/resources/CardImage/PL!HS-bp2-033-PE2.webp", "start": 30170020, "end": 30207314}, {"filename": "/resources/CardImage/PL!HS-bp2-100-LLE.webp", "start": 30207314, "end": 30273674}, {"filename": "/resources/CardImage/PL!HS-bp2-200-LLE.webp", "start": 30273674, "end": 30341940}, {"filename": "/resources/CardImage/PL!HS-bp2-E01-RE.webp", "start": 30341940, "end": 30395822}, {"filename": "/resources/CardImage/PL!HS-bp5-001-AR.webp", "start": 30395822, "end": 30460346}, {"filename": "/resources/CardImage/PL!HS-bp5-001-P.webp", "start": 30460346, "end": 30512324}, {"filename": "/resources/CardImage/PL!HS-bp5-001-R2.webp", "start": 30512324, "end": 30566002}, {"filename": "/resources/CardImage/PL!HS-bp5-001-SEC.webp", "start": 30566002, "end": 30629046}, {"filename": "/resources/CardImage/PL!HS-bp5-002-AR.webp", "start": 30629046, "end": 30690068}, {"filename": "/resources/CardImage/PL!HS-bp5-002-P.webp", "start": 30690068, "end": 30748784}, {"filename": "/resources/CardImage/PL!HS-bp5-002-R2.webp", "start": 30748784, "end": 30801686}, {"filename": "/resources/CardImage/PL!HS-bp5-002-SEC.webp", "start": 30801686, "end": 30858200}, {"filename": "/resources/CardImage/PL!HS-bp5-003-AR.webp", "start": 30858200, "end": 30923908}, {"filename": "/resources/CardImage/PL!HS-bp5-003-P.webp", "start": 30923908, "end": 30981242}, {"filename": "/resources/CardImage/PL!HS-bp5-003-R2.webp", "start": 30981242, "end": 31037402}, {"filename": "/resources/CardImage/PL!HS-bp5-003-SEC.webp", "start": 31037402, "end": 31091810}, {"filename": "/resources/CardImage/PL!HS-bp5-004-AR.webp", "start": 31091810, "end": 31149182}, {"filename": "/resources/CardImage/PL!HS-bp5-004-P.webp", "start": 31149182, "end": 31200094}, {"filename": "/resources/CardImage/PL!HS-bp5-004-R.webp", "start": 31200094, "end": 31250514}, {"filename": "/resources/CardImage/PL!HS-bp5-005-AR.webp", "start": 31250514, "end": 31312684}, {"filename": "/resources/CardImage/PL!HS-bp5-005-P.webp", "start": 31312684, "end": 31368582}, {"filename": "/resources/CardImage/PL!HS-bp5-005-R.webp", "start": 31368582, "end": 31420190}, {"filename": "/resources/CardImage/PL!HS-bp5-006-AR.webp", "start": 31420190, "end": 31482054}, {"filename": "/resources/CardImage/PL!HS-bp5-006-P.webp", "start": 31482054, "end": 31536940}, {"filename": "/resources/CardImage/PL!HS-bp5-006-R.webp", "start": 31536940, "end": 31587084}, {"filename": "/resources/CardImage/PL!HS-bp5-007-AR.webp", "start": 31587084, "end": 31649294}, {"filename": "/resources/CardImage/PL!HS-bp5-007-P.webp", "start": 31649294, "end": 31706296}, {"filename": "/resources/CardImage/PL!HS-bp5-007-R.webp", "start": 31706296, "end": 31760758}, {"filename": "/resources/CardImage/PL!HS-bp5-008-AR.webp", "start": 31760758, "end": 31819866}, {"filename": "/resources/CardImage/PL!HS-bp5-008-P.webp", "start": 31819866, "end": 31874630}, {"filename": "/resources/CardImage/PL!HS-bp5-008-R.webp", "start": 31874630, "end": 31925098}, {"filename": "/resources/CardImage/PL!HS-bp5-009-N.webp", "start": 31925098, "end": 31977284}, {"filename": "/resources/CardImage/PL!HS-bp5-010-N.webp", "start": 31977284, "end": 32030114}, {"filename": "/resources/CardImage/PL!HS-bp5-011-N.webp", "start": 32030114, "end": 32089060}, {"filename": "/resources/CardImage/PL!HS-bp5-012-N.webp", "start": 32089060, "end": 32139424}, {"filename": "/resources/CardImage/PL!HS-bp5-013-N.webp", "start": 32139424, "end": 32194850}, {"filename": "/resources/CardImage/PL!HS-bp5-014-N.webp", "start": 32194850, "end": 32249814}, {"filename": "/resources/CardImage/PL!HS-bp5-015-N.webp", "start": 32249814, "end": 32301200}, {"filename": "/resources/CardImage/PL!HS-bp5-016-N.webp", "start": 32301200, "end": 32354466}, {"filename": "/resources/CardImage/PL!HS-bp5-017-L.webp", "start": 32354466, "end": 32392048}, {"filename": "/resources/CardImage/PL!HS-bp5-018-L.webp", "start": 32392048, "end": 32438768}, {"filename": "/resources/CardImage/PL!HS-bp5-019-L.webp", "start": 32438768, "end": 32477046}, {"filename": "/resources/CardImage/PL!HS-bp5-020-L.webp", "start": 32477046, "end": 32507852}, {"filename": "/resources/CardImage/PL!HS-bp5-021-L.webp", "start": 32507852, "end": 32544778}, {"filename": "/resources/CardImage/PL!HS-bp5-022-L.webp", "start": 32544778, "end": 32581150}, {"filename": "/resources/CardImage/PL!HS-bp5-E01-PE.webp", "start": 32581150, "end": 32635156}, {"filename": "/resources/CardImage/PL!HS-bp5-E01-SECE.webp", "start": 32635156, "end": 32685330}, {"filename": "/resources/CardImage/PL!HS-bp5-E02-PE.webp", "start": 32685330, "end": 32736974}, {"filename": "/resources/CardImage/PL!HS-bp5-E02-SECE.webp", "start": 32736974, "end": 32782916}, {"filename": "/resources/CardImage/PL!HS-bp5-E03-PE.webp", "start": 32782916, "end": 32838080}, {"filename": "/resources/CardImage/PL!HS-bp5-E03-SECE.webp", "start": 32838080, "end": 32884528}, {"filename": "/resources/CardImage/PL!HS-bp5-E04-PE.webp", "start": 32884528, "end": 32938134}, {"filename": "/resources/CardImage/PL!HS-bp5-E05-PE.webp", "start": 32938134, "end": 32992070}, {"filename": "/resources/CardImage/PL!HS-bp5-E06-PE.webp", "start": 32992070, "end": 33044260}, {"filename": "/resources/CardImage/PL!HS-bp5-LLE.webp", "start": 33044260, "end": 33119088}, {"filename": "/resources/CardImage/PL!HS-bp6-001-P.webp", "start": 33119088, "end": 33177756}, {"filename": "/resources/CardImage/PL!HS-bp6-001-P2.webp", "start": 33177756, "end": 33237854}, {"filename": "/resources/CardImage/PL!HS-bp6-001-R2.webp", "start": 33237854, "end": 33295930}, {"filename": "/resources/CardImage/PL!HS-bp6-001-SEC.webp", "start": 33295930, "end": 33355874}, {"filename": "/resources/CardImage/PL!HS-bp6-002-P.webp", "start": 33355874, "end": 33400878}, {"filename": "/resources/CardImage/PL!HS-bp6-002-R.webp", "start": 33400878, "end": 33450192}, {"filename": "/resources/CardImage/PL!HS-bp6-003-P.webp", "start": 33450192, "end": 33518876}, {"filename": "/resources/CardImage/PL!HS-bp6-003-R.webp", "start": 33518876, "end": 33578000}, {"filename": "/resources/CardImage/PL!HS-bp6-004-P.webp", "start": 33578000, "end": 33635790}, {"filename": "/resources/CardImage/PL!HS-bp6-004-R.webp", "start": 33635790, "end": 33686778}, {"filename": "/resources/CardImage/PL!HS-bp6-005-P.webp", "start": 33686778, "end": 33740670}, {"filename": "/resources/CardImage/PL!HS-bp6-005-P2.webp", "start": 33740670, "end": 33802196}, {"filename": "/resources/CardImage/PL!HS-bp6-005-R2.webp", "start": 33802196, "end": 33862848}, {"filename": "/resources/CardImage/PL!HS-bp6-005-SEC.webp", "start": 33862848, "end": 33937486}, {"filename": "/resources/CardImage/PL!HS-bp6-006-P.webp", "start": 33937486, "end": 34009936}, {"filename": "/resources/CardImage/PL!HS-bp6-006-P2.webp", "start": 34009936, "end": 34070252}, {"filename": "/resources/CardImage/PL!HS-bp6-006-R2.webp", "start": 34070252, "end": 34124406}, {"filename": "/resources/CardImage/PL!HS-bp6-006-SEC.webp", "start": 34124406, "end": 34198152}, {"filename": "/resources/CardImage/PL!HS-bp6-007-P.webp", "start": 34198152, "end": 34260014}, {"filename": "/resources/CardImage/PL!HS-bp6-007-R.webp", "start": 34260014, "end": 34316706}, {"filename": "/resources/CardImage/PL!HS-bp6-008-P.webp", "start": 34316706, "end": 34374650}, {"filename": "/resources/CardImage/PL!HS-bp6-008-R.webp", "start": 34374650, "end": 34425390}, {"filename": "/resources/CardImage/PL!HS-bp6-009-R.webp", "start": 34425390, "end": 34484724}, {"filename": "/resources/CardImage/PL!HS-bp6-010-R.webp", "start": 34484724, "end": 34534966}, {"filename": "/resources/CardImage/PL!HS-bp6-011-R.webp", "start": 34534966, "end": 34596108}, {"filename": "/resources/CardImage/PL!HS-bp6-012-R.webp", "start": 34596108, "end": 34637454}, {"filename": "/resources/CardImage/PL!HS-bp6-013-R.webp", "start": 34637454, "end": 34688612}, {"filename": "/resources/CardImage/PL!HS-bp6-014-R.webp", "start": 34688612, "end": 34751964}, {"filename": "/resources/CardImage/PL!HS-bp6-015-R.webp", "start": 34751964, "end": 34803916}, {"filename": "/resources/CardImage/PL!HS-bp6-016-R.webp", "start": 34803916, "end": 34840146}, {"filename": "/resources/CardImage/PL!HS-bp6-017-N.webp", "start": 34840146, "end": 34896272}, {"filename": "/resources/CardImage/PL!HS-bp6-018-N.webp", "start": 34896272, "end": 34949600}, {"filename": "/resources/CardImage/PL!HS-bp6-019-N.webp", "start": 34949600, "end": 35002840}, {"filename": "/resources/CardImage/PL!HS-bp6-020-N.webp", "start": 35002840, "end": 35052946}, {"filename": "/resources/CardImage/PL!HS-bp6-021-N.webp", "start": 35052946, "end": 35103050}, {"filename": "/resources/CardImage/PL!HS-bp6-022-N.webp", "start": 35103050, "end": 35158260}, {"filename": "/resources/CardImage/PL!HS-bp6-023-N.webp", "start": 35158260, "end": 35215358}, {"filename": "/resources/CardImage/PL!HS-bp6-024-N.webp", "start": 35215358, "end": 35276288}, {"filename": "/resources/CardImage/PL!HS-bp6-025-L.webp", "start": 35276288, "end": 35316548}, {"filename": "/resources/CardImage/PL!HS-bp6-026-L.webp", "start": 35316548, "end": 35347144}, {"filename": "/resources/CardImage/PL!HS-bp6-027-L.webp", "start": 35347144, "end": 35390838}, {"filename": "/resources/CardImage/PL!HS-bp6-028-L.webp", "start": 35390838, "end": 35427862}, {"filename": "/resources/CardImage/PL!HS-bp6-029-L.webp", "start": 35427862, "end": 35467462}, {"filename": "/resources/CardImage/PL!HS-bp6-030-L.webp", "start": 35467462, "end": 35508128}, {"filename": "/resources/CardImage/PL!HS-bp6-031-L.webp", "start": 35508128, "end": 35555554}, {"filename": "/resources/CardImage/PL!HS-bp6-032-L.webp", "start": 35555554, "end": 35587234}, {"filename": "/resources/CardImage/PL!HS-bp6-E01-SECE.webp", "start": 35587234, "end": 35636486}, {"filename": "/resources/CardImage/PL!HS-bp6-E02-SECE.webp", "start": 35636486, "end": 35698848}, {"filename": "/resources/CardImage/PL!HS-bp6-E03-SECE.webp", "start": 35698848, "end": 35761658}, {"filename": "/resources/CardImage/PL!HS-bp6-E04-PE.webp", "start": 35761658, "end": 35793168}, {"filename": "/resources/CardImage/PL!HS-bp6-E04-PE2.webp", "start": 35793168, "end": 35827468}, {"filename": "/resources/CardImage/PL!HS-bp6-E05-PE.webp", "start": 35827468, "end": 35860614}, {"filename": "/resources/CardImage/PL!HS-bp6-E05-PE2.webp", "start": 35860614, "end": 35897664}, {"filename": "/resources/CardImage/PL!HS-bp6-E06-PE.webp", "start": 35897664, "end": 35929366}, {"filename": "/resources/CardImage/PL!HS-bp6-E06-PE2.webp", "start": 35929366, "end": 35966404}, {"filename": "/resources/CardImage/PL!HS-bp6-E07-PE.webp", "start": 35966404, "end": 35996794}, {"filename": "/resources/CardImage/PL!HS-bp6-E07-PE2.webp", "start": 35996794, "end": 36032340}, {"filename": "/resources/CardImage/PL!HS-bp6-E08-PE.webp", "start": 36032340, "end": 36062790}, {"filename": "/resources/CardImage/PL!HS-bp6-E08-PE2.webp", "start": 36062790, "end": 36099396}, {"filename": "/resources/CardImage/PL!HS-bp6-E10-LLE.webp", "start": 36099396, "end": 36162646}, {"filename": "/resources/CardImage/PL!HS-bp6-E20-LLE.webp", "start": 36162646, "end": 36242722}, {"filename": "/resources/CardImage/PL!HS-cl1-001-CL.webp", "start": 36242722, "end": 36321934}, {"filename": "/resources/CardImage/PL!HS-cl1-002-CL.webp", "start": 36321934, "end": 36402548}, {"filename": "/resources/CardImage/PL!HS-cl1-003-CL.webp", "start": 36402548, "end": 36485666}, {"filename": "/resources/CardImage/PL!HS-cl1-004-CL.webp", "start": 36485666, "end": 36560308}, {"filename": "/resources/CardImage/PL!HS-cl1-005-CL.webp", "start": 36560308, "end": 36640352}, {"filename": "/resources/CardImage/PL!HS-cl1-006-CL.webp", "start": 36640352, "end": 36717930}, {"filename": "/resources/CardImage/PL!HS-cl1-007-CL.webp", "start": 36717930, "end": 36784730}, {"filename": "/resources/CardImage/PL!HS-cl1-008-CL.webp", "start": 36784730, "end": 36857900}, {"filename": "/resources/CardImage/PL!HS-cl1-009-CL.webp", "start": 36857900, "end": 36921694}, {"filename": "/resources/CardImage/PL!HS-cl1-010-CL.webp", "start": 36921694, "end": 36979820}, {"filename": "/resources/CardImage/PL!HS-cl1-011-CL.webp", "start": 36979820, "end": 37046234}, {"filename": "/resources/CardImage/PL!HS-cl1-012-CL.webp", "start": 37046234, "end": 37104880}, {"filename": "/resources/CardImage/PL!HS-cl1-013-CL.webp", "start": 37104880, "end": 37171166}, {"filename": "/resources/CardImage/PL!HS-cl1-014-CL.webp", "start": 37171166, "end": 37238918}, {"filename": "/resources/CardImage/PL!HS-cl1-015-CL.webp", "start": 37238918, "end": 37302696}, {"filename": "/resources/CardImage/PL!HS-cl1-016-CL.webp", "start": 37302696, "end": 37368214}, {"filename": "/resources/CardImage/PL!HS-pb1-001-P2.webp", "start": 37368214, "end": 37435888}, {"filename": "/resources/CardImage/PL!HS-pb1-001-R.webp", "start": 37435888, "end": 37478208}, {"filename": "/resources/CardImage/PL!HS-pb1-002-P2.webp", "start": 37478208, "end": 37521436}, {"filename": "/resources/CardImage/PL!HS-pb1-002-R.webp", "start": 37521436, "end": 37564944}, {"filename": "/resources/CardImage/PL!HS-pb1-003-P2.webp", "start": 37564944, "end": 37608080}, {"filename": "/resources/CardImage/PL!HS-pb1-003-R.webp", "start": 37608080, "end": 37650204}, {"filename": "/resources/CardImage/PL!HS-pb1-004-P2.webp", "start": 37650204, "end": 37689276}, {"filename": "/resources/CardImage/PL!HS-pb1-004-R.webp", "start": 37689276, "end": 37727448}, {"filename": "/resources/CardImage/PL!HS-pb1-005-P2.webp", "start": 37727448, "end": 37769590}, {"filename": "/resources/CardImage/PL!HS-pb1-005-R.webp", "start": 37769590, "end": 37807464}, {"filename": "/resources/CardImage/PL!HS-pb1-006-P2.webp", "start": 37807464, "end": 37850724}, {"filename": "/resources/CardImage/PL!HS-pb1-006-R.webp", "start": 37850724, "end": 37892490}, {"filename": "/resources/CardImage/PL!HS-pb1-007-P2.webp", "start": 37892490, "end": 37934036}, {"filename": "/resources/CardImage/PL!HS-pb1-007-R.webp", "start": 37934036, "end": 37976278}, {"filename": "/resources/CardImage/PL!HS-pb1-008-P2.webp", "start": 37976278, "end": 38019538}, {"filename": "/resources/CardImage/PL!HS-pb1-008-R.webp", "start": 38019538, "end": 38063676}, {"filename": "/resources/CardImage/PL!HS-pb1-009-P2.webp", "start": 38063676, "end": 38105964}, {"filename": "/resources/CardImage/PL!HS-pb1-009-R.webp", "start": 38105964, "end": 38145898}, {"filename": "/resources/CardImage/PL!HS-pb1-010-P2.webp", "start": 38145898, "end": 38182656}, {"filename": "/resources/CardImage/PL!HS-pb1-010-R.webp", "start": 38182656, "end": 38221842}, {"filename": "/resources/CardImage/PL!HS-pb1-011-P2.webp", "start": 38221842, "end": 38271850}, {"filename": "/resources/CardImage/PL!HS-pb1-011-R.webp", "start": 38271850, "end": 38312664}, {"filename": "/resources/CardImage/PL!HS-pb1-012-P2.webp", "start": 38312664, "end": 38350124}, {"filename": "/resources/CardImage/PL!HS-pb1-012-R.webp", "start": 38350124, "end": 38389210}, {"filename": "/resources/CardImage/PL!HS-pb1-013-P2.webp", "start": 38389210, "end": 38429604}, {"filename": "/resources/CardImage/PL!HS-pb1-013-R.webp", "start": 38429604, "end": 38468062}, {"filename": "/resources/CardImage/PL!HS-pb1-014-P2.webp", "start": 38468062, "end": 38523128}, {"filename": "/resources/CardImage/PL!HS-pb1-014-R.webp", "start": 38523128, "end": 38562878}, {"filename": "/resources/CardImage/PL!HS-pb1-015-P2.webp", "start": 38562878, "end": 38604784}, {"filename": "/resources/CardImage/PL!HS-pb1-015-R.webp", "start": 38604784, "end": 38645048}, {"filename": "/resources/CardImage/PL!HS-pb1-016-P2.webp", "start": 38645048, "end": 38685648}, {"filename": "/resources/CardImage/PL!HS-pb1-016-R.webp", "start": 38685648, "end": 38723976}, {"filename": "/resources/CardImage/PL!HS-pb1-017-N.webp", "start": 38723976, "end": 38765146}, {"filename": "/resources/CardImage/PL!HS-pb1-018-N.webp", "start": 38765146, "end": 38805714}, {"filename": "/resources/CardImage/PL!HS-pb1-019-N.webp", "start": 38805714, "end": 38847762}, {"filename": "/resources/CardImage/PL!HS-pb1-020-N.webp", "start": 38847762, "end": 38886686}, {"filename": "/resources/CardImage/PL!HS-pb1-021-N.webp", "start": 38886686, "end": 38923662}, {"filename": "/resources/CardImage/PL!HS-pb1-022-N.webp", "start": 38923662, "end": 38965126}, {"filename": "/resources/CardImage/PL!HS-pb1-023-N.webp", "start": 38965126, "end": 39003178}, {"filename": "/resources/CardImage/PL!HS-pb1-024-N.webp", "start": 39003178, "end": 39043776}, {"filename": "/resources/CardImage/PL!HS-pb1-025-L.webp", "start": 39043776, "end": 39075158}, {"filename": "/resources/CardImage/PL!HS-pb1-026-L.webp", "start": 39075158, "end": 39094756}, {"filename": "/resources/CardImage/PL!HS-pb1-027-L.webp", "start": 39094756, "end": 39122054}, {"filename": "/resources/CardImage/PL!HS-pb1-028-L.webp", "start": 39122054, "end": 39153452}, {"filename": "/resources/CardImage/PL!HS-pb1-029-L.webp", "start": 39153452, "end": 39185424}, {"filename": "/resources/CardImage/PL!HS-pb1-030-L.webp", "start": 39185424, "end": 39211580}, {"filename": "/resources/CardImage/PL!HS-pb1-031-PE.webp", "start": 39211580, "end": 39241080}, {"filename": "/resources/CardImage/PL!HS-pb1-031-PE2.webp", "start": 39241080, "end": 39280042}, {"filename": "/resources/CardImage/PL!HS-pb1-032-PE.webp", "start": 39280042, "end": 39311208}, {"filename": "/resources/CardImage/PL!HS-pb1-032-PE2.webp", "start": 39311208, "end": 39349420}, {"filename": "/resources/CardImage/PL!HS-pb1-033-PE.webp", "start": 39349420, "end": 39383918}, {"filename": "/resources/CardImage/PL!HS-pb1-033-PE2.webp", "start": 39383918, "end": 39422886}, {"filename": "/resources/CardImage/PL!HS-pb1-034-PE.webp", "start": 39422886, "end": 39453382}, {"filename": "/resources/CardImage/PL!HS-pb1-034-PE2.webp", "start": 39453382, "end": 39490488}, {"filename": "/resources/CardImage/PL!HS-pb1-035-PE.webp", "start": 39490488, "end": 39520568}, {"filename": "/resources/CardImage/PL!HS-pb1-035-PE2.webp", "start": 39520568, "end": 39558676}, {"filename": "/resources/CardImage/PL!HS-pb1-036-PE.webp", "start": 39558676, "end": 39592162}, {"filename": "/resources/CardImage/PL!HS-pb1-036-PE2.webp", "start": 39592162, "end": 39631202}, {"filename": "/resources/CardImage/PL!HS-pb1-037-PE.webp", "start": 39631202, "end": 39662670}, {"filename": "/resources/CardImage/PL!HS-pb1-037-PE2.webp", "start": 39662670, "end": 39701350}, {"filename": "/resources/CardImage/PL!HS-pb1-038-PE.webp", "start": 39701350, "end": 39729370}, {"filename": "/resources/CardImage/PL!HS-pb1-038-PE2.webp", "start": 39729370, "end": 39767426}, {"filename": "/resources/CardImage/PL!HS-pb1-039-SRE.webp", "start": 39767426, "end": 39791380}, {"filename": "/resources/CardImage/PL!HS-pb1-040-SRE.webp", "start": 39791380, "end": 39822330}, {"filename": "/resources/CardImage/PL!HS-pb1-041-SRE.webp", "start": 39822330, "end": 39859706}, {"filename": "/resources/CardImage/PL!HS-pb1-042-SRE.webp", "start": 39859706, "end": 39898124}, {"filename": "/resources/CardImage/PL!HS-pb1-043-SRE.webp", "start": 39898124, "end": 39934126}, {"filename": "/resources/CardImage/PL!HS-pb1-044-SRE.webp", "start": 39934126, "end": 39966644}, {"filename": "/resources/CardImage/PL!HS-pb1-045-SRE.webp", "start": 39966644, "end": 39994468}, {"filename": "/resources/CardImage/PL!HS-pb1-046-SRE.webp", "start": 39994468, "end": 40024838}, {"filename": "/resources/CardImage/PL!HS-pb1-047-SRE.webp", "start": 40024838, "end": 40070008}, {"filename": "/resources/CardImage/PL!HS-pb1-048-SRE.webp", "start": 40070008, "end": 40102052}, {"filename": "/resources/CardImage/PL!HS-pb1-049-SRE.webp", "start": 40102052, "end": 40146494}, {"filename": "/resources/CardImage/PL!HS-pb1-050-SRE.webp", "start": 40146494, "end": 40180004}, {"filename": "/resources/CardImage/PL!HS-pb1-051-SRE.webp", "start": 40180004, "end": 40245098}, {"filename": "/resources/CardImage/PL!HS-pb1-052-SECE.webp", "start": 40245098, "end": 40280666}, {"filename": "/resources/CardImage/PL!HS-pb1-052-SRE.webp", "start": 40280666, "end": 40313684}, {"filename": "/resources/CardImage/PL!HS-pb1-100-LLE.webp", "start": 40313684, "end": 40359046}, {"filename": "/resources/CardImage/PL!HS-pb1-200-LLE.webp", "start": 40359046, "end": 40404334}, {"filename": "/resources/CardImage/PL!HS-pb1-300-LLE.webp", "start": 40404334, "end": 40448856}, {"filename": "/resources/CardImage/PL!HS-pb1-400-LLE.webp", "start": 40448856, "end": 40494296}, {"filename": "/resources/CardImage/PL!HS-pb1-500-LLE.webp", "start": 40494296, "end": 40538710}, {"filename": "/resources/CardImage/PL!HS-pb1-600-LLE.webp", "start": 40538710, "end": 40584168}, {"filename": "/resources/CardImage/PL!HS-pb1-700-LLE.webp", "start": 40584168, "end": 40630952}, {"filename": "/resources/CardImage/PL!HS-pb1-800-LLE.webp", "start": 40630952, "end": 40679436}, {"filename": "/resources/CardImage/PL!HS-sd1-001-SD.webp", "start": 40679436, "end": 40739406}, {"filename": "/resources/CardImage/PL!HS-sd1-002-SD.webp", "start": 40739406, "end": 40798708}, {"filename": "/resources/CardImage/PL!HS-sd1-003-SD.webp", "start": 40798708, "end": 40860550}, {"filename": "/resources/CardImage/PL!HS-sd1-004-SD.webp", "start": 40860550, "end": 40920534}, {"filename": "/resources/CardImage/PL!HS-sd1-005-SD.webp", "start": 40920534, "end": 40981410}, {"filename": "/resources/CardImage/PL!HS-sd1-006-SD.webp", "start": 40981410, "end": 41046364}, {"filename": "/resources/CardImage/PL!HS-sd1-007-SD.webp", "start": 41046364, "end": 41108172}, {"filename": "/resources/CardImage/PL!HS-sd1-008-SD.webp", "start": 41108172, "end": 41169674}, {"filename": "/resources/CardImage/PL!HS-sd1-009-SD.webp", "start": 41169674, "end": 41216812}, {"filename": "/resources/CardImage/PL!HS-sd1-010-SD.webp", "start": 41216812, "end": 41260304}, {"filename": "/resources/CardImage/PL!HS-sd1-011-SD.webp", "start": 41260304, "end": 41305892}, {"filename": "/resources/CardImage/PL!HS-sd1-012-SD.webp", "start": 41305892, "end": 41344800}, {"filename": "/resources/CardImage/PL!HS-sd1-013-SD.webp", "start": 41344800, "end": 41385060}, {"filename": "/resources/CardImage/PL!HS-sd1-014-SD.webp", "start": 41385060, "end": 41429888}, {"filename": "/resources/CardImage/PL!HS-sd1-015-SD.webp", "start": 41429888, "end": 41476482}, {"filename": "/resources/CardImage/PL!HS-sd1-016-SD.webp", "start": 41476482, "end": 41519884}, {"filename": "/resources/CardImage/PL!HS-sd1-017-SD.webp", "start": 41519884, "end": 41560882}, {"filename": "/resources/CardImage/PL!HS-sd1-018-SD.webp", "start": 41560882, "end": 41595848}, {"filename": "/resources/CardImage/PL!HS-sd1-018-SECL.webp", "start": 41595848, "end": 41670332}, {"filename": "/resources/CardImage/PL!HS-sd1-019-SD.webp", "start": 41670332, "end": 41703786}, {"filename": "/resources/CardImage/PL!HS-sd1-020-SD.webp", "start": 41703786, "end": 41741844}, {"filename": "/resources/CardImage/PL!HS-sd1-021-P.webp", "start": 41741844, "end": 41793284}, {"filename": "/resources/CardImage/PL!HS-sd1-022-P.webp", "start": 41793284, "end": 41843304}, {"filename": "/resources/CardImage/PL!HS-sd1-023-P.webp", "start": 41843304, "end": 41896350}, {"filename": "/resources/CardImage/PL!HS-sd1-024-P.webp", "start": 41896350, "end": 41943732}, {"filename": "/resources/CardImage/PL!HS-sd1-025-P.webp", "start": 41943732, "end": 41995784}, {"filename": "/resources/CardImage/PL!HS-sd1-026-P.webp", "start": 41995784, "end": 42044124}, {"filename": "/resources/CardImage/PL!HS-sd1-027-P.webp", "start": 42044124, "end": 42096356}, {"filename": "/resources/CardImage/PL!HS-sd1-028-P.webp", "start": 42096356, "end": 42146218}, {"filename": "/resources/CardImage/PL!N-PR-001-PR.webp", "start": 42146218, "end": 42196574}, {"filename": "/resources/CardImage/PL!N-PR-002-PR.webp", "start": 42196574, "end": 42244672}, {"filename": "/resources/CardImage/PL!N-PR-003-PR.webp", "start": 42244672, "end": 42300344}, {"filename": "/resources/CardImage/PL!N-PR-004-PR.webp", "start": 42300344, "end": 42358562}, {"filename": "/resources/CardImage/PL!N-PR-005-PR.webp", "start": 42358562, "end": 42420696}, {"filename": "/resources/CardImage/PL!N-PR-006-PR.webp", "start": 42420696, "end": 42473688}, {"filename": "/resources/CardImage/PL!N-PR-007-PR.webp", "start": 42473688, "end": 42529622}, {"filename": "/resources/CardImage/PL!N-PR-008-PR.webp", "start": 42529622, "end": 42596130}, {"filename": "/resources/CardImage/PL!N-PR-009-PR.webp", "start": 42596130, "end": 42653040}, {"filename": "/resources/CardImage/PL!N-PR-009-RM.webp", "start": 42653040, "end": 42716224}, {"filename": "/resources/CardImage/PL!N-PR-010-PR.webp", "start": 42716224, "end": 42776354}, {"filename": "/resources/CardImage/PL!N-PR-011-PR.webp", "start": 42776354, "end": 42834002}, {"filename": "/resources/CardImage/PL!N-PR-012-PR.webp", "start": 42834002, "end": 42892462}, {"filename": "/resources/CardImage/PL!N-PR-012-RM.webp", "start": 42892462, "end": 42952956}, {"filename": "/resources/CardImage/PL!N-PR-013-PR.webp", "start": 42952956, "end": 43010736}, {"filename": "/resources/CardImage/PL!N-PR-014-PR.webp", "start": 43010736, "end": 43067314}, {"filename": "/resources/CardImage/PL!N-PR-014-RM.webp", "start": 43067314, "end": 43132258}, {"filename": "/resources/CardImage/PL!N-PR-015-PR2.webp", "start": 43132258, "end": 43178280}, {"filename": "/resources/CardImage/PL!N-PR-016-PR.webp", "start": 43178280, "end": 43239760}, {"filename": "/resources/CardImage/PL!N-PR-017-PR2.webp", "start": 43239760, "end": 43278836}, {"filename": "/resources/CardImage/PL!N-PR-018-PR.webp", "start": 43278836, "end": 43317828}, {"filename": "/resources/CardImage/PL!N-PR-019-PR.webp", "start": 43317828, "end": 43376880}, {"filename": "/resources/CardImage/PL!N-PR-020-PR.webp", "start": 43376880, "end": 43440896}, {"filename": "/resources/CardImage/PL!N-PR-021-PR.webp", "start": 43440896, "end": 43508546}, {"filename": "/resources/CardImage/PL!N-PR-023-PR.webp", "start": 43508546, "end": 43572216}, {"filename": "/resources/CardImage/PL!N-PR-024-PR.webp", "start": 43572216, "end": 43635394}, {"filename": "/resources/CardImage/PL!N-PR-025-PR.webp", "start": 43635394, "end": 43689824}, {"filename": "/resources/CardImage/PL!N-PR-026-PR.webp", "start": 43689824, "end": 43738198}, {"filename": "/resources/CardImage/PL!N-PR-027-PR.webp", "start": 43738198, "end": 43799018}, {"filename": "/resources/CardImage/PL!N-PR-028-PR.webp", "start": 43799018, "end": 43862890}, {"filename": "/resources/CardImage/PL!N-PR-029-PR2.webp", "start": 43862890, "end": 43915868}, {"filename": "/resources/CardImage/PL!N-PR-030-PR.webp", "start": 43915868, "end": 43975682}, {"filename": "/resources/CardImage/PL!N-PR-030-PR2.webp", "start": 43975682, "end": 44033238}, {"filename": "/resources/CardImage/PL!N-PR-031-PR.webp", "start": 44033238, "end": 44113258}, {"filename": "/resources/CardImage/PL!N-PR-032-PR.webp", "start": 44113258, "end": 44178886}, {"filename": "/resources/CardImage/PL!N-bp1-000-LLE.webp", "start": 44178886, "end": 44225312}, {"filename": "/resources/CardImage/PL!N-bp1-001-P.webp", "start": 44225312, "end": 44290628}, {"filename": "/resources/CardImage/PL!N-bp1-001-R.webp", "start": 44290628, "end": 44359138}, {"filename": "/resources/CardImage/PL!N-bp1-002-P.webp", "start": 44359138, "end": 44422900}, {"filename": "/resources/CardImage/PL!N-bp1-002-P2.webp", "start": 44422900, "end": 44478018}, {"filename": "/resources/CardImage/PL!N-bp1-002-R2.webp", "start": 44478018, "end": 44547036}, {"filename": "/resources/CardImage/PL!N-bp1-002-SEC.webp", "start": 44547036, "end": 44622424}, {"filename": "/resources/CardImage/PL!N-bp1-003-P.webp", "start": 44622424, "end": 44687648}, {"filename": "/resources/CardImage/PL!N-bp1-003-P2.webp", "start": 44687648, "end": 44748608}, {"filename": "/resources/CardImage/PL!N-bp1-003-R2.webp", "start": 44748608, "end": 44818392}, {"filename": "/resources/CardImage/PL!N-bp1-003-SEC.webp", "start": 44818392, "end": 44896710}, {"filename": "/resources/CardImage/PL!N-bp1-004-P.webp", "start": 44896710, "end": 44952546}, {"filename": "/resources/CardImage/PL!N-bp1-004-R.webp", "start": 44952546, "end": 45017286}, {"filename": "/resources/CardImage/PL!N-bp1-005-P.webp", "start": 45017286, "end": 45082740}, {"filename": "/resources/CardImage/PL!N-bp1-005-R.webp", "start": 45082740, "end": 45150900}, {"filename": "/resources/CardImage/PL!N-bp1-006-P.webp", "start": 45150900, "end": 45211424}, {"filename": "/resources/CardImage/PL!N-bp1-006-P2.webp", "start": 45211424, "end": 45265604}, {"filename": "/resources/CardImage/PL!N-bp1-006-R2.webp", "start": 45265604, "end": 45339040}, {"filename": "/resources/CardImage/PL!N-bp1-006-SEC.webp", "start": 45339040, "end": 45411700}, {"filename": "/resources/CardImage/PL!N-bp1-007-P.webp", "start": 45411700, "end": 45470706}, {"filename": "/resources/CardImage/PL!N-bp1-007-R.webp", "start": 45470706, "end": 45537618}, {"filename": "/resources/CardImage/PL!N-bp1-008-P.webp", "start": 45537618, "end": 45603522}, {"filename": "/resources/CardImage/PL!N-bp1-008-R.webp", "start": 45603522, "end": 45673762}, {"filename": "/resources/CardImage/PL!N-bp1-009-P.webp", "start": 45673762, "end": 45740800}, {"filename": "/resources/CardImage/PL!N-bp1-009-R.webp", "start": 45740800, "end": 45810120}, {"filename": "/resources/CardImage/PL!N-bp1-010-P.webp", "start": 45810120, "end": 45874418}, {"filename": "/resources/CardImage/PL!N-bp1-010-R.webp", "start": 45874418, "end": 45938750}, {"filename": "/resources/CardImage/PL!N-bp1-011-P.webp", "start": 45938750, "end": 46006550}, {"filename": "/resources/CardImage/PL!N-bp1-011-R.webp", "start": 46006550, "end": 46071484}, {"filename": "/resources/CardImage/PL!N-bp1-012-P.webp", "start": 46071484, "end": 46142168}, {"filename": "/resources/CardImage/PL!N-bp1-012-P2.webp", "start": 46142168, "end": 46197382}, {"filename": "/resources/CardImage/PL!N-bp1-012-R2.webp", "start": 46197382, "end": 46266444}, {"filename": "/resources/CardImage/PL!N-bp1-012-SEC.webp", "start": 46266444, "end": 46352326}, {"filename": "/resources/CardImage/PL!N-bp1-013-N.webp", "start": 46352326, "end": 46401642}, {"filename": "/resources/CardImage/PL!N-bp1-013-PR.webp", "start": 46401642, "end": 46443522}, {"filename": "/resources/CardImage/PL!N-bp1-014-N.webp", "start": 46443522, "end": 46492250}, {"filename": "/resources/CardImage/PL!N-bp1-015-N.webp", "start": 46492250, "end": 46539808}, {"filename": "/resources/CardImage/PL!N-bp1-016-N.webp", "start": 46539808, "end": 46585604}, {"filename": "/resources/CardImage/PL!N-bp1-017-N.webp", "start": 46585604, "end": 46628812}, {"filename": "/resources/CardImage/PL!N-bp1-017-PR.webp", "start": 46628812, "end": 46674748}, {"filename": "/resources/CardImage/PL!N-bp1-018-N.webp", "start": 46674748, "end": 46724046}, {"filename": "/resources/CardImage/PL!N-bp1-019-N.webp", "start": 46724046, "end": 46770258}, {"filename": "/resources/CardImage/PL!N-bp1-019-PR.webp", "start": 46770258, "end": 46821746}, {"filename": "/resources/CardImage/PL!N-bp1-019-PRprotein.webp", "start": 46821746, "end": 46868568}, {"filename": "/resources/CardImage/PL!N-bp1-020-N.webp", "start": 46868568, "end": 46916416}, {"filename": "/resources/CardImage/PL!N-bp1-021-N.webp", "start": 46916416, "end": 46961178}, {"filename": "/resources/CardImage/PL!N-bp1-022-N.webp", "start": 46961178, "end": 47011514}, {"filename": "/resources/CardImage/PL!N-bp1-023-N.webp", "start": 47011514, "end": 47055600}, {"filename": "/resources/CardImage/PL!N-bp1-024-N.webp", "start": 47055600, "end": 47101498}, {"filename": "/resources/CardImage/PL!N-bp1-024-PR.webp", "start": 47101498, "end": 47152412}, {"filename": "/resources/CardImage/PL!N-bp1-025-L.webp", "start": 47152412, "end": 47200162}, {"filename": "/resources/CardImage/PL!N-bp1-026-L.webp", "start": 47200162, "end": 47240226}, {"filename": "/resources/CardImage/PL!N-bp1-026-SECL.webp", "start": 47240226, "end": 47300168}, {"filename": "/resources/CardImage/PL!N-bp1-027-L.webp", "start": 47300168, "end": 47335166}, {"filename": "/resources/CardImage/PL!N-bp1-028-L.webp", "start": 47335166, "end": 47374130}, {"filename": "/resources/CardImage/PL!N-bp1-029-L.webp", "start": 47374130, "end": 47416868}, {"filename": "/resources/CardImage/PL!N-bp1-030-SECE.webp", "start": 47416868, "end": 47482632}, {"filename": "/resources/CardImage/PL!N-bp1-031-SECE.webp", "start": 47482632, "end": 47548940}, {"filename": "/resources/CardImage/PL!N-bp1-032-SECE.webp", "start": 47548940, "end": 47611578}, {"filename": "/resources/CardImage/PL!N-bp1-033-SECE.webp", "start": 47611578, "end": 47688136}, {"filename": "/resources/CardImage/PL!N-bp1-034-PE.webp", "start": 47688136, "end": 47717366}, {"filename": "/resources/CardImage/PL!N-bp1-035-PE.webp", "start": 47717366, "end": 47746114}, {"filename": "/resources/CardImage/PL!N-bp1-035-PE2.webp", "start": 47746114, "end": 47785296}, {"filename": "/resources/CardImage/PL!N-bp1-036-PE.webp", "start": 47785296, "end": 47817348}, {"filename": "/resources/CardImage/PL!N-bp1-036-PE2.webp", "start": 47817348, "end": 47860292}, {"filename": "/resources/CardImage/PL!N-bp1-037-PE.webp", "start": 47860292, "end": 47893888}, {"filename": "/resources/CardImage/PL!N-bp1-037-PE2.webp", "start": 47893888, "end": 47934416}, {"filename": "/resources/CardImage/PL!N-bp1-038-PE.webp", "start": 47934416, "end": 47962098}, {"filename": "/resources/CardImage/PL!N-bp1-038-PE2.webp", "start": 47962098, "end": 47996300}, {"filename": "/resources/CardImage/PL!N-bp1-E01-RE.webp", "start": 47996300, "end": 48052220}, {"filename": "/resources/CardImage/PL!N-bp1_034-PE2.webp", "start": 48052220, "end": 48091836}, {"filename": "/resources/CardImage/PL!N-bp3-007-PR.webp", "start": 48091836, "end": 48140702}, {"filename": "/resources/CardImage/PL!N-bp3-028-SECL.webp", "start": 48140702, "end": 48188542}, {"filename": "/resources/CardImage/PL!N-bp3-100-LLE.webp", "start": 48188542, "end": 48257408}, {"filename": "/resources/CardImage/PL!N-bp3-200-LLE.webp", "start": 48257408, "end": 48321242}, {"filename": "/resources/CardImage/PL!N-bp3-E01-RE.webp", "start": 48321242, "end": 48366366}, {"filename": "/resources/CardImage/PL!N-bp3-L-025-L.webp", "start": 48366366, "end": 48406646}, {"filename": "/resources/CardImage/PL!N-bp3-L-026-L.webp", "start": 48406646, "end": 48444694}, {"filename": "/resources/CardImage/PL!N-bp3-L-027-L.webp", "start": 48444694, "end": 48485040}, {"filename": "/resources/CardImage/PL!N-bp3-L-028-L.webp", "start": 48485040, "end": 48525634}, {"filename": "/resources/CardImage/PL!N-bp3-L-029-L.webp", "start": 48525634, "end": 48561674}, {"filename": "/resources/CardImage/PL!N-bp3-L-030-L.webp", "start": 48561674, "end": 48603716}, {"filename": "/resources/CardImage/PL!N-bp3-L-031-L.webp", "start": 48603716, "end": 48640910}, {"filename": "/resources/CardImage/PL!N-bp3-L-032-L.webp", "start": 48640910, "end": 48669178}, {"filename": "/resources/CardImage/PL!N-bp3-N-013-N.webp", "start": 48669178, "end": 48718438}, {"filename": "/resources/CardImage/PL!N-bp3-N-014-N.webp", "start": 48718438, "end": 48765550}, {"filename": "/resources/CardImage/PL!N-bp3-N-015-N.webp", "start": 48765550, "end": 48810156}, {"filename": "/resources/CardImage/PL!N-bp3-N-016-N.webp", "start": 48810156, "end": 48852418}, {"filename": "/resources/CardImage/PL!N-bp3-N-017-N.webp", "start": 48852418, "end": 48899758}, {"filename": "/resources/CardImage/PL!N-bp3-N-018-N.webp", "start": 48899758, "end": 48945872}, {"filename": "/resources/CardImage/PL!N-bp3-N-019-N.webp", "start": 48945872, "end": 48991460}, {"filename": "/resources/CardImage/PL!N-bp3-N-020-N.webp", "start": 48991460, "end": 49041106}, {"filename": "/resources/CardImage/PL!N-bp3-N-021-N.webp", "start": 49041106, "end": 49085808}, {"filename": "/resources/CardImage/PL!N-bp3-N-022-N.webp", "start": 49085808, "end": 49128070}, {"filename": "/resources/CardImage/PL!N-bp3-N-023-N.webp", "start": 49128070, "end": 49171024}, {"filename": "/resources/CardImage/PL!N-bp3-N-024-N.webp", "start": 49171024, "end": 49217548}, {"filename": "/resources/CardImage/PL!N-bp3-P-001-P.webp", "start": 49217548, "end": 49276276}, {"filename": "/resources/CardImage/PL!N-bp3-P-002-P.webp", "start": 49276276, "end": 49328126}, {"filename": "/resources/CardImage/PL!N-bp3-P-003-P.webp", "start": 49328126, "end": 49390024}, {"filename": "/resources/CardImage/PL!N-bp3-P-004-P.webp", "start": 49390024, "end": 49455720}, {"filename": "/resources/CardImage/PL!N-bp3-P-005-P.webp", "start": 49455720, "end": 49506692}, {"filename": "/resources/CardImage/PL!N-bp3-P-006-P.webp", "start": 49506692, "end": 49560026}, {"filename": "/resources/CardImage/PL!N-bp3-P-007-P.webp", "start": 49560026, "end": 49611782}, {"filename": "/resources/CardImage/PL!N-bp3-P-008-P.webp", "start": 49611782, "end": 49669928}, {"filename": "/resources/CardImage/PL!N-bp3-P-009-P.webp", "start": 49669928, "end": 49737628}, {"filename": "/resources/CardImage/PL!N-bp3-P-010-P.webp", "start": 49737628, "end": 49790572}, {"filename": "/resources/CardImage/PL!N-bp3-P-011-P.webp", "start": 49790572, "end": 49838358}, {"filename": "/resources/CardImage/PL!N-bp3-P-012-P.webp", "start": 49838358, "end": 49898482}, {"filename": "/resources/CardImage/PL!N-bp3-P2-001-P2.webp", "start": 49898482, "end": 49943022}, {"filename": "/resources/CardImage/PL!N-bp3-P2-005-P2.webp", "start": 49943022, "end": 49997456}, {"filename": "/resources/CardImage/PL!N-bp3-P2-008-P2.webp", "start": 49997456, "end": 50045982}, {"filename": "/resources/CardImage/PL!N-bp3-P2-009-P2.webp", "start": 50045982, "end": 50102420}, {"filename": "/resources/CardImage/PL!N-bp3-PE-037-PE.webp", "start": 50102420, "end": 50134016}, {"filename": "/resources/CardImage/PL!N-bp3-PE-038-PE.webp", "start": 50134016, "end": 50166326}, {"filename": "/resources/CardImage/PL!N-bp3-PE-039-PE.webp", "start": 50166326, "end": 50202986}, {"filename": "/resources/CardImage/PL!N-bp3-PE2-037-PE2.webp", "start": 50202986, "end": 50246276}, {"filename": "/resources/CardImage/PL!N-bp3-PE2-038-PE2.webp", "start": 50246276, "end": 50287204}, {"filename": "/resources/CardImage/PL!N-bp3-PE2-039-PE2.webp", "start": 50287204, "end": 50333638}, {"filename": "/resources/CardImage/PL!N-bp3-PE2-040-PE2.webp", "start": 50333638, "end": 50393206}, {"filename": "/resources/CardImage/PL!N-bp3-R-002-R.webp", "start": 50393206, "end": 50447258}, {"filename": "/resources/CardImage/PL!N-bp3-R-003-R.webp", "start": 50447258, "end": 50505470}, {"filename": "/resources/CardImage/PL!N-bp3-R-004-R.webp", "start": 50505470, "end": 50561464}, {"filename": "/resources/CardImage/PL!N-bp3-R-006-R.webp", "start": 50561464, "end": 50618976}, {"filename": "/resources/CardImage/PL!N-bp3-R-007-R.webp", "start": 50618976, "end": 50676596}, {"filename": "/resources/CardImage/PL!N-bp3-R-010-R.webp", "start": 50676596, "end": 50730682}, {"filename": "/resources/CardImage/PL!N-bp3-R-011-R.webp", "start": 50730682, "end": 50786410}, {"filename": "/resources/CardImage/PL!N-bp3-R-012-R.webp", "start": 50786410, "end": 50842078}, {"filename": "/resources/CardImage/PL!N-bp3-R2-001-R2.webp", "start": 50842078, "end": 50895984}, {"filename": "/resources/CardImage/PL!N-bp3-R2-005-R2.webp", "start": 50895984, "end": 50954234}, {"filename": "/resources/CardImage/PL!N-bp3-R2-008-R2.webp", "start": 50954234, "end": 51010766}, {"filename": "/resources/CardImage/PL!N-bp3-R2-009-R2.webp", "start": 51010766, "end": 51080288}, {"filename": "/resources/CardImage/PL!N-bp3-SEC-001-SEC.webp", "start": 51080288, "end": 51142276}, {"filename": "/resources/CardImage/PL!N-bp3-SEC-005-SEC.webp", "start": 51142276, "end": 51223986}, {"filename": "/resources/CardImage/PL!N-bp3-SEC-008-SEC.webp", "start": 51223986, "end": 51298776}, {"filename": "/resources/CardImage/PL!N-bp3-SEC-009-SEC.webp", "start": 51298776, "end": 51371792}, {"filename": "/resources/CardImage/PL!N-bp3-SECE-033-SECE.webp", "start": 51371792, "end": 51413076}, {"filename": "/resources/CardImage/PL!N-bp3-SECE-034-SECE.webp", "start": 51413076, "end": 51469490}, {"filename": "/resources/CardImage/PL!N-bp3-SECE-035-SECE.webp", "start": 51469490, "end": 51517132}, {"filename": "/resources/CardImage/PL!N-bp3-SECE-036-SECE.webp", "start": 51517132, "end": 51567848}, {"filename": "/resources/CardImage/PL!N-bp4-001-P.webp", "start": 51567848, "end": 51625882}, {"filename": "/resources/CardImage/PL!N-bp4-001-R.webp", "start": 51625882, "end": 51669882}, {"filename": "/resources/CardImage/PL!N-bp4-002-P.webp", "start": 51669882, "end": 51724842}, {"filename": "/resources/CardImage/PL!N-bp4-002-R.webp", "start": 51724842, "end": 51769868}, {"filename": "/resources/CardImage/PL!N-bp4-003-P.webp", "start": 51769868, "end": 51826914}, {"filename": "/resources/CardImage/PL!N-bp4-003-R.webp", "start": 51826914, "end": 51870384}, {"filename": "/resources/CardImage/PL!N-bp4-004-P.webp", "start": 51870384, "end": 51925188}, {"filename": "/resources/CardImage/PL!N-bp4-004-P2.webp", "start": 51925188, "end": 51978220}, {"filename": "/resources/CardImage/PL!N-bp4-004-R2.webp", "start": 51978220, "end": 52022534}, {"filename": "/resources/CardImage/PL!N-bp4-004-SEC.webp", "start": 52022534, "end": 52083552}, {"filename": "/resources/CardImage/PL!N-bp4-005-P.webp", "start": 52083552, "end": 52142222}, {"filename": "/resources/CardImage/PL!N-bp4-005-R.webp", "start": 52142222, "end": 52187836}, {"filename": "/resources/CardImage/PL!N-bp4-006-P.webp", "start": 52187836, "end": 52243268}, {"filename": "/resources/CardImage/PL!N-bp4-006-R.webp", "start": 52243268, "end": 52293194}, {"filename": "/resources/CardImage/PL!N-bp4-007-P.webp", "start": 52293194, "end": 52352166}, {"filename": "/resources/CardImage/PL!N-bp4-007-P2.webp", "start": 52352166, "end": 52407378}, {"filename": "/resources/CardImage/PL!N-bp4-007-R2.webp", "start": 52407378, "end": 52459188}, {"filename": "/resources/CardImage/PL!N-bp4-007-SEC.webp", "start": 52459188, "end": 52522272}, {"filename": "/resources/CardImage/PL!N-bp4-008-P.webp", "start": 52522272, "end": 52575856}, {"filename": "/resources/CardImage/PL!N-bp4-008-R.webp", "start": 52575856, "end": 52618424}, {"filename": "/resources/CardImage/PL!N-bp4-009-P.webp", "start": 52618424, "end": 52679216}, {"filename": "/resources/CardImage/PL!N-bp4-009-R.webp", "start": 52679216, "end": 52725340}, {"filename": "/resources/CardImage/PL!N-bp4-010-P.webp", "start": 52725340, "end": 52782596}, {"filename": "/resources/CardImage/PL!N-bp4-010-P2.webp", "start": 52782596, "end": 52827468}, {"filename": "/resources/CardImage/PL!N-bp4-010-R2.webp", "start": 52827468, "end": 52872004}, {"filename": "/resources/CardImage/PL!N-bp4-010-SEC.webp", "start": 52872004, "end": 52922004}, {"filename": "/resources/CardImage/PL!N-bp4-011-P.webp", "start": 52922004, "end": 52981250}, {"filename": "/resources/CardImage/PL!N-bp4-011-P2.webp", "start": 52981250, "end": 53020628}, {"filename": "/resources/CardImage/PL!N-bp4-011-R2.webp", "start": 53020628, "end": 53065386}, {"filename": "/resources/CardImage/PL!N-bp4-011-SEC.webp", "start": 53065386, "end": 53127618}, {"filename": "/resources/CardImage/PL!N-bp4-012-P.webp", "start": 53127618, "end": 53184798}, {"filename": "/resources/CardImage/PL!N-bp4-012-R.webp", "start": 53184798, "end": 53229420}, {"filename": "/resources/CardImage/PL!N-bp4-013-N.webp", "start": 53229420, "end": 53266600}, {"filename": "/resources/CardImage/PL!N-bp4-014-N.webp", "start": 53266600, "end": 53300294}, {"filename": "/resources/CardImage/PL!N-bp4-015-N.webp", "start": 53300294, "end": 53335700}, {"filename": "/resources/CardImage/PL!N-bp4-016-N.webp", "start": 53335700, "end": 53373014}, {"filename": "/resources/CardImage/PL!N-bp4-017-N.webp", "start": 53373014, "end": 53410460}, {"filename": "/resources/CardImage/PL!N-bp4-018-N.webp", "start": 53410460, "end": 53451230}, {"filename": "/resources/CardImage/PL!N-bp4-019-N.webp", "start": 53451230, "end": 53487068}, {"filename": "/resources/CardImage/PL!N-bp4-020-N.webp", "start": 53487068, "end": 53520590}, {"filename": "/resources/CardImage/PL!N-bp4-021-N.webp", "start": 53520590, "end": 53558306}, {"filename": "/resources/CardImage/PL!N-bp4-022-N.webp", "start": 53558306, "end": 53594416}, {"filename": "/resources/CardImage/PL!N-bp4-023-N.webp", "start": 53594416, "end": 53628226}, {"filename": "/resources/CardImage/PL!N-bp4-024-N.webp", "start": 53628226, "end": 53665476}, {"filename": "/resources/CardImage/PL!N-bp4-025-L.webp", "start": 53665476, "end": 53709540}, {"filename": "/resources/CardImage/PL!N-bp4-026-L.webp", "start": 53709540, "end": 53747980}, {"filename": "/resources/CardImage/PL!N-bp4-027-L.webp", "start": 53747980, "end": 53786364}, {"filename": "/resources/CardImage/PL!N-bp4-028-L.webp", "start": 53786364, "end": 53825480}, {"filename": "/resources/CardImage/PL!N-bp4-029-L.webp", "start": 53825480, "end": 53860084}, {"filename": "/resources/CardImage/PL!N-bp4-030-L.webp", "start": 53860084, "end": 53896480}, {"filename": "/resources/CardImage/PL!N-bp4-031-L.webp", "start": 53896480, "end": 53935022}, {"filename": "/resources/CardImage/PL!N-bp4-032-L.webp", "start": 53935022, "end": 53973876}, {"filename": "/resources/CardImage/PL!N-bp4-032-L2.webp", "start": 53973876, "end": 54030760}, {"filename": "/resources/CardImage/PL!N-bp4-033-SECE.webp", "start": 54030760, "end": 54083144}, {"filename": "/resources/CardImage/PL!N-bp4-034-SECE.webp", "start": 54083144, "end": 54138340}, {"filename": "/resources/CardImage/PL!N-bp4-035-SECE.webp", "start": 54138340, "end": 54177382}, {"filename": "/resources/CardImage/PL!N-bp4-036-SECE.webp", "start": 54177382, "end": 54228218}, {"filename": "/resources/CardImage/PL!N-bp4-037-SECE.webp", "start": 54228218, "end": 54276858}, {"filename": "/resources/CardImage/PL!N-bp4-038-PE.webp", "start": 54276858, "end": 54304140}, {"filename": "/resources/CardImage/PL!N-bp4-038-PE2.webp", "start": 54304140, "end": 54338918}, {"filename": "/resources/CardImage/PL!N-bp4-039-PE.webp", "start": 54338918, "end": 54363944}, {"filename": "/resources/CardImage/PL!N-bp4-039-PE2.webp", "start": 54363944, "end": 54395636}, {"filename": "/resources/CardImage/PL!N-bp4-040-PE.webp", "start": 54395636, "end": 54418562}, {"filename": "/resources/CardImage/PL!N-bp4-040-PE2.webp", "start": 54418562, "end": 54448092}, {"filename": "/resources/CardImage/PL!N-bp4-041-PE.webp", "start": 54448092, "end": 54473848}, {"filename": "/resources/CardImage/PL!N-bp4-041-PE2.webp", "start": 54473848, "end": 54507448}, {"filename": "/resources/CardImage/PL!N-bp4-100-LLE.webp", "start": 54507448, "end": 54582838}, {"filename": "/resources/CardImage/PL!N-bp4-200-LLE.webp", "start": 54582838, "end": 54662360}, {"filename": "/resources/CardImage/PL!N-bp4-E01-RE.webp", "start": 54662360, "end": 54721194}, {"filename": "/resources/CardImage/PL!N-bp5-001-AR.webp", "start": 54721194, "end": 54781728}, {"filename": "/resources/CardImage/PL!N-bp5-001-P.webp", "start": 54781728, "end": 54832354}, {"filename": "/resources/CardImage/PL!N-bp5-001-R2.webp", "start": 54832354, "end": 54895538}, {"filename": "/resources/CardImage/PL!N-bp5-001-SEC.webp", "start": 54895538, "end": 54952522}, {"filename": "/resources/CardImage/PL!N-bp5-002-AR.webp", "start": 54952522, "end": 55012398}, {"filename": "/resources/CardImage/PL!N-bp5-002-P.webp", "start": 55012398, "end": 55064426}, {"filename": "/resources/CardImage/PL!N-bp5-002-R.webp", "start": 55064426, "end": 55128166}, {"filename": "/resources/CardImage/PL!N-bp5-003-AR.webp", "start": 55128166, "end": 55189000}, {"filename": "/resources/CardImage/PL!N-bp5-003-P.webp", "start": 55189000, "end": 55242430}, {"filename": "/resources/CardImage/PL!N-bp5-003-R.webp", "start": 55242430, "end": 55305318}, {"filename": "/resources/CardImage/PL!N-bp5-004-AR.webp", "start": 55305318, "end": 55364070}, {"filename": "/resources/CardImage/PL!N-bp5-004-P.webp", "start": 55364070, "end": 55412084}, {"filename": "/resources/CardImage/PL!N-bp5-004-R.webp", "start": 55412084, "end": 55473166}, {"filename": "/resources/CardImage/PL!N-bp5-005-AR.webp", "start": 55473166, "end": 55534670}, {"filename": "/resources/CardImage/PL!N-bp5-005-P.webp", "start": 55534670, "end": 55590412}, {"filename": "/resources/CardImage/PL!N-bp5-005-R2.webp", "start": 55590412, "end": 55653748}, {"filename": "/resources/CardImage/PL!N-bp5-005-SEC.webp", "start": 55653748, "end": 55717550}, {"filename": "/resources/CardImage/PL!N-bp5-006-AR.webp", "start": 55717550, "end": 55781186}, {"filename": "/resources/CardImage/PL!N-bp5-006-P.webp", "start": 55781186, "end": 55831978}, {"filename": "/resources/CardImage/PL!N-bp5-006-R.webp", "start": 55831978, "end": 55898164}, {"filename": "/resources/CardImage/PL!N-bp5-007-AR.webp", "start": 55898164, "end": 55961970}, {"filename": "/resources/CardImage/PL!N-bp5-007-P.webp", "start": 55961970, "end": 56008740}, {"filename": "/resources/CardImage/PL!N-bp5-007-R2.webp", "start": 56008740, "end": 56071316}, {"filename": "/resources/CardImage/PL!N-bp5-007-SEC.webp", "start": 56071316, "end": 56126408}, {"filename": "/resources/CardImage/PL!N-bp5-008-AR.webp", "start": 56126408, "end": 56186342}, {"filename": "/resources/CardImage/PL!N-bp5-008-P.webp", "start": 56186342, "end": 56237716}, {"filename": "/resources/CardImage/PL!N-bp5-008-R.webp", "start": 56237716, "end": 56299410}, {"filename": "/resources/CardImage/PL!N-bp5-009-AR.webp", "start": 56299410, "end": 56362498}, {"filename": "/resources/CardImage/PL!N-bp5-009-P.webp", "start": 56362498, "end": 56407932}, {"filename": "/resources/CardImage/PL!N-bp5-009-R.webp", "start": 56407932, "end": 56470278}, {"filename": "/resources/CardImage/PL!N-bp5-010-AR.webp", "start": 56470278, "end": 56529252}, {"filename": "/resources/CardImage/PL!N-bp5-010-P.webp", "start": 56529252, "end": 56576724}, {"filename": "/resources/CardImage/PL!N-bp5-010-R.webp", "start": 56576724, "end": 56640598}, {"filename": "/resources/CardImage/PL!N-bp5-011-AR.webp", "start": 56640598, "end": 56700682}, {"filename": "/resources/CardImage/PL!N-bp5-011-P.webp", "start": 56700682, "end": 56753700}, {"filename": "/resources/CardImage/PL!N-bp5-011-R.webp", "start": 56753700, "end": 56816878}, {"filename": "/resources/CardImage/PL!N-bp5-012-AR.webp", "start": 56816878, "end": 56879834}, {"filename": "/resources/CardImage/PL!N-bp5-012-P.webp", "start": 56879834, "end": 56938624}, {"filename": "/resources/CardImage/PL!N-bp5-012-R2.webp", "start": 56938624, "end": 57002714}, {"filename": "/resources/CardImage/PL!N-bp5-012-SEC.webp", "start": 57002714, "end": 57075772}, {"filename": "/resources/CardImage/PL!N-bp5-013-N.webp", "start": 57075772, "end": 57130094}, {"filename": "/resources/CardImage/PL!N-bp5-014-N.webp", "start": 57130094, "end": 57180912}, {"filename": "/resources/CardImage/PL!N-bp5-015-N.webp", "start": 57180912, "end": 57234538}, {"filename": "/resources/CardImage/PL!N-bp5-016-N.webp", "start": 57234538, "end": 57285014}, {"filename": "/resources/CardImage/PL!N-bp5-017-N.webp", "start": 57285014, "end": 57338044}, {"filename": "/resources/CardImage/PL!N-bp5-018-N.webp", "start": 57338044, "end": 57391750}, {"filename": "/resources/CardImage/PL!N-bp5-019-N.webp", "start": 57391750, "end": 57449154}, {"filename": "/resources/CardImage/PL!N-bp5-020-N.webp", "start": 57449154, "end": 57501430}, {"filename": "/resources/CardImage/PL!N-bp5-021-N.webp", "start": 57501430, "end": 57553006}, {"filename": "/resources/CardImage/PL!N-bp5-022-N.webp", "start": 57553006, "end": 57607272}, {"filename": "/resources/CardImage/PL!N-bp5-023-N.webp", "start": 57607272, "end": 57657162}, {"filename": "/resources/CardImage/PL!N-bp5-024-N.webp", "start": 57657162, "end": 57709254}, {"filename": "/resources/CardImage/PL!N-bp5-025-L.webp", "start": 57709254, "end": 57748876}, {"filename": "/resources/CardImage/PL!N-bp5-026-L.webp", "start": 57748876, "end": 57795296}, {"filename": "/resources/CardImage/PL!N-bp5-027-L.webp", "start": 57795296, "end": 57838908}, {"filename": "/resources/CardImage/PL!N-bp5-028-L.webp", "start": 57838908, "end": 57870246}, {"filename": "/resources/CardImage/PL!N-bp5-029-L.webp", "start": 57870246, "end": 57910612}, {"filename": "/resources/CardImage/PL!N-bp5-030-L.webp", "start": 57910612, "end": 57948310}, {"filename": "/resources/CardImage/PL!N-bp5-E01-PE.webp", "start": 57948310, "end": 57998838}, {"filename": "/resources/CardImage/PL!N-bp5-E01-SECE.webp", "start": 57998838, "end": 58048394}, {"filename": "/resources/CardImage/PL!N-bp5-E015-LLE.webp", "start": 58048394, "end": 58120246}, {"filename": "/resources/CardImage/PL!N-bp5-E02-PE.webp", "start": 58120246, "end": 58175322}, {"filename": "/resources/CardImage/PL!N-bp5-E03-PE.webp", "start": 58175322, "end": 58229888}, {"filename": "/resources/CardImage/PL!N-bp5-E04-PE.webp", "start": 58229888, "end": 58283648}, {"filename": "/resources/CardImage/PL!N-bp5-E05-PE.webp", "start": 58283648, "end": 58338538}, {"filename": "/resources/CardImage/PL!N-bp5-E05-SECE.webp", "start": 58338538, "end": 58393698}, {"filename": "/resources/CardImage/PL!N-bp5-E06-PE.webp", "start": 58393698, "end": 58445040}, {"filename": "/resources/CardImage/PL!N-bp5-E07-PE.webp", "start": 58445040, "end": 58499264}, {"filename": "/resources/CardImage/PL!N-bp5-E07-SECE.webp", "start": 58499264, "end": 58546440}, {"filename": "/resources/CardImage/PL!N-bp5-E08-PE.webp", "start": 58546440, "end": 58599624}, {"filename": "/resources/CardImage/PL!N-bp5-E09-PE.webp", "start": 58599624, "end": 58650140}, {"filename": "/resources/CardImage/PL!N-bp5-E10-PE.webp", "start": 58650140, "end": 58697156}, {"filename": "/resources/CardImage/PL!N-bp5-E11-PE.webp", "start": 58697156, "end": 58744384}, {"filename": "/resources/CardImage/PL!N-bp5-E12-PE.webp", "start": 58744384, "end": 58795138}, {"filename": "/resources/CardImage/PL!N-bp5-E12-SECE.webp", "start": 58795138, "end": 58858160}, {"filename": "/resources/CardImage/PL!N-bp5-E13-PE.webp", "start": 58858160, "end": 58907684}, {"filename": "/resources/CardImage/PL!N-bp5-E14-SECE.webp", "start": 58907684, "end": 58951364}, {"filename": "/resources/CardImage/PL!N-bp7-001-P.webp", "start": 58951364, "end": 59013830}, {"filename": "/resources/CardImage/PL!N-bp7-001-R.webp", "start": 59013830, "end": 59078930}, {"filename": "/resources/CardImage/PL!N-bp7-002-P.webp", "start": 59078930, "end": 59152100}, {"filename": "/resources/CardImage/PL!N-bp7-002-R.webp", "start": 59152100, "end": 59213768}, {"filename": "/resources/CardImage/PL!N-bp7-003-P.webp", "start": 59213768, "end": 59283960}, {"filename": "/resources/CardImage/PL!N-bp7-003-P2.webp", "start": 59283960, "end": 59362752}, {"filename": "/resources/CardImage/PL!N-bp7-003-R2.webp", "start": 59362752, "end": 59432156}, {"filename": "/resources/CardImage/PL!N-bp7-003-SEC.webp", "start": 59432156, "end": 59503210}, {"filename": "/resources/CardImage/PL!N-bp7-004-P.webp", "start": 59503210, "end": 59568406}, {"filename": "/resources/CardImage/PL!N-bp7-004-R.webp", "start": 59568406, "end": 59637816}, {"filename": "/resources/CardImage/PL!N-bp7-005-P.webp", "start": 59637816, "end": 59705516}, {"filename": "/resources/CardImage/PL!N-bp7-005-R.webp", "start": 59705516, "end": 59777834}, {"filename": "/resources/CardImage/PL!N-bp7-006-P.webp", "start": 59777834, "end": 59848946}, {"filename": "/resources/CardImage/PL!N-bp7-006-P2.webp", "start": 59848946, "end": 59920560}, {"filename": "/resources/CardImage/PL!N-bp7-006-R2.webp", "start": 59920560, "end": 59994076}, {"filename": "/resources/CardImage/PL!N-bp7-006-SEC.webp", "start": 59994076, "end": 60057412}, {"filename": "/resources/CardImage/PL!N-bp7-007-P.webp", "start": 60057412, "end": 60125688}, {"filename": "/resources/CardImage/PL!N-bp7-007-P2.webp", "start": 60125688, "end": 60194770}, {"filename": "/resources/CardImage/PL!N-bp7-007-R2.webp", "start": 60194770, "end": 60267634}, {"filename": "/resources/CardImage/PL!N-bp7-007-SEC.webp", "start": 60267634, "end": 60349778}, {"filename": "/resources/CardImage/PL!N-bp7-008-P.webp", "start": 60349778, "end": 60409566}, {"filename": "/resources/CardImage/PL!N-bp7-008-R.webp", "start": 60409566, "end": 60477590}, {"filename": "/resources/CardImage/PL!N-bp7-009-P.webp", "start": 60477590, "end": 60543426}, {"filename": "/resources/CardImage/PL!N-bp7-009-R.webp", "start": 60543426, "end": 60614804}, {"filename": "/resources/CardImage/PL!N-bp7-010-P.webp", "start": 60614804, "end": 60686680}, {"filename": "/resources/CardImage/PL!N-bp7-010-R.webp", "start": 60686680, "end": 60755264}, {"filename": "/resources/CardImage/PL!N-bp7-011-P.webp", "start": 60755264, "end": 60819546}, {"filename": "/resources/CardImage/PL!N-bp7-011-P2.webp", "start": 60819546, "end": 60886466}, {"filename": "/resources/CardImage/PL!N-bp7-011-R2.webp", "start": 60886466, "end": 60954704}, {"filename": "/resources/CardImage/PL!N-bp7-011-SEC.webp", "start": 60954704, "end": 61032828}, {"filename": "/resources/CardImage/PL!N-bp7-012-P.webp", "start": 61032828, "end": 61090570}, {"filename": "/resources/CardImage/PL!N-bp7-012-R.webp", "start": 61090570, "end": 61159934}, {"filename": "/resources/CardImage/PL!N-bp7-013-N.webp", "start": 61159934, "end": 61212698}, {"filename": "/resources/CardImage/PL!N-bp7-014-N.webp", "start": 61212698, "end": 61266626}, {"filename": "/resources/CardImage/PL!N-bp7-015-N.webp", "start": 61266626, "end": 61319824}, {"filename": "/resources/CardImage/PL!N-bp7-016-N.webp", "start": 61319824, "end": 61373084}, {"filename": "/resources/CardImage/PL!N-bp7-017-N.webp", "start": 61373084, "end": 61427366}, {"filename": "/resources/CardImage/PL!N-bp7-018-N.webp", "start": 61427366, "end": 61487044}, {"filename": "/resources/CardImage/PL!N-bp7-019-N.webp", "start": 61487044, "end": 61546676}, {"filename": "/resources/CardImage/PL!N-bp7-020-N.webp", "start": 61546676, "end": 61601600}, {"filename": "/resources/CardImage/PL!N-bp7-021-N.webp", "start": 61601600, "end": 61656246}, {"filename": "/resources/CardImage/PL!N-bp7-022-N.webp", "start": 61656246, "end": 61709658}, {"filename": "/resources/CardImage/PL!N-bp7-023-N.webp", "start": 61709658, "end": 61762844}, {"filename": "/resources/CardImage/PL!N-bp7-024-N.webp", "start": 61762844, "end": 61818292}, {"filename": "/resources/CardImage/PL!N-bp7-025-L.webp", "start": 61818292, "end": 61864670}, {"filename": "/resources/CardImage/PL!N-bp7-025-SECL.webp", "start": 61864670, "end": 61936888}, {"filename": "/resources/CardImage/PL!N-bp7-026-L.webp", "start": 61936888, "end": 61980322}, {"filename": "/resources/CardImage/PL!N-bp7-026-SECL.webp", "start": 61980322, "end": 62070088}, {"filename": "/resources/CardImage/PL!N-bp7-027-L.webp", "start": 62070088, "end": 62109654}, {"filename": "/resources/CardImage/PL!N-bp7-028-L.webp", "start": 62109654, "end": 62149920}, {"filename": "/resources/CardImage/PL!N-bp7-029-L.webp", "start": 62149920, "end": 62181020}, {"filename": "/resources/CardImage/PL!N-bp7-030-L.webp", "start": 62181020, "end": 62206838}, {"filename": "/resources/CardImage/PL!N-bp7-031-L.webp", "start": 62206838, "end": 62241574}, {"filename": "/resources/CardImage/PL!N-bp7-E01-SECE.webp", "start": 62241574, "end": 62300036}, {"filename": "/resources/CardImage/PL!N-bp7-E02-SECE.webp", "start": 62300036, "end": 62345520}, {"filename": "/resources/CardImage/PL!N-bp7-E03-SECE.webp", "start": 62345520, "end": 62415086}, {"filename": "/resources/CardImage/PL!N-bp7-E04-SECE.webp", "start": 62415086, "end": 62481116}, {"filename": "/resources/CardImage/PL!N-bp7-E05-PE.webp", "start": 62481116, "end": 62526002}, {"filename": "/resources/CardImage/PL!N-bp7-E05-PE2.webp", "start": 62526002, "end": 62577192}, {"filename": "/resources/CardImage/PL!N-bp7-E06-PE.webp", "start": 62577192, "end": 62625184}, {"filename": "/resources/CardImage/PL!N-bp7-E06-PE2.webp", "start": 62625184, "end": 62677226}, {"filename": "/resources/CardImage/PL!N-bp7-E07-PE.webp", "start": 62677226, "end": 62718876}, {"filename": "/resources/CardImage/PL!N-bp7-E07-PE2.webp", "start": 62718876, "end": 62766444}, {"filename": "/resources/CardImage/PL!N-bp7-E08-PE.webp", "start": 62766444, "end": 62803878}, {"filename": "/resources/CardImage/PL!N-bp7-E08-PE2.webp", "start": 62803878, "end": 62850098}, {"filename": "/resources/CardImage/PL!N-pb1-001-P2.webp", "start": 62850098, "end": 62912478}, {"filename": "/resources/CardImage/PL!N-pb1-001-R.webp", "start": 62912478, "end": 62972596}, {"filename": "/resources/CardImage/PL!N-pb1-002-P2.webp", "start": 62972596, "end": 63048166}, {"filename": "/resources/CardImage/PL!N-pb1-002-R.webp", "start": 63048166, "end": 63108980}, {"filename": "/resources/CardImage/PL!N-pb1-003-P2.webp", "start": 63108980, "end": 63178010}, {"filename": "/resources/CardImage/PL!N-pb1-003-R.webp", "start": 63178010, "end": 63230650}, {"filename": "/resources/CardImage/PL!N-pb1-004-P2.webp", "start": 63230650, "end": 63310290}, {"filename": "/resources/CardImage/PL!N-pb1-004-R.webp", "start": 63310290, "end": 63369820}, {"filename": "/resources/CardImage/PL!N-pb1-005-P2.webp", "start": 63369820, "end": 63424954}, {"filename": "/resources/CardImage/PL!N-pb1-005-R.webp", "start": 63424954, "end": 63477910}, {"filename": "/resources/CardImage/PL!N-pb1-006-P2.webp", "start": 63477910, "end": 63534438}, {"filename": "/resources/CardImage/PL!N-pb1-006-R.webp", "start": 63534438, "end": 63593064}, {"filename": "/resources/CardImage/PL!N-pb1-007-P2.webp", "start": 63593064, "end": 63658816}, {"filename": "/resources/CardImage/PL!N-pb1-007-R.webp", "start": 63658816, "end": 63719118}, {"filename": "/resources/CardImage/PL!N-pb1-008-P2.webp", "start": 63719118, "end": 63786826}, {"filename": "/resources/CardImage/PL!N-pb1-008-R.webp", "start": 63786826, "end": 63849034}, {"filename": "/resources/CardImage/PL!N-pb1-009-P2.webp", "start": 63849034, "end": 63913968}, {"filename": "/resources/CardImage/PL!N-pb1-009-R.webp", "start": 63913968, "end": 63971466}, {"filename": "/resources/CardImage/PL!N-pb1-010-P2.webp", "start": 63971466, "end": 64034220}, {"filename": "/resources/CardImage/PL!N-pb1-010-R.webp", "start": 64034220, "end": 64091062}, {"filename": "/resources/CardImage/PL!N-pb1-011-P2.webp", "start": 64091062, "end": 64152848}, {"filename": "/resources/CardImage/PL!N-pb1-011-R.webp", "start": 64152848, "end": 64209936}, {"filename": "/resources/CardImage/PL!N-pb1-012-P2.webp", "start": 64209936, "end": 64285004}, {"filename": "/resources/CardImage/PL!N-pb1-012-R.webp", "start": 64285004, "end": 64343220}, {"filename": "/resources/CardImage/PL!N-pb1-013-P2.webp", "start": 64343220, "end": 64392616}, {"filename": "/resources/CardImage/PL!N-pb1-013-R.webp", "start": 64392616, "end": 64448326}, {"filename": "/resources/CardImage/PL!N-pb1-014-P2.webp", "start": 64448326, "end": 64503540}, {"filename": "/resources/CardImage/PL!N-pb1-014-R.webp", "start": 64503540, "end": 64558362}, {"filename": "/resources/CardImage/PL!N-pb1-015-P2.webp", "start": 64558362, "end": 64609430}, {"filename": "/resources/CardImage/PL!N-pb1-015-R.webp", "start": 64609430, "end": 64666410}, {"filename": "/resources/CardImage/PL!N-pb1-016-P2.webp", "start": 64666410, "end": 64712902}, {"filename": "/resources/CardImage/PL!N-pb1-016-R.webp", "start": 64712902, "end": 64768022}, {"filename": "/resources/CardImage/PL!N-pb1-017-P2.webp", "start": 64768022, "end": 64820956}, {"filename": "/resources/CardImage/PL!N-pb1-017-R.webp", "start": 64820956, "end": 64877156}, {"filename": "/resources/CardImage/PL!N-pb1-018-P2.webp", "start": 64877156, "end": 64929350}, {"filename": "/resources/CardImage/PL!N-pb1-018-R.webp", "start": 64929350, "end": 64987894}, {"filename": "/resources/CardImage/PL!N-pb1-019-P2.webp", "start": 64987894, "end": 65036938}, {"filename": "/resources/CardImage/PL!N-pb1-019-R.webp", "start": 65036938, "end": 65101248}, {"filename": "/resources/CardImage/PL!N-pb1-020-P2.webp", "start": 65101248, "end": 65154418}, {"filename": "/resources/CardImage/PL!N-pb1-020-R.webp", "start": 65154418, "end": 65207390}, {"filename": "/resources/CardImage/PL!N-pb1-021-P2.webp", "start": 65207390, "end": 65259658}, {"filename": "/resources/CardImage/PL!N-pb1-021-R.webp", "start": 65259658, "end": 65315526}, {"filename": "/resources/CardImage/PL!N-pb1-022-P2.webp", "start": 65315526, "end": 65364900}, {"filename": "/resources/CardImage/PL!N-pb1-022-R.webp", "start": 65364900, "end": 65423468}, {"filename": "/resources/CardImage/PL!N-pb1-023-P2.webp", "start": 65423468, "end": 65475650}, {"filename": "/resources/CardImage/PL!N-pb1-023-R.webp", "start": 65475650, "end": 65532548}, {"filename": "/resources/CardImage/PL!N-pb1-024-P2.webp", "start": 65532548, "end": 65583074}, {"filename": "/resources/CardImage/PL!N-pb1-024-R.webp", "start": 65583074, "end": 65635770}, {"filename": "/resources/CardImage/PL!N-pb1-025-N.webp", "start": 65635770, "end": 65671478}, {"filename": "/resources/CardImage/PL!N-pb1-026-N.webp", "start": 65671478, "end": 65708638}, {"filename": "/resources/CardImage/PL!N-pb1-027-N.webp", "start": 65708638, "end": 65744434}, {"filename": "/resources/CardImage/PL!N-pb1-028-N.webp", "start": 65744434, "end": 65781536}, {"filename": "/resources/CardImage/PL!N-pb1-029-N.webp", "start": 65781536, "end": 65820064}, {"filename": "/resources/CardImage/PL!N-pb1-030-N.webp", "start": 65820064, "end": 65856948}, {"filename": "/resources/CardImage/PL!N-pb1-031-N.webp", "start": 65856948, "end": 65892240}, {"filename": "/resources/CardImage/PL!N-pb1-032-N.webp", "start": 65892240, "end": 65929130}, {"filename": "/resources/CardImage/PL!N-pb1-033-N.webp", "start": 65929130, "end": 65963924}, {"filename": "/resources/CardImage/PL!N-pb1-034-N.webp", "start": 65963924, "end": 66002010}, {"filename": "/resources/CardImage/PL!N-pb1-035-N.webp", "start": 66002010, "end": 66041166}, {"filename": "/resources/CardImage/PL!N-pb1-036-N.webp", "start": 66041166, "end": 66081652}, {"filename": "/resources/CardImage/PL!N-pb1-037-L.webp", "start": 66081652, "end": 66116746}, {"filename": "/resources/CardImage/PL!N-pb1-038-L.webp", "start": 66116746, "end": 66152160}, {"filename": "/resources/CardImage/PL!N-pb1-039-L.webp", "start": 66152160, "end": 66191026}, {"filename": "/resources/CardImage/PL!N-pb1-040-L.webp", "start": 66191026, "end": 66229384}, {"filename": "/resources/CardImage/PL!N-pb1-041-L.webp", "start": 66229384, "end": 66264714}, {"filename": "/resources/CardImage/PL!N-pb1-041-L2.webp", "start": 66264714, "end": 66320710}, {"filename": "/resources/CardImage/PL!N-pb1-042-L.webp", "start": 66320710, "end": 66357296}, {"filename": "/resources/CardImage/PL!N-pb1-043-PE.webp", "start": 66357296, "end": 66401704}, {"filename": "/resources/CardImage/PL!N-pb1-043-PE2.webp", "start": 66401704, "end": 66465276}, {"filename": "/resources/CardImage/PL!N-pb1-044-PE.webp", "start": 66465276, "end": 66505246}, {"filename": "/resources/CardImage/PL!N-pb1-044-PE2.webp", "start": 66505246, "end": 66568534}, {"filename": "/resources/CardImage/PL!N-pb1-045-PE.webp", "start": 66568534, "end": 66617860}, {"filename": "/resources/CardImage/PL!N-pb1-045-PE2.webp", "start": 66617860, "end": 66680216}, {"filename": "/resources/CardImage/PL!N-pb1-046-PE.webp", "start": 66680216, "end": 66721328}, {"filename": "/resources/CardImage/PL!N-pb1-046-PE2.webp", "start": 66721328, "end": 66783018}, {"filename": "/resources/CardImage/PL!N-pb1-047-PE.webp", "start": 66783018, "end": 66828718}, {"filename": "/resources/CardImage/PL!N-pb1-047-PE2.webp", "start": 66828718, "end": 66891468}, {"filename": "/resources/CardImage/PL!N-pb1-048-PE.webp", "start": 66891468, "end": 66938336}, {"filename": "/resources/CardImage/PL!N-pb1-048-PE2.webp", "start": 66938336, "end": 67000504}, {"filename": "/resources/CardImage/PL!N-pb1-049-PE.webp", "start": 67000504, "end": 67051468}, {"filename": "/resources/CardImage/PL!N-pb1-049-PE2.webp", "start": 67051468, "end": 67114470}, {"filename": "/resources/CardImage/PL!N-pb1-050-PE.webp", "start": 67114470, "end": 67156846}, {"filename": "/resources/CardImage/PL!N-pb1-050-PE2.webp", "start": 67156846, "end": 67217370}, {"filename": "/resources/CardImage/PL!N-pb1-051-PE.webp", "start": 67217370, "end": 67258302}, {"filename": "/resources/CardImage/PL!N-pb1-051-PE2.webp", "start": 67258302, "end": 67319798}, {"filename": "/resources/CardImage/PL!N-pb1-052-PE.webp", "start": 67319798, "end": 67355916}, {"filename": "/resources/CardImage/PL!N-pb1-052-PE2.webp", "start": 67355916, "end": 67418872}, {"filename": "/resources/CardImage/PL!N-pb1-053-PE.webp", "start": 67418872, "end": 67453878}, {"filename": "/resources/CardImage/PL!N-pb1-053-PE2.webp", "start": 67453878, "end": 67516758}, {"filename": "/resources/CardImage/PL!N-pb1-054-PE.webp", "start": 67516758, "end": 67553008}, {"filename": "/resources/CardImage/PL!N-pb1-054-PE2.webp", "start": 67553008, "end": 67617304}, {"filename": "/resources/CardImage/PL!N-pb1-055-PE2.webp", "start": 67617304, "end": 67662174}, {"filename": "/resources/CardImage/PL!N-pb1-056-SRE.webp", "start": 67662174, "end": 67716788}, {"filename": "/resources/CardImage/PL!N-pb1-057-SRE.webp", "start": 67716788, "end": 67769664}, {"filename": "/resources/CardImage/PL!N-pb1-058-SRE.webp", "start": 67769664, "end": 67828232}, {"filename": "/resources/CardImage/PL!N-pb1-059-SRE.webp", "start": 67828232, "end": 67880508}, {"filename": "/resources/CardImage/PL!N-pb1-060-SRE.webp", "start": 67880508, "end": 67928310}, {"filename": "/resources/CardImage/PL!N-pb1-061-SRE.webp", "start": 67928310, "end": 67983310}, {"filename": "/resources/CardImage/PL!N-pb1-062-SRE.webp", "start": 67983310, "end": 68035848}, {"filename": "/resources/CardImage/PL!N-pb1-063-SRE.webp", "start": 68035848, "end": 68090618}, {"filename": "/resources/CardImage/PL!N-pb1-064-SRE.webp", "start": 68090618, "end": 68146916}, {"filename": "/resources/CardImage/PL!N-pb1-065-SRE.webp", "start": 68146916, "end": 68201098}, {"filename": "/resources/CardImage/PL!N-pb1-066-SRE.webp", "start": 68201098, "end": 68254104}, {"filename": "/resources/CardImage/PL!N-pb1-067-SRE.webp", "start": 68254104, "end": 68313478}, {"filename": "/resources/CardImage/PL!N-pb1-068-SRE.webp", "start": 68313478, "end": 68372180}, {"filename": "/resources/CardImage/PL!N-pb1-069-SRE.webp", "start": 68372180, "end": 68420882}, {"filename": "/resources/CardImage/PL!N-pb1-070-SRE.webp", "start": 68420882, "end": 68480722}, {"filename": "/resources/CardImage/PL!N-pb1-071-SRE.webp", "start": 68480722, "end": 68535384}, {"filename": "/resources/CardImage/PL!N-pb1-072-SRE.webp", "start": 68535384, "end": 68590774}, {"filename": "/resources/CardImage/PL!N-pb1-073-SRE.webp", "start": 68590774, "end": 68643512}, {"filename": "/resources/CardImage/PL!N-pb1-074-SRE.webp", "start": 68643512, "end": 68701652}, {"filename": "/resources/CardImage/PL!N-pb1-075-SRE.webp", "start": 68701652, "end": 68758578}, {"filename": "/resources/CardImage/PL!N-pb1-076-SRE.webp", "start": 68758578, "end": 68807652}, {"filename": "/resources/CardImage/PL!N-pb1-077-SRE.webp", "start": 68807652, "end": 68855318}, {"filename": "/resources/CardImage/PL!N-pb1-078-SRE.webp", "start": 68855318, "end": 68910566}, {"filename": "/resources/CardImage/PL!N-pb1-079-SRE.webp", "start": 68910566, "end": 68968374}, {"filename": "/resources/CardImage/PL!N-pb1-080-SRE.webp", "start": 68968374, "end": 69018484}, {"filename": "/resources/CardImage/PL!N-pb1-081-SRE.webp", "start": 69018484, "end": 69074046}, {"filename": "/resources/CardImage/PL!N-pb1-082-SRE.webp", "start": 69074046, "end": 69107814}, {"filename": "/resources/CardImage/PL!N-pb1-083-SECE.webp", "start": 69107814, "end": 69165920}, {"filename": "/resources/CardImage/PL!N-pb1-083-SRE.webp", "start": 69165920, "end": 69219986}, {"filename": "/resources/CardImage/PL!N-pb1-100-LLE.webp", "start": 69219986, "end": 69297160}, {"filename": "/resources/CardImage/PL!N-pb1-200-LLE.webp", "start": 69297160, "end": 69355510}, {"filename": "/resources/CardImage/PL!N-pb1-300-LLE.webp", "start": 69355510, "end": 69413294}, {"filename": "/resources/CardImage/PL!N-pb1-400-LLE.webp", "start": 69413294, "end": 69477236}, {"filename": "/resources/CardImage/PL!N-pb1-500-LLE.webp", "start": 69477236, "end": 69540836}, {"filename": "/resources/CardImage/PL!N-pb1-600-LLE.webp", "start": 69540836, "end": 69603248}, {"filename": "/resources/CardImage/PL!N-pb1-700-LLE.webp", "start": 69603248, "end": 69647298}, {"filename": "/resources/CardImage/PL!N-pb1-800-LLE.webp", "start": 69647298, "end": 69703116}, {"filename": "/resources/CardImage/PL!N-sd1-001-P.webp", "start": 69703116, "end": 69762130}, {"filename": "/resources/CardImage/PL!N-sd1-001-SD.webp", "start": 69762130, "end": 69825458}, {"filename": "/resources/CardImage/PL!N-sd1-001-SD2.webp", "start": 69825458, "end": 69876334}, {"filename": "/resources/CardImage/PL!N-sd1-002-SD.webp", "start": 69876334, "end": 69936830}, {"filename": "/resources/CardImage/PL!N-sd1-003-SD.webp", "start": 69936830, "end": 69996940}, {"filename": "/resources/CardImage/PL!N-sd1-004-P.webp", "start": 69996940, "end": 70053766}, {"filename": "/resources/CardImage/PL!N-sd1-004-SD.webp", "start": 70053766, "end": 70109874}, {"filename": "/resources/CardImage/PL!N-sd1-004-SD2.webp", "start": 70109874, "end": 70149652}, {"filename": "/resources/CardImage/PL!N-sd1-005-SD.webp", "start": 70149652, "end": 70206050}, {"filename": "/resources/CardImage/PL!N-sd1-006-P.webp", "start": 70206050, "end": 70261408}, {"filename": "/resources/CardImage/PL!N-sd1-006-SD.webp", "start": 70261408, "end": 70319392}, {"filename": "/resources/CardImage/PL!N-sd1-006-SD2.webp", "start": 70319392, "end": 70357042}, {"filename": "/resources/CardImage/PL!N-sd1-007-SD.webp", "start": 70357042, "end": 70419974}, {"filename": "/resources/CardImage/PL!N-sd1-008-P.webp", "start": 70419974, "end": 70473384}, {"filename": "/resources/CardImage/PL!N-sd1-008-RM.webp", "start": 70473384, "end": 70532680}, {"filename": "/resources/CardImage/PL!N-sd1-008-SD.webp", "start": 70532680, "end": 70588792}, {"filename": "/resources/CardImage/PL!N-sd1-008-SD2.webp", "start": 70588792, "end": 70630580}, {"filename": "/resources/CardImage/PL!N-sd1-009-SD.webp", "start": 70630580, "end": 70688562}, {"filename": "/resources/CardImage/PL!N-sd1-010-SD.webp", "start": 70688562, "end": 70745208}, {"filename": "/resources/CardImage/PL!N-sd1-011-SD.webp", "start": 70745208, "end": 70794684}, {"filename": "/resources/CardImage/PL!N-sd1-012-SD.webp", "start": 70794684, "end": 70851314}, {"filename": "/resources/CardImage/PL!N-sd1-013-PR.webp", "start": 70851314, "end": 70898434}, {"filename": "/resources/CardImage/PL!N-sd1-013-SD.webp", "start": 70898434, "end": 70941194}, {"filename": "/resources/CardImage/PL!N-sd1-014-PR.webp", "start": 70941194, "end": 70982854}, {"filename": "/resources/CardImage/PL!N-sd1-014-SD.webp", "start": 70982854, "end": 71026050}, {"filename": "/resources/CardImage/PL!N-sd1-015-PR.webp", "start": 71026050, "end": 71069776}, {"filename": "/resources/CardImage/PL!N-sd1-015-SD.webp", "start": 71069776, "end": 71113390}, {"filename": "/resources/CardImage/PL!N-sd1-016-PR.webp", "start": 71113390, "end": 71156670}, {"filename": "/resources/CardImage/PL!N-sd1-016-SD.webp", "start": 71156670, "end": 71201160}, {"filename": "/resources/CardImage/PL!N-sd1-017-PR.webp", "start": 71201160, "end": 71252276}, {"filename": "/resources/CardImage/PL!N-sd1-017-SD.webp", "start": 71252276, "end": 71298468}, {"filename": "/resources/CardImage/PL!N-sd1-018-PR.webp", "start": 71298468, "end": 71348240}, {"filename": "/resources/CardImage/PL!N-sd1-018-SD.webp", "start": 71348240, "end": 71393738}, {"filename": "/resources/CardImage/PL!N-sd1-019-PR.webp", "start": 71393738, "end": 71429378}, {"filename": "/resources/CardImage/PL!N-sd1-019-SD.webp", "start": 71429378, "end": 71476562}, {"filename": "/resources/CardImage/PL!N-sd1-020-PR.webp", "start": 71476562, "end": 71522254}, {"filename": "/resources/CardImage/PL!N-sd1-020-SD.webp", "start": 71522254, "end": 71563986}, {"filename": "/resources/CardImage/PL!N-sd1-021-PR.webp", "start": 71563986, "end": 71611164}, {"filename": "/resources/CardImage/PL!N-sd1-021-SD.webp", "start": 71611164, "end": 71653572}, {"filename": "/resources/CardImage/PL!N-sd1-022-PR.webp", "start": 71653572, "end": 71693312}, {"filename": "/resources/CardImage/PL!N-sd1-022-SD.webp", "start": 71693312, "end": 71735686}, {"filename": "/resources/CardImage/PL!N-sd1-023-PR.webp", "start": 71735686, "end": 71785630}, {"filename": "/resources/CardImage/PL!N-sd1-023-SD.webp", "start": 71785630, "end": 71822040}, {"filename": "/resources/CardImage/PL!N-sd1-024-PR.webp", "start": 71822040, "end": 71870564}, {"filename": "/resources/CardImage/PL!N-sd1-024-SD.webp", "start": 71870564, "end": 71910976}, {"filename": "/resources/CardImage/PL!N-sd1-025-SD.webp", "start": 71910976, "end": 71951210}, {"filename": "/resources/CardImage/PL!N-sd1-026-P.webp", "start": 71951210, "end": 71984414}, {"filename": "/resources/CardImage/PL!N-sd1-026-SD.webp", "start": 71984414, "end": 72025304}, {"filename": "/resources/CardImage/PL!N-sd1-026-SD2.webp", "start": 72025304, "end": 72059238}, {"filename": "/resources/CardImage/PL!N-sd1-027-SD.webp", "start": 72059238, "end": 72105412}, {"filename": "/resources/CardImage/PL!N-sd1-028-SD.webp", "start": 72105412, "end": 72146226}, {"filename": "/resources/CardImage/PL!N-sd1-029-P.webp", "start": 72146226, "end": 72211254}, {"filename": "/resources/CardImage/PL!N-sd1-030-P.webp", "start": 72211254, "end": 72277698}, {"filename": "/resources/CardImage/PL!N-sd1-031-P.webp", "start": 72277698, "end": 72343340}, {"filename": "/resources/CardImage/PL!N-sd1-032-P.webp", "start": 72343340, "end": 72408766}, {"filename": "/resources/CardImage/PL!N-sd1-033-P.webp", "start": 72408766, "end": 72481178}, {"filename": "/resources/CardImage/PL!N-sd1-034-P.webp", "start": 72481178, "end": 72548904}, {"filename": "/resources/CardImage/PL!N-sd1-035-P.webp", "start": 72548904, "end": 72618196}, {"filename": "/resources/CardImage/PL!N-sd1-036-P.webp", "start": 72618196, "end": 72682978}, {"filename": "/resources/CardImage/PL!N-sd1-037-P.webp", "start": 72682978, "end": 72748260}, {"filename": "/resources/CardImage/PL!N-sd1-038-P.webp", "start": 72748260, "end": 72815108}, {"filename": "/resources/CardImage/PL!N-sd1-039-P.webp", "start": 72815108, "end": 72882030}, {"filename": "/resources/CardImage/PL!N-sd1-040-P.webp", "start": 72882030, "end": 72948576}, {"filename": "/resources/CardImage/PL!N-sd2-000-P.webp", "start": 72948576, "end": 73009044}, {"filename": "/resources/CardImage/PL!N-sd2-000-SECS.webp", "start": 73009044, "end": 73074196}, {"filename": "/resources/CardImage/PL!N-sd2-001-SD2.webp", "start": 73074196, "end": 73135400}, {"filename": "/resources/CardImage/PL!N-sd2-002-SD2.webp", "start": 73135400, "end": 73194128}, {"filename": "/resources/CardImage/PL!N-sd2-003-SD2.webp", "start": 73194128, "end": 73244494}, {"filename": "/resources/CardImage/PL!N-sd2-004-SD2.webp", "start": 73244494, "end": 73296686}, {"filename": "/resources/CardImage/PL!N-sd2-005-SD2.webp", "start": 73296686, "end": 73353756}, {"filename": "/resources/CardImage/PL!N-sd2-006-SD2.webp", "start": 73353756, "end": 73405526}, {"filename": "/resources/CardImage/PL!N-sd2-007-P.webp", "start": 73405526, "end": 73469002}, {"filename": "/resources/CardImage/PL!N-sd2-007-SD2.webp", "start": 73469002, "end": 73534352}, {"filename": "/resources/CardImage/PL!N-sd2-008-SD2.webp", "start": 73534352, "end": 73591464}, {"filename": "/resources/CardImage/PL!N-sd2-009-SD2.webp", "start": 73591464, "end": 73645750}, {"filename": "/resources/CardImage/PL!N-sd2-010-SD2.webp", "start": 73645750, "end": 73700834}, {"filename": "/resources/CardImage/PL!N-sd2-011-SD2.webp", "start": 73700834, "end": 73756818}, {"filename": "/resources/CardImage/PL!N-sd2-012-SD2.webp", "start": 73756818, "end": 73812246}, {"filename": "/resources/CardImage/PL!N-sd2-013-SD2.webp", "start": 73812246, "end": 73856744}, {"filename": "/resources/CardImage/PL!N-sd2-014-SD2.webp", "start": 73856744, "end": 73897756}, {"filename": "/resources/CardImage/PL!N-sd2-015-SD2.webp", "start": 73897756, "end": 73943292}, {"filename": "/resources/CardImage/PL!N-sd2-016-SD2.webp", "start": 73943292, "end": 73986230}, {"filename": "/resources/CardImage/PL!N-sd2-017-SD2.webp", "start": 73986230, "end": 74027738}, {"filename": "/resources/CardImage/PL!N-sd2-018-SD2.webp", "start": 74027738, "end": 74070226}, {"filename": "/resources/CardImage/PL!N-sd2-019-SD2.webp", "start": 74070226, "end": 74115680}, {"filename": "/resources/CardImage/PL!N-sd2-020-SD2.webp", "start": 74115680, "end": 74154770}, {"filename": "/resources/CardImage/PL!N-sd2-021-SD2.webp", "start": 74154770, "end": 74199988}, {"filename": "/resources/CardImage/PL!N-sd2-022-SD2.webp", "start": 74199988, "end": 74238706}, {"filename": "/resources/CardImage/PL!N-sd2-023-SD2.webp", "start": 74238706, "end": 74277356}, {"filename": "/resources/CardImage/PL!N-sd2-024-SD2.webp", "start": 74277356, "end": 74318068}, {"filename": "/resources/CardImage/PL!N-sd2-025-P.webp", "start": 74318068, "end": 74357324}, {"filename": "/resources/CardImage/PL!N-sd2-025-SD2.webp", "start": 74357324, "end": 74394956}, {"filename": "/resources/CardImage/PL!N-sd2-026-P.webp", "start": 74394956, "end": 74440548}, {"filename": "/resources/CardImage/PL!N-sd2-026-SD2.webp", "start": 74440548, "end": 74480156}, {"filename": "/resources/CardImage/PL!N-sd2-027-P.webp", "start": 74480156, "end": 74525928}, {"filename": "/resources/CardImage/PL!N-sd2-027-SD2.webp", "start": 74525928, "end": 74567068}, {"filename": "/resources/CardImage/PL!S-PR-001-PR.webp", "start": 74567068, "end": 74616810}, {"filename": "/resources/CardImage/PL!S-PR-002-PR.webp", "start": 74616810, "end": 74679986}, {"filename": "/resources/CardImage/PL!S-PR-003-PR.webp", "start": 74679986, "end": 74736490}, {"filename": "/resources/CardImage/PL!S-PR-004-PR.webp", "start": 74736490, "end": 74794588}, {"filename": "/resources/CardImage/PL!S-PR-005-PR.webp", "start": 74794588, "end": 74858350}, {"filename": "/resources/CardImage/PL!S-PR-006-PR.webp", "start": 74858350, "end": 74916564}, {"filename": "/resources/CardImage/PL!S-PR-007-PR.webp", "start": 74916564, "end": 74972506}, {"filename": "/resources/CardImage/PL!S-PR-008-PR.webp", "start": 74972506, "end": 75031408}, {"filename": "/resources/CardImage/PL!S-PR-009-PR.webp", "start": 75031408, "end": 75089454}, {"filename": "/resources/CardImage/PL!S-PR-010-PR.webp", "start": 75089454, "end": 75149496}, {"filename": "/resources/CardImage/PL!S-PR-013-PR.webp", "start": 75149496, "end": 75201976}, {"filename": "/resources/CardImage/PL!S-PR-014-PR.webp", "start": 75201976, "end": 75255368}, {"filename": "/resources/CardImage/PL!S-PR-015-PR.webp", "start": 75255368, "end": 75303756}, {"filename": "/resources/CardImage/PL!S-PR-016-PR.webp", "start": 75303756, "end": 75357638}, {"filename": "/resources/CardImage/PL!S-PR-017-PR.webp", "start": 75357638, "end": 75403068}, {"filename": "/resources/CardImage/PL!S-PR-018-PR.webp", "start": 75403068, "end": 75450638}, {"filename": "/resources/CardImage/PL!S-PR-019-PR.webp", "start": 75450638, "end": 75501694}, {"filename": "/resources/CardImage/PL!S-PR-020-PR.webp", "start": 75501694, "end": 75550548}, {"filename": "/resources/CardImage/PL!S-PR-021-PR.webp", "start": 75550548, "end": 75601872}, {"filename": "/resources/CardImage/PL!S-PR-022-PR.webp", "start": 75601872, "end": 75644578}, {"filename": "/resources/CardImage/PL!S-PR-023-PR.webp", "start": 75644578, "end": 75691808}, {"filename": "/resources/CardImage/PL!S-PR-024-PR.webp", "start": 75691808, "end": 75733916}, {"filename": "/resources/CardImage/PL!S-PR-025-PR.webp", "start": 75733916, "end": 75782824}, {"filename": "/resources/CardImage/PL!S-PR-025-RM.webp", "start": 75782824, "end": 75853578}, {"filename": "/resources/CardImage/PL!S-PR-026-PR.webp", "start": 75853578, "end": 75896548}, {"filename": "/resources/CardImage/PL!S-PR-027-PR.webp", "start": 75896548, "end": 75946186}, {"filename": "/resources/CardImage/PL!S-PR-027-RM.webp", "start": 75946186, "end": 76014446}, {"filename": "/resources/CardImage/PL!S-PR-028-PR.webp", "start": 76014446, "end": 76064236}, {"filename": "/resources/CardImage/PL!S-PR-029-PR.webp", "start": 76064236, "end": 76114458}, {"filename": "/resources/CardImage/PL!S-PR-030-PR.webp", "start": 76114458, "end": 76163832}, {"filename": "/resources/CardImage/PL!S-PR-031-PR.webp", "start": 76163832, "end": 76214816}, {"filename": "/resources/CardImage/PL!S-PR-032-PR.webp", "start": 76214816, "end": 76265222}, {"filename": "/resources/CardImage/PL!S-PR-033-PR.webp", "start": 76265222, "end": 76313296}, {"filename": "/resources/CardImage/PL!S-PR-034-PR2.webp", "start": 76313296, "end": 76352202}, {"filename": "/resources/CardImage/PL!S-PR-035-PR.webp", "start": 76352202, "end": 76389674}, {"filename": "/resources/CardImage/PL!S-PR-036-PR2.webp", "start": 76389674, "end": 76429114}, {"filename": "/resources/CardImage/PL!S-PR-037-PR.webp", "start": 76429114, "end": 76495094}, {"filename": "/resources/CardImage/PL!S-PR-038-PR.webp", "start": 76495094, "end": 76555398}, {"filename": "/resources/CardImage/PL!S-PR-039-PR.webp", "start": 76555398, "end": 76618758}, {"filename": "/resources/CardImage/PL!S-PR-040-PR.webp", "start": 76618758, "end": 76678870}, {"filename": "/resources/CardImage/PL!S-PR-041-PR.webp", "start": 76678870, "end": 76739218}, {"filename": "/resources/CardImage/PL!S-PR-042-PR.webp", "start": 76739218, "end": 76797466}, {"filename": "/resources/CardImage/PL!S-PR-043-PR.webp", "start": 76797466, "end": 76852398}, {"filename": "/resources/CardImage/PL!S-PR-043-PR2.webp", "start": 76852398, "end": 76905580}, {"filename": "/resources/CardImage/PL!S-PR-044-PR.webp", "start": 76905580, "end": 76965716}, {"filename": "/resources/CardImage/PL!S-PR-045-PR.webp", "start": 76965716, "end": 77033040}, {"filename": "/resources/CardImage/PL!S-PR2-011-PR2.webp", "start": 77033040, "end": 77106442}, {"filename": "/resources/CardImage/PL!S-PR2-012-PR2.webp", "start": 77106442, "end": 77181072}, {"filename": "/resources/CardImage/PL!S-bp1-000-LLE.webp", "start": 77181072, "end": 77227780}, {"filename": "/resources/CardImage/PL!S-bp2-001-P.webp", "start": 77227780, "end": 77294892}, {"filename": "/resources/CardImage/PL!S-bp2-001-R.webp", "start": 77294892, "end": 77364154}, {"filename": "/resources/CardImage/PL!S-bp2-002-P.webp", "start": 77364154, "end": 77432536}, {"filename": "/resources/CardImage/PL!S-bp2-002-R.webp", "start": 77432536, "end": 77495156}, {"filename": "/resources/CardImage/PL!S-bp2-003-P.webp", "start": 77495156, "end": 77569664}, {"filename": "/resources/CardImage/PL!S-bp2-003-R.webp", "start": 77569664, "end": 77633166}, {"filename": "/resources/CardImage/PL!S-bp2-004-P.webp", "start": 77633166, "end": 77703486}, {"filename": "/resources/CardImage/PL!S-bp2-004-R.webp", "start": 77703486, "end": 77767668}, {"filename": "/resources/CardImage/PL!S-bp2-005-P.webp", "start": 77767668, "end": 77841140}, {"filename": "/resources/CardImage/PL!S-bp2-005-P2.webp", "start": 77841140, "end": 77903508}, {"filename": "/resources/CardImage/PL!S-bp2-005-R2.webp", "start": 77903508, "end": 77968196}, {"filename": "/resources/CardImage/PL!S-bp2-005-SEC.webp", "start": 77968196, "end": 78036466}, {"filename": "/resources/CardImage/PL!S-bp2-006-P.webp", "start": 78036466, "end": 78109176}, {"filename": "/resources/CardImage/PL!S-bp2-006-R.webp", "start": 78109176, "end": 78174382}, {"filename": "/resources/CardImage/PL!S-bp2-007-P.webp", "start": 78174382, "end": 78253986}, {"filename": "/resources/CardImage/PL!S-bp2-007-P2.webp", "start": 78253986, "end": 78310108}, {"filename": "/resources/CardImage/PL!S-bp2-007-R2.webp", "start": 78310108, "end": 78374172}, {"filename": "/resources/CardImage/PL!S-bp2-007-SEC.webp", "start": 78374172, "end": 78458618}, {"filename": "/resources/CardImage/PL!S-bp2-008-P.webp", "start": 78458618, "end": 78534120}, {"filename": "/resources/CardImage/PL!S-bp2-008-P2.webp", "start": 78534120, "end": 78596918}, {"filename": "/resources/CardImage/PL!S-bp2-008-R2.webp", "start": 78596918, "end": 78667162}, {"filename": "/resources/CardImage/PL!S-bp2-008-SEC.webp", "start": 78667162, "end": 78743834}, {"filename": "/resources/CardImage/PL!S-bp2-009-P.webp", "start": 78743834, "end": 78814778}, {"filename": "/resources/CardImage/PL!S-bp2-009-R.webp", "start": 78814778, "end": 78886584}, {"filename": "/resources/CardImage/PL!S-bp2-010-N.webp", "start": 78886584, "end": 78952290}, {"filename": "/resources/CardImage/PL!S-bp2-011-N.webp", "start": 78952290, "end": 79019462}, {"filename": "/resources/CardImage/PL!S-bp2-012-N.webp", "start": 79019462, "end": 79083374}, {"filename": "/resources/CardImage/PL!S-bp2-013-N.webp", "start": 79083374, "end": 79147532}, {"filename": "/resources/CardImage/PL!S-bp2-014-N.webp", "start": 79147532, "end": 79209736}, {"filename": "/resources/CardImage/PL!S-bp2-015-N.webp", "start": 79209736, "end": 79273312}, {"filename": "/resources/CardImage/PL!S-bp2-015-PR.webp", "start": 79273312, "end": 79314358}, {"filename": "/resources/CardImage/PL!S-bp2-016-N.webp", "start": 79314358, "end": 79379978}, {"filename": "/resources/CardImage/PL!S-bp2-017-N.webp", "start": 79379978, "end": 79448624}, {"filename": "/resources/CardImage/PL!S-bp2-018-N.webp", "start": 79448624, "end": 79516872}, {"filename": "/resources/CardImage/PL!S-bp2-019-L.webp", "start": 79516872, "end": 79557900}, {"filename": "/resources/CardImage/PL!S-bp2-020-L.webp", "start": 79557900, "end": 79592886}, {"filename": "/resources/CardImage/PL!S-bp2-021-L.webp", "start": 79592886, "end": 79646832}, {"filename": "/resources/CardImage/PL!S-bp2-022-L.webp", "start": 79646832, "end": 79685688}, {"filename": "/resources/CardImage/PL!S-bp2-023-L.webp", "start": 79685688, "end": 79728526}, {"filename": "/resources/CardImage/PL!S-bp2-023-SECL.webp", "start": 79728526, "end": 79790502}, {"filename": "/resources/CardImage/PL!S-bp2-024-L.webp", "start": 79790502, "end": 79830478}, {"filename": "/resources/CardImage/PL!S-bp2-024-SECL.webp", "start": 79830478, "end": 79904930}, {"filename": "/resources/CardImage/PL!S-bp2-025-L.webp", "start": 79904930, "end": 79956762}, {"filename": "/resources/CardImage/PL!S-bp2-026-L.webp", "start": 79956762, "end": 79996750}, {"filename": "/resources/CardImage/PL!S-bp2-027-SECE.webp", "start": 79996750, "end": 80056112}, {"filename": "/resources/CardImage/PL!S-bp2-028-SECE.webp", "start": 80056112, "end": 80128312}, {"filename": "/resources/CardImage/PL!S-bp2-029-SECE.webp", "start": 80128312, "end": 80193376}, {"filename": "/resources/CardImage/PL!S-bp2-030-PE.webp", "start": 80193376, "end": 80222668}, {"filename": "/resources/CardImage/PL!S-bp2-030-PE2.webp", "start": 80222668, "end": 80258624}, {"filename": "/resources/CardImage/PL!S-bp2-031-PE.webp", "start": 80258624, "end": 80286786}, {"filename": "/resources/CardImage/PL!S-bp2-031-PE2.webp", "start": 80286786, "end": 80321476}, {"filename": "/resources/CardImage/PL!S-bp2-032-PE.webp", "start": 80321476, "end": 80346546}, {"filename": "/resources/CardImage/PL!S-bp2-032-PE2.webp", "start": 80346546, "end": 80376440}, {"filename": "/resources/CardImage/PL!S-bp2-033-PE.webp", "start": 80376440, "end": 80407240}, {"filename": "/resources/CardImage/PL!S-bp2-033-PE2.webp", "start": 80407240, "end": 80445758}, {"filename": "/resources/CardImage/PL!S-bp2-100-LLE.webp", "start": 80445758, "end": 80516830}, {"filename": "/resources/CardImage/PL!S-bp2-200-LLE.webp", "start": 80516830, "end": 80591796}, {"filename": "/resources/CardImage/PL!S-bp2-E01-RE.webp", "start": 80591796, "end": 80643656}, {"filename": "/resources/CardImage/PL!S-bp3-E01-RE.webp", "start": 80643656, "end": 80686178}, {"filename": "/resources/CardImage/PL!S-bp3-L-019-L.webp", "start": 80686178, "end": 80713616}, {"filename": "/resources/CardImage/PL!S-bp3-L-020-L.webp", "start": 80713616, "end": 80754576}, {"filename": "/resources/CardImage/PL!S-bp3-L-021-L.webp", "start": 80754576, "end": 80799180}, {"filename": "/resources/CardImage/PL!S-bp3-L-022-L.webp", "start": 80799180, "end": 80836910}, {"filename": "/resources/CardImage/PL!S-bp3-L-023-L.webp", "start": 80836910, "end": 80875440}, {"filename": "/resources/CardImage/PL!S-bp3-L-024-L.webp", "start": 80875440, "end": 80911348}, {"filename": "/resources/CardImage/PL!S-bp3-L-025-L.webp", "start": 80911348, "end": 80949122}, {"filename": "/resources/CardImage/PL!S-bp3-LLE-100-LLE.webp", "start": 80949122, "end": 81004776}, {"filename": "/resources/CardImage/PL!S-bp3-LLE-200-LLE.webp", "start": 81004776, "end": 81072556}, {"filename": "/resources/CardImage/PL!S-bp3-N-010-N.webp", "start": 81072556, "end": 81118884}, {"filename": "/resources/CardImage/PL!S-bp3-N-011-N.webp", "start": 81118884, "end": 81162348}, {"filename": "/resources/CardImage/PL!S-bp3-N-012-N.webp", "start": 81162348, "end": 81207196}, {"filename": "/resources/CardImage/PL!S-bp3-N-013-N.webp", "start": 81207196, "end": 81247914}, {"filename": "/resources/CardImage/PL!S-bp3-N-014-N.webp", "start": 81247914, "end": 81293142}, {"filename": "/resources/CardImage/PL!S-bp3-N-015-N.webp", "start": 81293142, "end": 81339220}, {"filename": "/resources/CardImage/PL!S-bp3-N-016-N.webp", "start": 81339220, "end": 81385188}, {"filename": "/resources/CardImage/PL!S-bp3-N-017-N.webp", "start": 81385188, "end": 81431132}, {"filename": "/resources/CardImage/PL!S-bp3-N-018-N.webp", "start": 81431132, "end": 81478212}, {"filename": "/resources/CardImage/PL!S-bp3-P-001-P.webp", "start": 81478212, "end": 81530352}, {"filename": "/resources/CardImage/PL!S-bp3-P-002-P.webp", "start": 81530352, "end": 81579658}, {"filename": "/resources/CardImage/PL!S-bp3-P-003-P.webp", "start": 81579658, "end": 81632550}, {"filename": "/resources/CardImage/PL!S-bp3-P-004-P.webp", "start": 81632550, "end": 81684062}, {"filename": "/resources/CardImage/PL!S-bp3-P-005-P.webp", "start": 81684062, "end": 81732168}, {"filename": "/resources/CardImage/PL!S-bp3-P-006-P.webp", "start": 81732168, "end": 81786556}, {"filename": "/resources/CardImage/PL!S-bp3-P-007-P.webp", "start": 81786556, "end": 81836392}, {"filename": "/resources/CardImage/PL!S-bp3-P-008-P.webp", "start": 81836392, "end": 81888358}, {"filename": "/resources/CardImage/PL!S-bp3-P-009-P.webp", "start": 81888358, "end": 81946132}, {"filename": "/resources/CardImage/PL!S-bp3-P2-001-P2.webp", "start": 81946132, "end": 81998280}, {"filename": "/resources/CardImage/PL!S-bp3-P2-003-P2.webp", "start": 81998280, "end": 82046004}, {"filename": "/resources/CardImage/PL!S-bp3-P2-006-P2.webp", "start": 82046004, "end": 82093890}, {"filename": "/resources/CardImage/PL!S-bp3-PE-029-PE.webp", "start": 82093890, "end": 82117680}, {"filename": "/resources/CardImage/PL!S-bp3-PE-030-PE.webp", "start": 82117680, "end": 82141158}, {"filename": "/resources/CardImage/PL!S-bp3-PE-031-PE.webp", "start": 82141158, "end": 82166572}, {"filename": "/resources/CardImage/PL!S-bp3-PE2-029-PE2.webp", "start": 82166572, "end": 82196534}, {"filename": "/resources/CardImage/PL!S-bp3-PE2-030-PE2.webp", "start": 82196534, "end": 82225626}, {"filename": "/resources/CardImage/PL!S-bp3-PE2-031-PE2.webp", "start": 82225626, "end": 82258310}, {"filename": "/resources/CardImage/PL!S-bp3-R-002-R.webp", "start": 82258310, "end": 82319872}, {"filename": "/resources/CardImage/PL!S-bp3-R-004-R.webp", "start": 82319872, "end": 82380110}, {"filename": "/resources/CardImage/PL!S-bp3-R-005-R.webp", "start": 82380110, "end": 82442814}, {"filename": "/resources/CardImage/PL!S-bp3-R-007-R.webp", "start": 82442814, "end": 82505990}, {"filename": "/resources/CardImage/PL!S-bp3-R-008-R.webp", "start": 82505990, "end": 82569726}, {"filename": "/resources/CardImage/PL!S-bp3-R-009-R.webp", "start": 82569726, "end": 82631680}, {"filename": "/resources/CardImage/PL!S-bp3-R2-001-R2.webp", "start": 82631680, "end": 82700738}, {"filename": "/resources/CardImage/PL!S-bp3-R2-003-R2.webp", "start": 82700738, "end": 82760650}, {"filename": "/resources/CardImage/PL!S-bp3-R2-006-R2.webp", "start": 82760650, "end": 82825166}, {"filename": "/resources/CardImage/PL!S-bp3-SEC-001-SEC.webp", "start": 82825166, "end": 82888794}, {"filename": "/resources/CardImage/PL!S-bp3-SEC-003-SEC.webp", "start": 82888794, "end": 82938520}, {"filename": "/resources/CardImage/PL!S-bp3-SEC-006-SEC.webp", "start": 82938520, "end": 83003910}, {"filename": "/resources/CardImage/PL!S-bp3-SECE-026-SECE.webp", "start": 83003910, "end": 83056104}, {"filename": "/resources/CardImage/PL!S-bp3-SECE-027-SECE.webp", "start": 83056104, "end": 83098348}, {"filename": "/resources/CardImage/PL!S-bp3-SECE-028-SECE.webp", "start": 83098348, "end": 83153676}, {"filename": "/resources/CardImage/PL!S-bp5-001-AR.webp", "start": 83153676, "end": 83217106}, {"filename": "/resources/CardImage/PL!S-bp5-001-P.webp", "start": 83217106, "end": 83271586}, {"filename": "/resources/CardImage/PL!S-bp5-001-R2.webp", "start": 83271586, "end": 83329050}, {"filename": "/resources/CardImage/PL!S-bp5-001-SEC.webp", "start": 83329050, "end": 83392338}, {"filename": "/resources/CardImage/PL!S-bp5-002-AR.webp", "start": 83392338, "end": 83452628}, {"filename": "/resources/CardImage/PL!S-bp5-002-P.webp", "start": 83452628, "end": 83506066}, {"filename": "/resources/CardImage/PL!S-bp5-002-R2.webp", "start": 83506066, "end": 83556346}, {"filename": "/resources/CardImage/PL!S-bp5-002-SEC.webp", "start": 83556346, "end": 83610490}, {"filename": "/resources/CardImage/PL!S-bp5-003-AR.webp", "start": 83610490, "end": 83674304}, {"filename": "/resources/CardImage/PL!S-bp5-003-P.webp", "start": 83674304, "end": 83728786}, {"filename": "/resources/CardImage/PL!S-bp5-003-R.webp", "start": 83728786, "end": 83780820}, {"filename": "/resources/CardImage/PL!S-bp5-004-AR.webp", "start": 83780820, "end": 83845918}, {"filename": "/resources/CardImage/PL!S-bp5-004-P.webp", "start": 83845918, "end": 83899540}, {"filename": "/resources/CardImage/PL!S-bp5-004-R.webp", "start": 83899540, "end": 83948370}, {"filename": "/resources/CardImage/PL!S-bp5-005-AR.webp", "start": 83948370, "end": 84007554}, {"filename": "/resources/CardImage/PL!S-bp5-005-P.webp", "start": 84007554, "end": 84058932}, {"filename": "/resources/CardImage/PL!S-bp5-005-R2.webp", "start": 84058932, "end": 84115712}, {"filename": "/resources/CardImage/PL!S-bp5-005-SEC.webp", "start": 84115712, "end": 84175138}, {"filename": "/resources/CardImage/PL!S-bp5-006-AR.webp", "start": 84175138, "end": 84236040}, {"filename": "/resources/CardImage/PL!S-bp5-006-P.webp", "start": 84236040, "end": 84289228}, {"filename": "/resources/CardImage/PL!S-bp5-006-R.webp", "start": 84289228, "end": 84339622}, {"filename": "/resources/CardImage/PL!S-bp5-007-AR.webp", "start": 84339622, "end": 84399642}, {"filename": "/resources/CardImage/PL!S-bp5-007-P.webp", "start": 84399642, "end": 84454102}, {"filename": "/resources/CardImage/PL!S-bp5-007-R.webp", "start": 84454102, "end": 84506710}, {"filename": "/resources/CardImage/PL!S-bp5-008-AR.webp", "start": 84506710, "end": 84567334}, {"filename": "/resources/CardImage/PL!S-bp5-008-P.webp", "start": 84567334, "end": 84616742}, {"filename": "/resources/CardImage/PL!S-bp5-008-R.webp", "start": 84616742, "end": 84664780}, {"filename": "/resources/CardImage/PL!S-bp5-009-AR.webp", "start": 84664780, "end": 84725424}, {"filename": "/resources/CardImage/PL!S-bp5-009-P.webp", "start": 84725424, "end": 84777822}, {"filename": "/resources/CardImage/PL!S-bp5-009-R.webp", "start": 84777822, "end": 84836328}, {"filename": "/resources/CardImage/PL!S-bp5-010-N.webp", "start": 84836328, "end": 84890138}, {"filename": "/resources/CardImage/PL!S-bp5-011-N.webp", "start": 84890138, "end": 84942310}, {"filename": "/resources/CardImage/PL!S-bp5-012-N.webp", "start": 84942310, "end": 84990356}, {"filename": "/resources/CardImage/PL!S-bp5-013-N.webp", "start": 84990356, "end": 85041966}, {"filename": "/resources/CardImage/PL!S-bp5-014-N.webp", "start": 85041966, "end": 85092668}, {"filename": "/resources/CardImage/PL!S-bp5-015-N.webp", "start": 85092668, "end": 85144838}, {"filename": "/resources/CardImage/PL!S-bp5-016-N.webp", "start": 85144838, "end": 85196890}, {"filename": "/resources/CardImage/PL!S-bp5-017-N.webp", "start": 85196890, "end": 85249418}, {"filename": "/resources/CardImage/PL!S-bp5-018-N.webp", "start": 85249418, "end": 85299838}, {"filename": "/resources/CardImage/PL!S-bp5-019-L.webp", "start": 85299838, "end": 85339942}, {"filename": "/resources/CardImage/PL!S-bp5-020-L.webp", "start": 85339942, "end": 85379468}, {"filename": "/resources/CardImage/PL!S-bp5-021-L.webp", "start": 85379468, "end": 85418372}, {"filename": "/resources/CardImage/PL!S-bp5-022-L.webp", "start": 85418372, "end": 85448136}, {"filename": "/resources/CardImage/PL!S-bp5-023-L.webp", "start": 85448136, "end": 85490548}, {"filename": "/resources/CardImage/PL!S-bp5-111-P2.webp", "start": 85490548, "end": 85542030}, {"filename": "/resources/CardImage/PL!S-bp5-111-R.webp", "start": 85542030, "end": 85588560}, {"filename": "/resources/CardImage/PL!S-bp5-222-P2.webp", "start": 85588560, "end": 85637246}, {"filename": "/resources/CardImage/PL!S-bp5-222-R.webp", "start": 85637246, "end": 85684572}, {"filename": "/resources/CardImage/PL!S-bp5-E01-PE.webp", "start": 85684572, "end": 85738244}, {"filename": "/resources/CardImage/PL!S-bp5-E01-SECE.webp", "start": 85738244, "end": 85791688}, {"filename": "/resources/CardImage/PL!S-bp5-E02-PE.webp", "start": 85791688, "end": 85840744}, {"filename": "/resources/CardImage/PL!S-bp5-E02-SECE.webp", "start": 85840744, "end": 85886284}, {"filename": "/resources/CardImage/PL!S-bp5-E03-PE.webp", "start": 85886284, "end": 85938004}, {"filename": "/resources/CardImage/PL!S-bp5-E03-SECE.webp", "start": 85938004, "end": 85991090}, {"filename": "/resources/CardImage/PL!S-bp5-E04-PE.webp", "start": 85991090, "end": 86040252}, {"filename": "/resources/CardImage/PL!S-bp5-E05-PE.webp", "start": 86040252, "end": 86094614}, {"filename": "/resources/CardImage/PL!S-bp5-E06-PE.webp", "start": 86094614, "end": 86144344}, {"filename": "/resources/CardImage/PL!S-bp5-E07-PE.webp", "start": 86144344, "end": 86195692}, {"filename": "/resources/CardImage/PL!S-bp5-E08-PE.webp", "start": 86195692, "end": 86249246}, {"filename": "/resources/CardImage/PL!S-bp5-E09-PE.webp", "start": 86249246, "end": 86301548}, {"filename": "/resources/CardImage/PL!S-bp5-E10-LLE.webp", "start": 86301548, "end": 86375998}, {"filename": "/resources/CardImage/PL!S-bp5-SECL.webp", "start": 86375998, "end": 86431140}, {"filename": "/resources/CardImage/PL!S-bp6-001-P.webp", "start": 86431140, "end": 86494560}, {"filename": "/resources/CardImage/PL!S-bp6-001-R.webp", "start": 86494560, "end": 86553776}, {"filename": "/resources/CardImage/PL!S-bp6-002-P.webp", "start": 86553776, "end": 86624080}, {"filename": "/resources/CardImage/PL!S-bp6-002-P2.webp", "start": 86624080, "end": 86681264}, {"filename": "/resources/CardImage/PL!S-bp6-002-R2.webp", "start": 86681264, "end": 86747412}, {"filename": "/resources/CardImage/PL!S-bp6-002-SEC.webp", "start": 86747412, "end": 86810236}, {"filename": "/resources/CardImage/PL!S-bp6-003-P.webp", "start": 86810236, "end": 86871970}, {"filename": "/resources/CardImage/PL!S-bp6-003-R.webp", "start": 86871970, "end": 86935928}, {"filename": "/resources/CardImage/PL!S-bp6-004-P.webp", "start": 86935928, "end": 87000426}, {"filename": "/resources/CardImage/PL!S-bp6-004-P2.webp", "start": 87000426, "end": 87058606}, {"filename": "/resources/CardImage/PL!S-bp6-004-R2.webp", "start": 87058606, "end": 87120228}, {"filename": "/resources/CardImage/PL!S-bp6-004-SEC.webp", "start": 87120228, "end": 87177498}, {"filename": "/resources/CardImage/PL!S-bp6-005-P.webp", "start": 87177498, "end": 87241296}, {"filename": "/resources/CardImage/PL!S-bp6-005-R.webp", "start": 87241296, "end": 87297146}, {"filename": "/resources/CardImage/PL!S-bp6-006-P.webp", "start": 87297146, "end": 87360696}, {"filename": "/resources/CardImage/PL!S-bp6-006-R.webp", "start": 87360696, "end": 87423044}, {"filename": "/resources/CardImage/PL!S-bp6-007-P.webp", "start": 87423044, "end": 87487856}, {"filename": "/resources/CardImage/PL!S-bp6-007-R.webp", "start": 87487856, "end": 87551380}, {"filename": "/resources/CardImage/PL!S-bp6-008-P.webp", "start": 87551380, "end": 87616826}, {"filename": "/resources/CardImage/PL!S-bp6-008-R.webp", "start": 87616826, "end": 87677780}, {"filename": "/resources/CardImage/PL!S-bp6-009-P.webp", "start": 87677780, "end": 87747228}, {"filename": "/resources/CardImage/PL!S-bp6-009-P2.webp", "start": 87747228, "end": 87806078}, {"filename": "/resources/CardImage/PL!S-bp6-009-R2.webp", "start": 87806078, "end": 87867668}, {"filename": "/resources/CardImage/PL!S-bp6-009-SEC.webp", "start": 87867668, "end": 87940310}, {"filename": "/resources/CardImage/PL!S-bp6-010-N.webp", "start": 87940310, "end": 87992490}, {"filename": "/resources/CardImage/PL!S-bp6-011-N.webp", "start": 87992490, "end": 88041502}, {"filename": "/resources/CardImage/PL!S-bp6-012-N.webp", "start": 88041502, "end": 88094750}, {"filename": "/resources/CardImage/PL!S-bp6-013-N.webp", "start": 88094750, "end": 88145828}, {"filename": "/resources/CardImage/PL!S-bp6-014-N.webp", "start": 88145828, "end": 88190492}, {"filename": "/resources/CardImage/PL!S-bp6-015-N.webp", "start": 88190492, "end": 88239572}, {"filename": "/resources/CardImage/PL!S-bp6-016-N.webp", "start": 88239572, "end": 88290234}, {"filename": "/resources/CardImage/PL!S-bp6-017-N.webp", "start": 88290234, "end": 88337098}, {"filename": "/resources/CardImage/PL!S-bp6-018-N.webp", "start": 88337098, "end": 88389308}, {"filename": "/resources/CardImage/PL!S-bp6-019-L.webp", "start": 88389308, "end": 88423382}, {"filename": "/resources/CardImage/PL!S-bp6-020-L.webp", "start": 88423382, "end": 88472606}, {"filename": "/resources/CardImage/PL!S-bp6-021-L.webp", "start": 88472606, "end": 88513978}, {"filename": "/resources/CardImage/PL!S-bp6-022-L.webp", "start": 88513978, "end": 88555770}, {"filename": "/resources/CardImage/PL!S-bp6-023-L.webp", "start": 88555770, "end": 88600702}, {"filename": "/resources/CardImage/PL!S-bp6-024-L.webp", "start": 88600702, "end": 88644412}, {"filename": "/resources/CardImage/PL!S-bp6-E01-SECE.webp", "start": 88644412, "end": 88691298}, {"filename": "/resources/CardImage/PL!S-bp6-E03-SECE.webp", "start": 88691298, "end": 88752776}, {"filename": "/resources/CardImage/PL!S-bp6-E04-PE.webp", "start": 88752776, "end": 88790910}, {"filename": "/resources/CardImage/PL!S-bp6-E04-PE2.webp", "start": 88790910, "end": 88838670}, {"filename": "/resources/CardImage/PL!S-bp6-E05-PE.webp", "start": 88838670, "end": 88878890}, {"filename": "/resources/CardImage/PL!S-bp6-E05-PE2.webp", "start": 88878890, "end": 88922492}, {"filename": "/resources/CardImage/PL!S-bp6-E10-LLE.webp", "start": 88922492, "end": 89002086}, {"filename": "/resources/CardImage/PL!S-bp6-E20-LLE.webp", "start": 89002086, "end": 89067632}, {"filename": "/resources/CardImage/PL!S-bp7-001-P.webp", "start": 89067632, "end": 89129290}, {"filename": "/resources/CardImage/PL!S-bp7-001-R.webp", "start": 89129290, "end": 89179588}, {"filename": "/resources/CardImage/PL!S-bp7-002-P.webp", "start": 89179588, "end": 89241600}, {"filename": "/resources/CardImage/PL!S-bp7-002-R.webp", "start": 89241600, "end": 89285824}, {"filename": "/resources/CardImage/PL!S-bp7-003-P.webp", "start": 89285824, "end": 89351412}, {"filename": "/resources/CardImage/PL!S-bp7-003-P2.webp", "start": 89351412, "end": 89426034}, {"filename": "/resources/CardImage/PL!S-bp7-003-R2.webp", "start": 89426034, "end": 89480094}, {"filename": "/resources/CardImage/PL!S-bp7-003-SEC.webp", "start": 89480094, "end": 89553222}, {"filename": "/resources/CardImage/PL!S-bp7-004-P.webp", "start": 89553222, "end": 89622988}, {"filename": "/resources/CardImage/PL!S-bp7-004-R.webp", "start": 89622988, "end": 89677780}, {"filename": "/resources/CardImage/PL!S-bp7-005-P.webp", "start": 89677780, "end": 89743984}, {"filename": "/resources/CardImage/PL!S-bp7-005-P2.webp", "start": 89743984, "end": 89822162}, {"filename": "/resources/CardImage/PL!S-bp7-005-R2.webp", "start": 89822162, "end": 89874814}, {"filename": "/resources/CardImage/PL!S-bp7-005-SEC.webp", "start": 89874814, "end": 89946252}, {"filename": "/resources/CardImage/PL!S-bp7-006-P.webp", "start": 89946252, "end": 90006896}, {"filename": "/resources/CardImage/PL!S-bp7-006-R.webp", "start": 90006896, "end": 90048362}, {"filename": "/resources/CardImage/PL!S-bp7-007-P.webp", "start": 90048362, "end": 90110770}, {"filename": "/resources/CardImage/PL!S-bp7-007-P2.webp", "start": 90110770, "end": 90185356}, {"filename": "/resources/CardImage/PL!S-bp7-007-R2.webp", "start": 90185356, "end": 90237628}, {"filename": "/resources/CardImage/PL!S-bp7-007-SEC.webp", "start": 90237628, "end": 90307310}, {"filename": "/resources/CardImage/PL!S-bp7-008-P.webp", "start": 90307310, "end": 90374280}, {"filename": "/resources/CardImage/PL!S-bp7-008-R.webp", "start": 90374280, "end": 90422600}, {"filename": "/resources/CardImage/PL!S-bp7-009-P.webp", "start": 90422600, "end": 90483922}, {"filename": "/resources/CardImage/PL!S-bp7-009-R.webp", "start": 90483922, "end": 90524140}, {"filename": "/resources/CardImage/PL!S-bp7-010-N.webp", "start": 90524140, "end": 90585010}, {"filename": "/resources/CardImage/PL!S-bp7-011-N.webp", "start": 90585010, "end": 90642010}, {"filename": "/resources/CardImage/PL!S-bp7-012-N.webp", "start": 90642010, "end": 90700070}, {"filename": "/resources/CardImage/PL!S-bp7-013-N.webp", "start": 90700070, "end": 90755740}, {"filename": "/resources/CardImage/PL!S-bp7-014-N.webp", "start": 90755740, "end": 90810268}, {"filename": "/resources/CardImage/PL!S-bp7-015-N.webp", "start": 90810268, "end": 90867128}, {"filename": "/resources/CardImage/PL!S-bp7-016-N.webp", "start": 90867128, "end": 90925988}, {"filename": "/resources/CardImage/PL!S-bp7-017-N.webp", "start": 90925988, "end": 90983740}, {"filename": "/resources/CardImage/PL!S-bp7-018-N.webp", "start": 90983740, "end": 91041638}, {"filename": "/resources/CardImage/PL!S-bp7-019-L.webp", "start": 91041638, "end": 91082126}, {"filename": "/resources/CardImage/PL!S-bp7-020-L.webp", "start": 91082126, "end": 91120162}, {"filename": "/resources/CardImage/PL!S-bp7-020-SECL.webp", "start": 91120162, "end": 91189050}, {"filename": "/resources/CardImage/PL!S-bp7-021-L.webp", "start": 91189050, "end": 91241868}, {"filename": "/resources/CardImage/PL!S-bp7-022-L.webp", "start": 91241868, "end": 91287450}, {"filename": "/resources/CardImage/PL!S-bp7-022-SECL.webp", "start": 91287450, "end": 91366214}, {"filename": "/resources/CardImage/PL!S-bp7-023-L.webp", "start": 91366214, "end": 91412570}, {"filename": "/resources/CardImage/PL!S-bp7-024-L.webp", "start": 91412570, "end": 91450548}, {"filename": "/resources/CardImage/PL!S-bp7-025-L.webp", "start": 91450548, "end": 91493880}, {"filename": "/resources/CardImage/PL!S-bp7-E01-SECE.webp", "start": 91493880, "end": 91551920}, {"filename": "/resources/CardImage/PL!S-bp7-E02-SECE.webp", "start": 91551920, "end": 91608634}, {"filename": "/resources/CardImage/PL!S-bp7-E03-SECE.webp", "start": 91608634, "end": 91667042}, {"filename": "/resources/CardImage/PL!S-bp7-E04-PE.webp", "start": 91667042, "end": 91711844}, {"filename": "/resources/CardImage/PL!S-bp7-E04-PE2.webp", "start": 91711844, "end": 91765546}, {"filename": "/resources/CardImage/PL!S-bp7-E05-PE.webp", "start": 91765546, "end": 91805166}, {"filename": "/resources/CardImage/PL!S-bp7-E05-PE2.webp", "start": 91805166, "end": 91853340}, {"filename": "/resources/CardImage/PL!S-bp7-E06-PE.webp", "start": 91853340, "end": 91898318}, {"filename": "/resources/CardImage/PL!S-bp7-E06-PE2.webp", "start": 91898318, "end": 91949876}, {"filename": "/resources/CardImage/PL!S-bp7-E07-PE.webp", "start": 91949876, "end": 91977502}, {"filename": "/resources/CardImage/PL!S-bp7-E07-PE2.webp", "start": 91977502, "end": 92013048}, {"filename": "/resources/CardImage/PL!S-bp7-E08-PE.webp", "start": 92013048, "end": 92042494}, {"filename": "/resources/CardImage/PL!S-bp7-E08-PE2.webp", "start": 92042494, "end": 92082560}, {"filename": "/resources/CardImage/PL!S-pb1-001-P2.webp", "start": 92082560, "end": 92146256}, {"filename": "/resources/CardImage/PL!S-pb1-001-R.webp", "start": 92146256, "end": 92207250}, {"filename": "/resources/CardImage/PL!S-pb1-002-P2.webp", "start": 92207250, "end": 92268936}, {"filename": "/resources/CardImage/PL!S-pb1-002-R.webp", "start": 92268936, "end": 92332764}, {"filename": "/resources/CardImage/PL!S-pb1-003-P2.webp", "start": 92332764, "end": 92392902}, {"filename": "/resources/CardImage/PL!S-pb1-003-R.webp", "start": 92392902, "end": 92459652}, {"filename": "/resources/CardImage/PL!S-pb1-004-P2.webp", "start": 92459652, "end": 92516302}, {"filename": "/resources/CardImage/PL!S-pb1-004-R.webp", "start": 92516302, "end": 92575360}, {"filename": "/resources/CardImage/PL!S-pb1-005-P2.webp", "start": 92575360, "end": 92638562}, {"filename": "/resources/CardImage/PL!S-pb1-005-PR.webp", "start": 92638562, "end": 92678312}, {"filename": "/resources/CardImage/PL!S-pb1-005-R.webp", "start": 92678312, "end": 92738576}, {"filename": "/resources/CardImage/PL!S-pb1-006-P2.webp", "start": 92738576, "end": 92799578}, {"filename": "/resources/CardImage/PL!S-pb1-006-R.webp", "start": 92799578, "end": 92858274}, {"filename": "/resources/CardImage/PL!S-pb1-007-P2.webp", "start": 92858274, "end": 92922126}, {"filename": "/resources/CardImage/PL!S-pb1-007-R.webp", "start": 92922126, "end": 92977666}, {"filename": "/resources/CardImage/PL!S-pb1-008-P2.webp", "start": 92977666, "end": 93037472}, {"filename": "/resources/CardImage/PL!S-pb1-008-R.webp", "start": 93037472, "end": 93098992}, {"filename": "/resources/CardImage/PL!S-pb1-009-P2.webp", "start": 93098992, "end": 93159300}, {"filename": "/resources/CardImage/PL!S-pb1-009-R.webp", "start": 93159300, "end": 93218612}, {"filename": "/resources/CardImage/PL!S-pb1-010-N.webp", "start": 93218612, "end": 93264556}, {"filename": "/resources/CardImage/PL!S-pb1-010-PR.webp", "start": 93264556, "end": 93304864}, {"filename": "/resources/CardImage/PL!S-pb1-011-N.webp", "start": 93304864, "end": 93344558}, {"filename": "/resources/CardImage/PL!S-pb1-011-PR.webp", "start": 93344558, "end": 93377668}, {"filename": "/resources/CardImage/PL!S-pb1-012-N.webp", "start": 93377668, "end": 93417976}, {"filename": "/resources/CardImage/PL!S-pb1-013-N.webp", "start": 93417976, "end": 93463050}, {"filename": "/resources/CardImage/PL!S-pb1-014-N.webp", "start": 93463050, "end": 93505570}, {"filename": "/resources/CardImage/PL!S-pb1-015-N.webp", "start": 93505570, "end": 93550180}, {"filename": "/resources/CardImage/PL!S-pb1-016-N.webp", "start": 93550180, "end": 93592884}, {"filename": "/resources/CardImage/PL!S-pb1-017-N.webp", "start": 93592884, "end": 93634712}, {"filename": "/resources/CardImage/PL!S-pb1-018-N.webp", "start": 93634712, "end": 93674132}, {"filename": "/resources/CardImage/PL!S-pb1-019-L.webp", "start": 93674132, "end": 93722028}, {"filename": "/resources/CardImage/PL!S-pb1-020-L.webp", "start": 93722028, "end": 93766714}, {"filename": "/resources/CardImage/PL!S-pb1-021-L.webp", "start": 93766714, "end": 93810948}, {"filename": "/resources/CardImage/PL!S-pb1-022-L.webp", "start": 93810948, "end": 93855430}, {"filename": "/resources/CardImage/PL!S-pb1-022-L2.webp", "start": 93855430, "end": 93912350}, {"filename": "/resources/CardImage/PL!S-pb1-023-L.webp", "start": 93912350, "end": 93957210}, {"filename": "/resources/CardImage/PL!S-pb1-023-L2.webp", "start": 93957210, "end": 94020924}, {"filename": "/resources/CardImage/PL!S-pb1-024-L.webp", "start": 94020924, "end": 94062172}, {"filename": "/resources/CardImage/PL!S-pb1-025-PE.webp", "start": 94062172, "end": 94119054}, {"filename": "/resources/CardImage/PL!S-pb1-025-PE2.webp", "start": 94119054, "end": 94180792}, {"filename": "/resources/CardImage/PL!S-pb1-026-PE.webp", "start": 94180792, "end": 94233620}, {"filename": "/resources/CardImage/PL!S-pb1-026-PE2.webp", "start": 94233620, "end": 94290490}, {"filename": "/resources/CardImage/PL!S-pb1-027-PE.webp", "start": 94290490, "end": 94344304}, {"filename": "/resources/CardImage/PL!S-pb1-027-PE2.webp", "start": 94344304, "end": 94407838}, {"filename": "/resources/CardImage/PL!S-pb1-028-PE.webp", "start": 94407838, "end": 94460668}, {"filename": "/resources/CardImage/PL!S-pb1-028-PE2.webp", "start": 94460668, "end": 94525228}, {"filename": "/resources/CardImage/PL!S-pb1-029-PE.webp", "start": 94525228, "end": 94578380}, {"filename": "/resources/CardImage/PL!S-pb1-029-PE2.webp", "start": 94578380, "end": 94635552}, {"filename": "/resources/CardImage/PL!S-pb1-030-PE.webp", "start": 94635552, "end": 94690000}, {"filename": "/resources/CardImage/PL!S-pb1-030-PE2.webp", "start": 94690000, "end": 94743012}, {"filename": "/resources/CardImage/PL!S-pb1-031-PE.webp", "start": 94743012, "end": 94795572}, {"filename": "/resources/CardImage/PL!S-pb1-031-PE2.webp", "start": 94795572, "end": 94859334}, {"filename": "/resources/CardImage/PL!S-pb1-032-PE.webp", "start": 94859334, "end": 94917862}, {"filename": "/resources/CardImage/PL!S-pb1-032-PE2.webp", "start": 94917862, "end": 94970218}, {"filename": "/resources/CardImage/PL!S-pb1-033-PE.webp", "start": 94970218, "end": 95027724}, {"filename": "/resources/CardImage/PL!S-pb1-033-PE2.webp", "start": 95027724, "end": 95086172}, {"filename": "/resources/CardImage/PL!S-pb1-034-SRE.webp", "start": 95086172, "end": 95150902}, {"filename": "/resources/CardImage/PL!S-pb1-035-SRE.webp", "start": 95150902, "end": 95210544}, {"filename": "/resources/CardImage/PL!S-pb1-036-SRE.webp", "start": 95210544, "end": 95260000}, {"filename": "/resources/CardImage/PL!S-pb1-037-SRE.webp", "start": 95260000, "end": 95303886}, {"filename": "/resources/CardImage/PL!S-pb1-038-SRE.webp", "start": 95303886, "end": 95364592}, {"filename": "/resources/CardImage/PL!S-pb1-039-SRE.webp", "start": 95364592, "end": 95418864}, {"filename": "/resources/CardImage/PL!S-pb1-040-SRE.webp", "start": 95418864, "end": 95468468}, {"filename": "/resources/CardImage/PL!S-pb1-041-SRE.webp", "start": 95468468, "end": 95512490}, {"filename": "/resources/CardImage/PL!S-pb1-042-SRE.webp", "start": 95512490, "end": 95559648}, {"filename": "/resources/CardImage/PL!S-pb1-043-SRE.webp", "start": 95559648, "end": 95598632}, {"filename": "/resources/CardImage/PL!S-pb1-044-SRE.webp", "start": 95598632, "end": 95635092}, {"filename": "/resources/CardImage/PL!S-pb1-045-SRE.webp", "start": 95635092, "end": 95678796}, {"filename": "/resources/CardImage/PL!S-pb1-046-SRE.webp", "start": 95678796, "end": 95709088}, {"filename": "/resources/CardImage/PL!S-pb1-047-SRE.webp", "start": 95709088, "end": 95780056}, {"filename": "/resources/CardImage/PL!S-pb1-048-SRE.webp", "start": 95780056, "end": 95820184}, {"filename": "/resources/CardImage/PL!S-pb1-049-SRE.webp", "start": 95820184, "end": 95873826}, {"filename": "/resources/CardImage/PL!S-pb1-050-SRE.webp", "start": 95873826, "end": 95923746}, {"filename": "/resources/CardImage/PL!S-pb1-051-SRE.webp", "start": 95923746, "end": 95964026}, {"filename": "/resources/CardImage/PL!S-pb1-052-SECE.webp", "start": 95964026, "end": 96018344}, {"filename": "/resources/CardImage/PL!S-pb1-052-SRE.webp", "start": 96018344, "end": 96068014}, {"filename": "/resources/CardImage/PL!S-pb1-053-SECE.webp", "start": 96068014, "end": 96128272}, {"filename": "/resources/CardImage/PL!S-pb1-054-SRE.webp", "start": 96128272, "end": 96198854}, {"filename": "/resources/CardImage/PL!S-pb1-055-SRE.webp", "start": 96198854, "end": 96270114}, {"filename": "/resources/CardImage/PL!S-pb1-056-SRE.webp", "start": 96270114, "end": 96321308}, {"filename": "/resources/CardImage/PL!S-pb1-057-SRE.webp", "start": 96321308, "end": 96374060}, {"filename": "/resources/CardImage/PL!S-pb1-058-SRE.webp", "start": 96374060, "end": 96425884}, {"filename": "/resources/CardImage/PL!S-pb1-059-SRE.webp", "start": 96425884, "end": 96476868}, {"filename": "/resources/CardImage/PL!S-pb1-060-SRE.webp", "start": 96476868, "end": 96511034}, {"filename": "/resources/CardImage/PL!S-pb1-061-SRE.webp", "start": 96511034, "end": 96535584}, {"filename": "/resources/CardImage/PL!S-pb1-062-SRE.webp", "start": 96535584, "end": 96566888}, {"filename": "/resources/CardImage/PL!S-pb1-063-SRE.webp", "start": 96566888, "end": 96607778}, {"filename": "/resources/CardImage/PL!S-pb1-064-LLE.webp", "start": 96607778, "end": 96660866}, {"filename": "/resources/CardImage/PL!S-pb1-065-LLE.webp", "start": 96660866, "end": 96705776}, {"filename": "/resources/CardImage/PL!S-pb1-066-LLE.webp", "start": 96705776, "end": 96761322}, {"filename": "/resources/CardImage/PL!S-pb1-067-LLE.webp", "start": 96761322, "end": 96809942}, {"filename": "/resources/CardImage/PL!S-pb1-068-LLE.webp", "start": 96809942, "end": 96850300}, {"filename": "/resources/CardImage/PL!S-pb1-069-LLE.webp", "start": 96850300, "end": 96905828}, {"filename": "/resources/CardImage/PL!S-pb1-070-LLE.webp", "start": 96905828, "end": 96952254}, {"filename": "/resources/CardImage/PL!S-pb1-071-LLE.webp", "start": 96952254, "end": 97004392}, {"filename": "/resources/CardImage/PL!S-pb1-072-LLE.webp", "start": 97004392, "end": 97056492}, {"filename": "/resources/CardImage/PL!S-sd1-001-SD.webp", "start": 97056492, "end": 97113542}, {"filename": "/resources/CardImage/PL!S-sd1-002-SD.webp", "start": 97113542, "end": 97170832}, {"filename": "/resources/CardImage/PL!S-sd1-003-SD.webp", "start": 97170832, "end": 97229888}, {"filename": "/resources/CardImage/PL!S-sd1-004-SD.webp", "start": 97229888, "end": 97284740}, {"filename": "/resources/CardImage/PL!S-sd1-005-SD.webp", "start": 97284740, "end": 97343212}, {"filename": "/resources/CardImage/PL!S-sd1-006-SD.webp", "start": 97343212, "end": 97400208}, {"filename": "/resources/CardImage/PL!S-sd1-007-SD.webp", "start": 97400208, "end": 97457926}, {"filename": "/resources/CardImage/PL!S-sd1-008-SD.webp", "start": 97457926, "end": 97516072}, {"filename": "/resources/CardImage/PL!S-sd1-009-SD.webp", "start": 97516072, "end": 97576100}, {"filename": "/resources/CardImage/PL!S-sd1-010-SD.webp", "start": 97576100, "end": 97623208}, {"filename": "/resources/CardImage/PL!S-sd1-011-SD.webp", "start": 97623208, "end": 97663258}, {"filename": "/resources/CardImage/PL!S-sd1-012-SD.webp", "start": 97663258, "end": 97703170}, {"filename": "/resources/CardImage/PL!S-sd1-013-SD.webp", "start": 97703170, "end": 97744788}, {"filename": "/resources/CardImage/PL!S-sd1-014-SD.webp", "start": 97744788, "end": 97785380}, {"filename": "/resources/CardImage/PL!S-sd1-015-SD.webp", "start": 97785380, "end": 97820900}, {"filename": "/resources/CardImage/PL!S-sd1-016-SD.webp", "start": 97820900, "end": 97861038}, {"filename": "/resources/CardImage/PL!S-sd1-017-SD.webp", "start": 97861038, "end": 97904434}, {"filename": "/resources/CardImage/PL!S-sd1-018-SD.webp", "start": 97904434, "end": 97946768}, {"filename": "/resources/CardImage/PL!S-sd1-019-SD.webp", "start": 97946768, "end": 97989318}, {"filename": "/resources/CardImage/PL!S-sd1-020-SD.webp", "start": 97989318, "end": 98031150}, {"filename": "/resources/CardImage/PL!S-sd1-021-SD.webp", "start": 98031150, "end": 98067808}, {"filename": "/resources/CardImage/PL!S-sd1-022-SD.webp", "start": 98067808, "end": 98109370}, {"filename": "/resources/CardImage/PL!S-sd1-023-P.webp", "start": 98109370, "end": 98163290}, {"filename": "/resources/CardImage/PL!S-sd1-024-P.webp", "start": 98163290, "end": 98211222}, {"filename": "/resources/CardImage/PL!S-sd1-025-P.webp", "start": 98211222, "end": 98267298}, {"filename": "/resources/CardImage/PL!S-sd1-026-P.webp", "start": 98267298, "end": 98315370}, {"filename": "/resources/CardImage/PL!S-sd1-027-P.webp", "start": 98315370, "end": 98372104}, {"filename": "/resources/CardImage/PL!S-sd1-028-P.webp", "start": 98372104, "end": 98425668}, {"filename": "/resources/CardImage/PL!S-sd1-029-P.webp", "start": 98425668, "end": 98474486}, {"filename": "/resources/CardImage/PL!S-sd1-030-P.webp", "start": 98474486, "end": 98529490}, {"filename": "/resources/CardImage/PL!S-sd1-031-P.webp", "start": 98529490, "end": 98585612}, {"filename": "/resources/CardImage/PL!SIM-bp5-LLE.webp", "start": 98585612, "end": 98647682}, {"filename": "/resources/CardImage/PL!SP-003-PR.webp", "start": 98647682, "end": 98695912}, {"filename": "/resources/CardImage/PL!SP-004-PR.webp", "start": 98695912, "end": 98743864}, {"filename": "/resources/CardImage/PL!SP-005-PR.webp", "start": 98743864, "end": 98791282}, {"filename": "/resources/CardImage/PL!SP-006-PR.webp", "start": 98791282, "end": 98841032}, {"filename": "/resources/CardImage/PL!SP-007-PR.webp", "start": 98841032, "end": 98887050}, {"filename": "/resources/CardImage/PL!SP-008-PR.webp", "start": 98887050, "end": 98934376}, {"filename": "/resources/CardImage/PL!SP-009-PR.webp", "start": 98934376, "end": 98987014}, {"filename": "/resources/CardImage/PL!SP-010-PR.webp", "start": 98987014, "end": 99034896}, {"filename": "/resources/CardImage/PL!SP-011-PR.webp", "start": 99034896, "end": 99087412}, {"filename": "/resources/CardImage/PL!SP-012-PR.webp", "start": 99087412, "end": 99140636}, {"filename": "/resources/CardImage/PL!SP-013-PR.webp", "start": 99140636, "end": 99190194}, {"filename": "/resources/CardImage/PL!SP-PR-001-PR.webp", "start": 99190194, "end": 99258544}, {"filename": "/resources/CardImage/PL!SP-PR-002-PR.webp", "start": 99258544, "end": 99313820}, {"filename": "/resources/CardImage/PL!SP-PR-014-PR2.webp", "start": 99313820, "end": 99359536}, {"filename": "/resources/CardImage/PL!SP-PR-015-PR2.webp", "start": 99359536, "end": 99398996}, {"filename": "/resources/CardImage/PL!SP-PR-016-PR.webp", "start": 99398996, "end": 99461808}, {"filename": "/resources/CardImage/PL!SP-PR-017-PR.webp", "start": 99461808, "end": 99518296}, {"filename": "/resources/CardImage/PL!SP-PR-018-PR.webp", "start": 99518296, "end": 99563454}, {"filename": "/resources/CardImage/PL!SP-PR-019-PR.webp", "start": 99563454, "end": 99627542}, {"filename": "/resources/CardImage/PL!SP-PR-020-PR.webp", "start": 99627542, "end": 99681256}, {"filename": "/resources/CardImage/PL!SP-PR-021-PR.webp", "start": 99681256, "end": 99745236}, {"filename": "/resources/CardImage/PL!SP-PR-022-PR.webp", "start": 99745236, "end": 99800602}, {"filename": "/resources/CardImage/PL!SP-PR-023-PR.webp", "start": 99800602, "end": 99854636}, {"filename": "/resources/CardImage/PL!SP-PR-023-PR2.webp", "start": 99854636, "end": 99906910}, {"filename": "/resources/CardImage/PL!SP-PR-024-PR.webp", "start": 99906910, "end": 99950056}, {"filename": "/resources/CardImage/PL!SP-PR-025-PR.webp", "start": 99950056, "end": 100008614}, {"filename": "/resources/CardImage/PL!SP-PR-026-PR.webp", "start": 100008614, "end": 100073354}, {"filename": "/resources/CardImage/PL!SP-bp1-000-LLE.webp", "start": 100073354, "end": 100115708}, {"filename": "/resources/CardImage/PL!SP-bp1-001-P.webp", "start": 100115708, "end": 100174558}, {"filename": "/resources/CardImage/PL!SP-bp1-001-R.webp", "start": 100174558, "end": 100218268}, {"filename": "/resources/CardImage/PL!SP-bp1-002-P.webp", "start": 100218268, "end": 100277568}, {"filename": "/resources/CardImage/PL!SP-bp1-002-P2.webp", "start": 100277568, "end": 100326594}, {"filename": "/resources/CardImage/PL!SP-bp1-002-R2.webp", "start": 100326594, "end": 100367838}, {"filename": "/resources/CardImage/PL!SP-bp1-002-SEC.webp", "start": 100367838, "end": 100442710}, {"filename": "/resources/CardImage/PL!SP-bp1-003-P.webp", "start": 100442710, "end": 100501128}, {"filename": "/resources/CardImage/PL!SP-bp1-003-P2.webp", "start": 100501128, "end": 100556318}, {"filename": "/resources/CardImage/PL!SP-bp1-003-R2.webp", "start": 100556318, "end": 100601082}, {"filename": "/resources/CardImage/PL!SP-bp1-003-SEC.webp", "start": 100601082, "end": 100683888}, {"filename": "/resources/CardImage/PL!SP-bp1-004-P.webp", "start": 100683888, "end": 100746630}, {"filename": "/resources/CardImage/PL!SP-bp1-004-PR.webp", "start": 100746630, "end": 100792110}, {"filename": "/resources/CardImage/PL!SP-bp1-004-R.webp", "start": 100792110, "end": 100840434}, {"filename": "/resources/CardImage/PL!SP-bp1-005-P.webp", "start": 100840434, "end": 100895144}, {"filename": "/resources/CardImage/PL!SP-bp1-005-R.webp", "start": 100895144, "end": 100938222}, {"filename": "/resources/CardImage/PL!SP-bp1-006-P.webp", "start": 100938222, "end": 100991614}, {"filename": "/resources/CardImage/PL!SP-bp1-006-R.webp", "start": 100991614, "end": 101039870}, {"filename": "/resources/CardImage/PL!SP-bp1-007-P.webp", "start": 101039870, "end": 101101884}, {"filename": "/resources/CardImage/PL!SP-bp1-007-P2.webp", "start": 101101884, "end": 101154036}, {"filename": "/resources/CardImage/PL!SP-bp1-007-R2.webp", "start": 101154036, "end": 101201860}, {"filename": "/resources/CardImage/PL!SP-bp1-007-SEC.webp", "start": 101201860, "end": 101266588}, {"filename": "/resources/CardImage/PL!SP-bp1-008-P.webp", "start": 101266588, "end": 101320542}, {"filename": "/resources/CardImage/PL!SP-bp1-008-R.webp", "start": 101320542, "end": 101366636}, {"filename": "/resources/CardImage/PL!SP-bp1-009-P.webp", "start": 101366636, "end": 101428118}, {"filename": "/resources/CardImage/PL!SP-bp1-009-R.webp", "start": 101428118, "end": 101473952}, {"filename": "/resources/CardImage/PL!SP-bp1-010-P.webp", "start": 101473952, "end": 101537782}, {"filename": "/resources/CardImage/PL!SP-bp1-010-R.webp", "start": 101537782, "end": 101589322}, {"filename": "/resources/CardImage/PL!SP-bp1-011-P.webp", "start": 101589322, "end": 101641742}, {"filename": "/resources/CardImage/PL!SP-bp1-011-R.webp", "start": 101641742, "end": 101686400}, {"filename": "/resources/CardImage/PL!SP-bp1-012-N.webp", "start": 101686400, "end": 101733462}, {"filename": "/resources/CardImage/PL!SP-bp1-013-N.webp", "start": 101733462, "end": 101775080}, {"filename": "/resources/CardImage/PL!SP-bp1-013-PR.webp", "start": 101775080, "end": 101812040}, {"filename": "/resources/CardImage/PL!SP-bp1-014-N.webp", "start": 101812040, "end": 101856536}, {"filename": "/resources/CardImage/PL!SP-bp1-015-N.webp", "start": 101856536, "end": 101900704}, {"filename": "/resources/CardImage/PL!SP-bp1-016-N.webp", "start": 101900704, "end": 101943396}, {"filename": "/resources/CardImage/PL!SP-bp1-016-PR.webp", "start": 101943396, "end": 101989322}, {"filename": "/resources/CardImage/PL!SP-bp1-017-N.webp", "start": 101989322, "end": 102035418}, {"filename": "/resources/CardImage/PL!SP-bp1-018-N.webp", "start": 102035418, "end": 102079602}, {"filename": "/resources/CardImage/PL!SP-bp1-018-PR.webp", "start": 102079602, "end": 102122214}, {"filename": "/resources/CardImage/PL!SP-bp1-019-N.webp", "start": 102122214, "end": 102164134}, {"filename": "/resources/CardImage/PL!SP-bp1-020-N.webp", "start": 102164134, "end": 102208204}, {"filename": "/resources/CardImage/PL!SP-bp1-021-N.webp", "start": 102208204, "end": 102259662}, {"filename": "/resources/CardImage/PL!SP-bp1-022-N.webp", "start": 102259662, "end": 102306368}, {"filename": "/resources/CardImage/PL!SP-bp1-023-L.webp", "start": 102306368, "end": 102357180}, {"filename": "/resources/CardImage/PL!SP-bp1-023-SRL.webp", "start": 102357180, "end": 102415894}, {"filename": "/resources/CardImage/PL!SP-bp1-024-L.webp", "start": 102415894, "end": 102453406}, {"filename": "/resources/CardImage/PL!SP-bp1-024-SRL.webp", "start": 102453406, "end": 102497012}, {"filename": "/resources/CardImage/PL!SP-bp1-025-L.webp", "start": 102497012, "end": 102539032}, {"filename": "/resources/CardImage/PL!SP-bp1-025-L2.webp", "start": 102539032, "end": 102607420}, {"filename": "/resources/CardImage/PL!SP-bp1-025-SECL.webp", "start": 102607420, "end": 102663986}, {"filename": "/resources/CardImage/PL!SP-bp1-025-SRL.webp", "start": 102663986, "end": 102710250}, {"filename": "/resources/CardImage/PL!SP-bp1-026-L.webp", "start": 102710250, "end": 102755522}, {"filename": "/resources/CardImage/PL!SP-bp1-026-SECL.webp", "start": 102755522, "end": 102836948}, {"filename": "/resources/CardImage/PL!SP-bp1-026-SRL.webp", "start": 102836948, "end": 102884200}, {"filename": "/resources/CardImage/PL!SP-bp1-027-L.webp", "start": 102884200, "end": 102934592}, {"filename": "/resources/CardImage/PL!SP-bp1-027-SRL.webp", "start": 102934592, "end": 102989392}, {"filename": "/resources/CardImage/PL!SP-bp1-028-SECE.webp", "start": 102989392, "end": 103055520}, {"filename": "/resources/CardImage/PL!SP-bp1-029-SECE.webp", "start": 103055520, "end": 103127270}, {"filename": "/resources/CardImage/PL!SP-bp1-030-SECE.webp", "start": 103127270, "end": 103185104}, {"filename": "/resources/CardImage/PL!SP-bp1-031-PE.webp", "start": 103185104, "end": 103214516}, {"filename": "/resources/CardImage/PL!SP-bp1-031-PE2.webp", "start": 103214516, "end": 103255248}, {"filename": "/resources/CardImage/PL!SP-bp1-032-PE.webp", "start": 103255248, "end": 103281798}, {"filename": "/resources/CardImage/PL!SP-bp1-032-PE2.webp", "start": 103281798, "end": 103318922}, {"filename": "/resources/CardImage/PL!SP-bp1-033-PE.webp", "start": 103318922, "end": 103345274}, {"filename": "/resources/CardImage/PL!SP-bp1-033-PE2.webp", "start": 103345274, "end": 103380822}, {"filename": "/resources/CardImage/PL!SP-bp1-034-PE.webp", "start": 103380822, "end": 103409878}, {"filename": "/resources/CardImage/PL!SP-bp1-034-PE2.webp", "start": 103409878, "end": 103447398}, {"filename": "/resources/CardImage/PL!SP-bp1-035-PE.webp", "start": 103447398, "end": 103476814}, {"filename": "/resources/CardImage/PL!SP-bp1-035-PE2.webp", "start": 103476814, "end": 103517748}, {"filename": "/resources/CardImage/PL!SP-bp1-E01-RE.webp", "start": 103517748, "end": 103565526}, {"filename": "/resources/CardImage/PL!SP-bp2-001-P.webp", "start": 103565526, "end": 103618930}, {"filename": "/resources/CardImage/PL!SP-bp2-001-P2.webp", "start": 103618930, "end": 103680800}, {"filename": "/resources/CardImage/PL!SP-bp2-001-R2.webp", "start": 103680800, "end": 103744708}, {"filename": "/resources/CardImage/PL!SP-bp2-001-SEC.webp", "start": 103744708, "end": 103800682}, {"filename": "/resources/CardImage/PL!SP-bp2-002-P.webp", "start": 103800682, "end": 103844976}, {"filename": "/resources/CardImage/PL!SP-bp2-002-R.webp", "start": 103844976, "end": 103906094}, {"filename": "/resources/CardImage/PL!SP-bp2-003-P.webp", "start": 103906094, "end": 103955418}, {"filename": "/resources/CardImage/PL!SP-bp2-003-R.webp", "start": 103955418, "end": 104019570}, {"filename": "/resources/CardImage/PL!SP-bp2-004-P.webp", "start": 104019570, "end": 104067672}, {"filename": "/resources/CardImage/PL!SP-bp2-004-R.webp", "start": 104067672, "end": 104133832}, {"filename": "/resources/CardImage/PL!SP-bp2-005-P.webp", "start": 104133832, "end": 104182568}, {"filename": "/resources/CardImage/PL!SP-bp2-005-R.webp", "start": 104182568, "end": 104242504}, {"filename": "/resources/CardImage/PL!SP-bp2-006-P.webp", "start": 104242504, "end": 104296414}, {"filename": "/resources/CardImage/PL!SP-bp2-006-P2.webp", "start": 104296414, "end": 104355092}, {"filename": "/resources/CardImage/PL!SP-bp2-006-R2.webp", "start": 104355092, "end": 104420286}, {"filename": "/resources/CardImage/PL!SP-bp2-006-SEC.webp", "start": 104420286, "end": 104491174}, {"filename": "/resources/CardImage/PL!SP-bp2-007-P.webp", "start": 104491174, "end": 104539584}, {"filename": "/resources/CardImage/PL!SP-bp2-007-R.webp", "start": 104539584, "end": 104601992}, {"filename": "/resources/CardImage/PL!SP-bp2-008-P.webp", "start": 104601992, "end": 104652878}, {"filename": "/resources/CardImage/PL!SP-bp2-008-R.webp", "start": 104652878, "end": 104713974}, {"filename": "/resources/CardImage/PL!SP-bp2-009-P.webp", "start": 104713974, "end": 104772134}, {"filename": "/resources/CardImage/PL!SP-bp2-009-P2.webp", "start": 104772134, "end": 104823622}, {"filename": "/resources/CardImage/PL!SP-bp2-009-R2.webp", "start": 104823622, "end": 104889238}, {"filename": "/resources/CardImage/PL!SP-bp2-009-SEC.webp", "start": 104889238, "end": 104957946}, {"filename": "/resources/CardImage/PL!SP-bp2-010-P.webp", "start": 104957946, "end": 105016484}, {"filename": "/resources/CardImage/PL!SP-bp2-010-P2.webp", "start": 105016484, "end": 105079088}, {"filename": "/resources/CardImage/PL!SP-bp2-010-R2.webp", "start": 105079088, "end": 105145870}, {"filename": "/resources/CardImage/PL!SP-bp2-010-SEC.webp", "start": 105145870, "end": 105215482}, {"filename": "/resources/CardImage/PL!SP-bp2-011-P.webp", "start": 105215482, "end": 105269136}, {"filename": "/resources/CardImage/PL!SP-bp2-011-R.webp", "start": 105269136, "end": 105332716}, {"filename": "/resources/CardImage/PL!SP-bp2-012-N.webp", "start": 105332716, "end": 105382478}, {"filename": "/resources/CardImage/PL!SP-bp2-013-N.webp", "start": 105382478, "end": 105430972}, {"filename": "/resources/CardImage/PL!SP-bp2-014-N.webp", "start": 105430972, "end": 105484014}, {"filename": "/resources/CardImage/PL!SP-bp2-015-N.webp", "start": 105484014, "end": 105534670}, {"filename": "/resources/CardImage/PL!SP-bp2-016-N.webp", "start": 105534670, "end": 105591328}, {"filename": "/resources/CardImage/PL!SP-bp2-017-N.webp", "start": 105591328, "end": 105637320}, {"filename": "/resources/CardImage/PL!SP-bp2-018-N.webp", "start": 105637320, "end": 105684650}, {"filename": "/resources/CardImage/PL!SP-bp2-019-N.webp", "start": 105684650, "end": 105732288}, {"filename": "/resources/CardImage/PL!SP-bp2-020-N.webp", "start": 105732288, "end": 105780926}, {"filename": "/resources/CardImage/PL!SP-bp2-021-N.webp", "start": 105780926, "end": 105835898}, {"filename": "/resources/CardImage/PL!SP-bp2-022-N.webp", "start": 105835898, "end": 105885680}, {"filename": "/resources/CardImage/PL!SP-bp2-023-L.webp", "start": 105885680, "end": 105932900}, {"filename": "/resources/CardImage/PL!SP-bp2-023-SRL.webp", "start": 105932900, "end": 105985282}, {"filename": "/resources/CardImage/PL!SP-bp2-024-L.webp", "start": 105985282, "end": 106032470}, {"filename": "/resources/CardImage/PL!SP-bp2-024-SRL.webp", "start": 106032470, "end": 106083810}, {"filename": "/resources/CardImage/PL!SP-bp2-025-L.webp", "start": 106083810, "end": 106116758}, {"filename": "/resources/CardImage/PL!SP-bp2-025-SRL.webp", "start": 106116758, "end": 106151814}, {"filename": "/resources/CardImage/PL!SP-bp2-026-L.webp", "start": 106151814, "end": 106175004}, {"filename": "/resources/CardImage/PL!SP-bp2-026-SRL.webp", "start": 106175004, "end": 106198260}, {"filename": "/resources/CardImage/PL!SP-bp2-027-L.webp", "start": 106198260, "end": 106243698}, {"filename": "/resources/CardImage/PL!SP-bp2-027-SRL.webp", "start": 106243698, "end": 106293570}, {"filename": "/resources/CardImage/PL!SP-bp2-028-SECE.webp", "start": 106293570, "end": 106339102}, {"filename": "/resources/CardImage/PL!SP-bp2-029-SECE.webp", "start": 106339102, "end": 106395576}, {"filename": "/resources/CardImage/PL!SP-bp2-030-SECE.webp", "start": 106395576, "end": 106452586}, {"filename": "/resources/CardImage/PL!SP-bp2-031-SECE.webp", "start": 106452586, "end": 106506140}, {"filename": "/resources/CardImage/PL!SP-bp2-032-PE.webp", "start": 106506140, "end": 106533794}, {"filename": "/resources/CardImage/PL!SP-bp2-032-PE2.webp", "start": 106533794, "end": 106573396}, {"filename": "/resources/CardImage/PL!SP-bp2-033-PE.webp", "start": 106573396, "end": 106600930}, {"filename": "/resources/CardImage/PL!SP-bp2-033-PE2.webp", "start": 106600930, "end": 106637242}, {"filename": "/resources/CardImage/PL!SP-bp2-034-PE.webp", "start": 106637242, "end": 106664434}, {"filename": "/resources/CardImage/PL!SP-bp2-034-PE2.webp", "start": 106664434, "end": 106701430}, {"filename": "/resources/CardImage/PL!SP-bp2-035-PE.webp", "start": 106701430, "end": 106732800}, {"filename": "/resources/CardImage/PL!SP-bp2-035-PE2.webp", "start": 106732800, "end": 106775954}, {"filename": "/resources/CardImage/PL!SP-bp2-100-LLE.webp", "start": 106775954, "end": 106851140}, {"filename": "/resources/CardImage/PL!SP-bp2-200-LLE.webp", "start": 106851140, "end": 106918998}, {"filename": "/resources/CardImage/PL!SP-bp2-E01-RE.webp", "start": 106918998, "end": 106968342}, {"filename": "/resources/CardImage/PL!SP-bp2-SECL.webp", "start": 106968342, "end": 107032100}, {"filename": "/resources/CardImage/PL!SP-bp4-001-P.webp", "start": 107032100, "end": 107079196}, {"filename": "/resources/CardImage/PL!SP-bp4-001-R.webp", "start": 107079196, "end": 107129400}, {"filename": "/resources/CardImage/PL!SP-bp4-002-P.webp", "start": 107129400, "end": 107174882}, {"filename": "/resources/CardImage/PL!SP-bp4-002-R.webp", "start": 107174882, "end": 107226420}, {"filename": "/resources/CardImage/PL!SP-bp4-003-P.webp", "start": 107226420, "end": 107271486}, {"filename": "/resources/CardImage/PL!SP-bp4-003-R.webp", "start": 107271486, "end": 107324404}, {"filename": "/resources/CardImage/PL!SP-bp4-004-P.webp", "start": 107324404, "end": 107376036}, {"filename": "/resources/CardImage/PL!SP-bp4-004-P2.webp", "start": 107376036, "end": 107430806}, {"filename": "/resources/CardImage/PL!SP-bp4-004-R2.webp", "start": 107430806, "end": 107485140}, {"filename": "/resources/CardImage/PL!SP-bp4-004-SEC.webp", "start": 107485140, "end": 107554022}, {"filename": "/resources/CardImage/PL!SP-bp4-005-P.webp", "start": 107554022, "end": 107602312}, {"filename": "/resources/CardImage/PL!SP-bp4-005-P2.webp", "start": 107602312, "end": 107655970}, {"filename": "/resources/CardImage/PL!SP-bp4-005-R2.webp", "start": 107655970, "end": 107711686}, {"filename": "/resources/CardImage/PL!SP-bp4-005-SEC.webp", "start": 107711686, "end": 107773538}, {"filename": "/resources/CardImage/PL!SP-bp4-006-P.webp", "start": 107773538, "end": 107821620}, {"filename": "/resources/CardImage/PL!SP-bp4-006-R.webp", "start": 107821620, "end": 107874758}, {"filename": "/resources/CardImage/PL!SP-bp4-007-P.webp", "start": 107874758, "end": 107921800}, {"filename": "/resources/CardImage/PL!SP-bp4-007-R.webp", "start": 107921800, "end": 107979144}, {"filename": "/resources/CardImage/PL!SP-bp4-008-P.webp", "start": 107979144, "end": 108027996}, {"filename": "/resources/CardImage/PL!SP-bp4-008-P2.webp", "start": 108027996, "end": 108076538}, {"filename": "/resources/CardImage/PL!SP-bp4-008-R2.webp", "start": 108076538, "end": 108128594}, {"filename": "/resources/CardImage/PL!SP-bp4-008-SEC.webp", "start": 108128594, "end": 108183880}, {"filename": "/resources/CardImage/PL!SP-bp4-009-P.webp", "start": 108183880, "end": 108228518}, {"filename": "/resources/CardImage/PL!SP-bp4-009-R.webp", "start": 108228518, "end": 108286164}, {"filename": "/resources/CardImage/PL!SP-bp4-010-P.webp", "start": 108286164, "end": 108334526}, {"filename": "/resources/CardImage/PL!SP-bp4-010-R.webp", "start": 108334526, "end": 108384694}, {"filename": "/resources/CardImage/PL!SP-bp4-011-P.webp", "start": 108384694, "end": 108430604}, {"filename": "/resources/CardImage/PL!SP-bp4-011-P2.webp", "start": 108430604, "end": 108477984}, {"filename": "/resources/CardImage/PL!SP-bp4-011-R2.webp", "start": 108477984, "end": 108528636}, {"filename": "/resources/CardImage/PL!SP-bp4-011-SEC.webp", "start": 108528636, "end": 108592778}, {"filename": "/resources/CardImage/PL!SP-bp4-012-N.webp", "start": 108592778, "end": 108641908}, {"filename": "/resources/CardImage/PL!SP-bp4-013-N.webp", "start": 108641908, "end": 108689528}, {"filename": "/resources/CardImage/PL!SP-bp4-014-N.webp", "start": 108689528, "end": 108737156}, {"filename": "/resources/CardImage/PL!SP-bp4-015-N.webp", "start": 108737156, "end": 108785784}, {"filename": "/resources/CardImage/PL!SP-bp4-016-N.webp", "start": 108785784, "end": 108834506}, {"filename": "/resources/CardImage/PL!SP-bp4-017-N.webp", "start": 108834506, "end": 108884034}, {"filename": "/resources/CardImage/PL!SP-bp4-018-N.webp", "start": 108884034, "end": 108935452}, {"filename": "/resources/CardImage/PL!SP-bp4-019-N.webp", "start": 108935452, "end": 108985434}, {"filename": "/resources/CardImage/PL!SP-bp4-020-N.webp", "start": 108985434, "end": 109035200}, {"filename": "/resources/CardImage/PL!SP-bp4-021-N.webp", "start": 109035200, "end": 109085806}, {"filename": "/resources/CardImage/PL!SP-bp4-022-N.webp", "start": 109085806, "end": 109134394}, {"filename": "/resources/CardImage/PL!SP-bp4-023-L.webp", "start": 109134394, "end": 109169634}, {"filename": "/resources/CardImage/PL!SP-bp4-023-SRL.webp", "start": 109169634, "end": 109214902}, {"filename": "/resources/CardImage/PL!SP-bp4-024-L.webp", "start": 109214902, "end": 109260322}, {"filename": "/resources/CardImage/PL!SP-bp4-024-SECL.webp", "start": 109260322, "end": 109324992}, {"filename": "/resources/CardImage/PL!SP-bp4-024-SRL.webp", "start": 109324992, "end": 109384986}, {"filename": "/resources/CardImage/PL!SP-bp4-025-L.webp", "start": 109384986, "end": 109416292}, {"filename": "/resources/CardImage/PL!SP-bp4-025-SRL.webp", "start": 109416292, "end": 109457480}, {"filename": "/resources/CardImage/PL!SP-bp4-026-L.webp", "start": 109457480, "end": 109496408}, {"filename": "/resources/CardImage/PL!SP-bp4-026-SRL.webp", "start": 109496408, "end": 109547314}, {"filename": "/resources/CardImage/PL!SP-bp4-027-L.webp", "start": 109547314, "end": 109591192}, {"filename": "/resources/CardImage/PL!SP-bp4-027-SRL.webp", "start": 109591192, "end": 109651046}, {"filename": "/resources/CardImage/PL!SP-bp4-028-L.webp", "start": 109651046, "end": 109688016}, {"filename": "/resources/CardImage/PL!SP-bp4-028-SRL.webp", "start": 109688016, "end": 109736690}, {"filename": "/resources/CardImage/PL!SP-bp4-029-L.webp", "start": 109736690, "end": 109770588}, {"filename": "/resources/CardImage/PL!SP-bp4-029-SRL.webp", "start": 109770588, "end": 109814234}, {"filename": "/resources/CardImage/PL!SP-bp4-030-L.webp", "start": 109814234, "end": 109841768}, {"filename": "/resources/CardImage/PL!SP-bp4-030-SRL.webp", "start": 109841768, "end": 109876548}, {"filename": "/resources/CardImage/PL!SP-bp4-031-SECE.webp", "start": 109876548, "end": 109935238}, {"filename": "/resources/CardImage/PL!SP-bp4-032-SECE.webp", "start": 109935238, "end": 109986744}, {"filename": "/resources/CardImage/PL!SP-bp4-033-SECE.webp", "start": 109986744, "end": 110034372}, {"filename": "/resources/CardImage/PL!SP-bp4-034-SECE.webp", "start": 110034372, "end": 110090736}, {"filename": "/resources/CardImage/PL!SP-bp4-035-PE.webp", "start": 110090736, "end": 110115140}, {"filename": "/resources/CardImage/PL!SP-bp4-035-PE2.webp", "start": 110115140, "end": 110147644}, {"filename": "/resources/CardImage/PL!SP-bp4-036-PE.webp", "start": 110147644, "end": 110171700}, {"filename": "/resources/CardImage/PL!SP-bp4-036-PE2.webp", "start": 110171700, "end": 110204154}, {"filename": "/resources/CardImage/PL!SP-bp4-100-LLE.webp", "start": 110204154, "end": 110258662}, {"filename": "/resources/CardImage/PL!SP-bp4-200-LLE.webp", "start": 110258662, "end": 110324102}, {"filename": "/resources/CardImage/PL!SP-bp4-E01-RE.webp", "start": 110324102, "end": 110378844}, {"filename": "/resources/CardImage/PL!SP-bp5-001-AR.webp", "start": 110378844, "end": 110440240}, {"filename": "/resources/CardImage/PL!SP-bp5-001-P.webp", "start": 110440240, "end": 110502690}, {"filename": "/resources/CardImage/PL!SP-bp5-001-R2.webp", "start": 110502690, "end": 110553948}, {"filename": "/resources/CardImage/PL!SP-bp5-001-SEC.webp", "start": 110553948, "end": 110604430}, {"filename": "/resources/CardImage/PL!SP-bp5-002-AR.webp", "start": 110604430, "end": 110666836}, {"filename": "/resources/CardImage/PL!SP-bp5-002-P.webp", "start": 110666836, "end": 110722250}, {"filename": "/resources/CardImage/PL!SP-bp5-002-R2.webp", "start": 110722250, "end": 110768168}, {"filename": "/resources/CardImage/PL!SP-bp5-002-SEC.webp", "start": 110768168, "end": 110824616}, {"filename": "/resources/CardImage/PL!SP-bp5-003-AR.webp", "start": 110824616, "end": 110887116}, {"filename": "/resources/CardImage/PL!SP-bp5-003-P.webp", "start": 110887116, "end": 110943902}, {"filename": "/resources/CardImage/PL!SP-bp5-003-R2.webp", "start": 110943902, "end": 110997028}, {"filename": "/resources/CardImage/PL!SP-bp5-003-SEC.webp", "start": 110997028, "end": 111054402}, {"filename": "/resources/CardImage/PL!SP-bp5-004-AR.webp", "start": 111054402, "end": 111114144}, {"filename": "/resources/CardImage/PL!SP-bp5-004-P.webp", "start": 111114144, "end": 111175172}, {"filename": "/resources/CardImage/PL!SP-bp5-004-R2.webp", "start": 111175172, "end": 111228514}, {"filename": "/resources/CardImage/PL!SP-bp5-004-SEC.webp", "start": 111228514, "end": 111282518}, {"filename": "/resources/CardImage/PL!SP-bp5-005-AR.webp", "start": 111282518, "end": 111347372}, {"filename": "/resources/CardImage/PL!SP-bp5-005-P.webp", "start": 111347372, "end": 111404852}, {"filename": "/resources/CardImage/PL!SP-bp5-005-R2.webp", "start": 111404852, "end": 111462382}, {"filename": "/resources/CardImage/PL!SP-bp5-005-SEC.webp", "start": 111462382, "end": 111524798}, {"filename": "/resources/CardImage/PL!SP-bp5-006-AR.webp", "start": 111524798, "end": 111584722}, {"filename": "/resources/CardImage/PL!SP-bp5-006-P.webp", "start": 111584722, "end": 111642240}, {"filename": "/resources/CardImage/PL!SP-bp5-006-R.webp", "start": 111642240, "end": 111683114}, {"filename": "/resources/CardImage/PL!SP-bp5-007-AR.webp", "start": 111683114, "end": 111741072}, {"filename": "/resources/CardImage/PL!SP-bp5-007-P.webp", "start": 111741072, "end": 111804524}, {"filename": "/resources/CardImage/PL!SP-bp5-007-R.webp", "start": 111804524, "end": 111855606}, {"filename": "/resources/CardImage/PL!SP-bp5-008-AR.webp", "start": 111855606, "end": 111916318}, {"filename": "/resources/CardImage/PL!SP-bp5-008-P.webp", "start": 111916318, "end": 111970904}, {"filename": "/resources/CardImage/PL!SP-bp5-008-R.webp", "start": 111970904, "end": 112018604}, {"filename": "/resources/CardImage/PL!SP-bp5-009-AR.webp", "start": 112018604, "end": 112078596}, {"filename": "/resources/CardImage/PL!SP-bp5-009-P.webp", "start": 112078596, "end": 112136206}, {"filename": "/resources/CardImage/PL!SP-bp5-009-R.webp", "start": 112136206, "end": 112176196}, {"filename": "/resources/CardImage/PL!SP-bp5-010-AR.webp", "start": 112176196, "end": 112241540}, {"filename": "/resources/CardImage/PL!SP-bp5-010-P.webp", "start": 112241540, "end": 112297182}, {"filename": "/resources/CardImage/PL!SP-bp5-010-R.webp", "start": 112297182, "end": 112354628}, {"filename": "/resources/CardImage/PL!SP-bp5-011-AR.webp", "start": 112354628, "end": 112411380}, {"filename": "/resources/CardImage/PL!SP-bp5-011-P.webp", "start": 112411380, "end": 112465090}, {"filename": "/resources/CardImage/PL!SP-bp5-011-R.webp", "start": 112465090, "end": 112509182}, {"filename": "/resources/CardImage/PL!SP-bp5-012-N.webp", "start": 112509182, "end": 112561614}, {"filename": "/resources/CardImage/PL!SP-bp5-013-N.webp", "start": 112561614, "end": 112617060}, {"filename": "/resources/CardImage/PL!SP-bp5-014-N.webp", "start": 112617060, "end": 112670874}, {"filename": "/resources/CardImage/PL!SP-bp5-015-N.webp", "start": 112670874, "end": 112723292}, {"filename": "/resources/CardImage/PL!SP-bp5-016-N.webp", "start": 112723292, "end": 112773898}, {"filename": "/resources/CardImage/PL!SP-bp5-017-N.webp", "start": 112773898, "end": 112826670}, {"filename": "/resources/CardImage/PL!SP-bp5-018-N.webp", "start": 112826670, "end": 112876970}, {"filename": "/resources/CardImage/PL!SP-bp5-019-N.webp", "start": 112876970, "end": 112928740}, {"filename": "/resources/CardImage/PL!SP-bp5-020-N.webp", "start": 112928740, "end": 112983886}, {"filename": "/resources/CardImage/PL!SP-bp5-021-N.webp", "start": 112983886, "end": 113036048}, {"filename": "/resources/CardImage/PL!SP-bp5-022-N.webp", "start": 113036048, "end": 113088010}, {"filename": "/resources/CardImage/PL!SP-bp5-023-L.webp", "start": 113088010, "end": 113127498}, {"filename": "/resources/CardImage/PL!SP-bp5-024-L.webp", "start": 113127498, "end": 113174824}, {"filename": "/resources/CardImage/PL!SP-bp5-025-L.webp", "start": 113174824, "end": 113217522}, {"filename": "/resources/CardImage/PL!SP-bp5-026-L.webp", "start": 113217522, "end": 113258580}, {"filename": "/resources/CardImage/PL!SP-bp5-027-L.webp", "start": 113258580, "end": 113302610}, {"filename": "/resources/CardImage/PL!SP-bp5-111-P2.webp", "start": 113302610, "end": 113355420}, {"filename": "/resources/CardImage/PL!SP-bp5-111-R.webp", "start": 113355420, "end": 113398086}, {"filename": "/resources/CardImage/PL!SP-bp5-222-P2.webp", "start": 113398086, "end": 113449862}, {"filename": "/resources/CardImage/PL!SP-bp5-222-R.webp", "start": 113449862, "end": 113494438}, {"filename": "/resources/CardImage/PL!SP-bp5-E01-PE.webp", "start": 113494438, "end": 113547820}, {"filename": "/resources/CardImage/PL!SP-bp5-E01-SECE.webp", "start": 113547820, "end": 113589228}, {"filename": "/resources/CardImage/PL!SP-bp5-E02-PE.webp", "start": 113589228, "end": 113637562}, {"filename": "/resources/CardImage/PL!SP-bp5-E02-SECE.webp", "start": 113637562, "end": 113685422}, {"filename": "/resources/CardImage/PL!SP-bp5-E03-PE.webp", "start": 113685422, "end": 113738504}, {"filename": "/resources/CardImage/PL!SP-bp5-E03-SECE.webp", "start": 113738504, "end": 113785436}, {"filename": "/resources/CardImage/PL!SP-bp5-E04-PE.webp", "start": 113785436, "end": 113838162}, {"filename": "/resources/CardImage/PL!SP-bp5-E04-SECE.webp", "start": 113838162, "end": 113883522}, {"filename": "/resources/CardImage/PL!SP-bp5-E05-PE.webp", "start": 113883522, "end": 113936116}, {"filename": "/resources/CardImage/PL!SP-bp5-E05-SECE.webp", "start": 113936116, "end": 113983748}, {"filename": "/resources/CardImage/PL!SP-bp5-E06-PE.webp", "start": 113983748, "end": 114037326}, {"filename": "/resources/CardImage/PL!SP-bp5-E07-PE.webp", "start": 114037326, "end": 114089040}, {"filename": "/resources/CardImage/PL!SP-bp5-E08-PE.webp", "start": 114089040, "end": 114141156}, {"filename": "/resources/CardImage/PL!SP-bp5-E09-PE.webp", "start": 114141156, "end": 114189512}, {"filename": "/resources/CardImage/PL!SP-bp5-E10-PE.webp", "start": 114189512, "end": 114241804}, {"filename": "/resources/CardImage/PL!SP-bp5-E11-PE.webp", "start": 114241804, "end": 114295124}, {"filename": "/resources/CardImage/PL!SP-bp5-LLE.webp", "start": 114295124, "end": 114368326}, {"filename": "/resources/CardImage/PL!SP-bp7-001-P.webp", "start": 114368326, "end": 114425266}, {"filename": "/resources/CardImage/PL!SP-bp7-001-R.webp", "start": 114425266, "end": 114489524}, {"filename": "/resources/CardImage/PL!SP-bp7-002-P.webp", "start": 114489524, "end": 114543336}, {"filename": "/resources/CardImage/PL!SP-bp7-002-R.webp", "start": 114543336, "end": 114603680}, {"filename": "/resources/CardImage/PL!SP-bp7-003-P.webp", "start": 114603680, "end": 114661858}, {"filename": "/resources/CardImage/PL!SP-bp7-003-P2.webp", "start": 114661858, "end": 114720782}, {"filename": "/resources/CardImage/PL!SP-bp7-003-R2.webp", "start": 114720782, "end": 114787168}, {"filename": "/resources/CardImage/PL!SP-bp7-003-SEC.webp", "start": 114787168, "end": 114864326}, {"filename": "/resources/CardImage/PL!SP-bp7-004-P.webp", "start": 114864326, "end": 114919308}, {"filename": "/resources/CardImage/PL!SP-bp7-004-R.webp", "start": 114919308, "end": 114983184}, {"filename": "/resources/CardImage/PL!SP-bp7-005-P.webp", "start": 114983184, "end": 115041322}, {"filename": "/resources/CardImage/PL!SP-bp7-005-P2.webp", "start": 115041322, "end": 115106734}, {"filename": "/resources/CardImage/PL!SP-bp7-005-R2.webp", "start": 115106734, "end": 115172402}, {"filename": "/resources/CardImage/PL!SP-bp7-005-SEC.webp", "start": 115172402, "end": 115244886}, {"filename": "/resources/CardImage/PL!SP-bp7-006-P.webp", "start": 115244886, "end": 115306006}, {"filename": "/resources/CardImage/PL!SP-bp7-006-P2.webp", "start": 115306006, "end": 115364852}, {"filename": "/resources/CardImage/PL!SP-bp7-006-R2.webp", "start": 115364852, "end": 115431600}, {"filename": "/resources/CardImage/PL!SP-bp7-006-SEC.webp", "start": 115431600, "end": 115499976}, {"filename": "/resources/CardImage/PL!SP-bp7-007-P.webp", "start": 115499976, "end": 115563492}, {"filename": "/resources/CardImage/PL!SP-bp7-007-P2.webp", "start": 115563492, "end": 115628568}, {"filename": "/resources/CardImage/PL!SP-bp7-007-R2.webp", "start": 115628568, "end": 115695670}, {"filename": "/resources/CardImage/PL!SP-bp7-007-SEC.webp", "start": 115695670, "end": 115780070}, {"filename": "/resources/CardImage/PL!SP-bp7-008-P.webp", "start": 115780070, "end": 115836800}, {"filename": "/resources/CardImage/PL!SP-bp7-008-R.webp", "start": 115836800, "end": 115899826}, {"filename": "/resources/CardImage/PL!SP-bp7-009-P.webp", "start": 115899826, "end": 115957026}, {"filename": "/resources/CardImage/PL!SP-bp7-009-R.webp", "start": 115957026, "end": 116019484}, {"filename": "/resources/CardImage/PL!SP-bp7-010-P.webp", "start": 116019484, "end": 116077380}, {"filename": "/resources/CardImage/PL!SP-bp7-010-R.webp", "start": 116077380, "end": 116141210}, {"filename": "/resources/CardImage/PL!SP-bp7-011-P.webp", "start": 116141210, "end": 116196814}, {"filename": "/resources/CardImage/PL!SP-bp7-011-R.webp", "start": 116196814, "end": 116258292}, {"filename": "/resources/CardImage/PL!SP-bp7-012-N.webp", "start": 116258292, "end": 116305342}, {"filename": "/resources/CardImage/PL!SP-bp7-013-N.webp", "start": 116305342, "end": 116352094}, {"filename": "/resources/CardImage/PL!SP-bp7-014-N.webp", "start": 116352094, "end": 116395722}, {"filename": "/resources/CardImage/PL!SP-bp7-015-N.webp", "start": 116395722, "end": 116445204}, {"filename": "/resources/CardImage/PL!SP-bp7-016-N.webp", "start": 116445204, "end": 116493696}, {"filename": "/resources/CardImage/PL!SP-bp7-017-N.webp", "start": 116493696, "end": 116539582}, {"filename": "/resources/CardImage/PL!SP-bp7-018-N.webp", "start": 116539582, "end": 116585524}, {"filename": "/resources/CardImage/PL!SP-bp7-019-N.webp", "start": 116585524, "end": 116632960}, {"filename": "/resources/CardImage/PL!SP-bp7-020-N.webp", "start": 116632960, "end": 116685824}, {"filename": "/resources/CardImage/PL!SP-bp7-021-N.webp", "start": 116685824, "end": 116731986}, {"filename": "/resources/CardImage/PL!SP-bp7-022-N.webp", "start": 116731986, "end": 116777144}, {"filename": "/resources/CardImage/PL!SP-bp7-023-L.webp", "start": 116777144, "end": 116816714}, {"filename": "/resources/CardImage/PL!SP-bp7-023-SECL.webp", "start": 116816714, "end": 116884352}, {"filename": "/resources/CardImage/PL!SP-bp7-024-L.webp", "start": 116884352, "end": 116923168}, {"filename": "/resources/CardImage/PL!SP-bp7-024-SECL.webp", "start": 116923168, "end": 116993164}, {"filename": "/resources/CardImage/PL!SP-bp7-025-L.webp", "start": 116993164, "end": 117021426}, {"filename": "/resources/CardImage/PL!SP-bp7-026-L.webp", "start": 117021426, "end": 117054508}, {"filename": "/resources/CardImage/PL!SP-bp7-027-L.webp", "start": 117054508, "end": 117100948}, {"filename": "/resources/CardImage/PL!SP-bp7-028-L.webp", "start": 117100948, "end": 117148172}, {"filename": "/resources/CardImage/PL!SP-bp7-E01-SECE.webp", "start": 117148172, "end": 117211186}, {"filename": "/resources/CardImage/PL!SP-bp7-E02-SECE.webp", "start": 117211186, "end": 117266952}, {"filename": "/resources/CardImage/PL!SP-bp7-E03-SECE.webp", "start": 117266952, "end": 117322112}, {"filename": "/resources/CardImage/PL!SP-bp7-E04-SECE.webp", "start": 117322112, "end": 117389554}, {"filename": "/resources/CardImage/PL!SP-bp7-E05-PE.webp", "start": 117389554, "end": 117432642}, {"filename": "/resources/CardImage/PL!SP-bp7-E05-PE2.webp", "start": 117432642, "end": 117481460}, {"filename": "/resources/CardImage/PL!SP-bp7-E06-PE.webp", "start": 117481460, "end": 117524508}, {"filename": "/resources/CardImage/PL!SP-bp7-E06-PE2.webp", "start": 117524508, "end": 117572338}, {"filename": "/resources/CardImage/PL!SP-bp7-E07-PE.webp", "start": 117572338, "end": 117615432}, {"filename": "/resources/CardImage/PL!SP-bp7-E07-PE2.webp", "start": 117615432, "end": 117666050}, {"filename": "/resources/CardImage/PL!SP-bp7-E08-PE.webp", "start": 117666050, "end": 117710540}, {"filename": "/resources/CardImage/PL!SP-bp7-E08-PE2.webp", "start": 117710540, "end": 117756890}, {"filename": "/resources/CardImage/PL!SP-pb1-001-P2.webp", "start": 117756890, "end": 117810224}, {"filename": "/resources/CardImage/PL!SP-pb1-001-PR.webp", "start": 117810224, "end": 117868132}, {"filename": "/resources/CardImage/PL!SP-pb1-001-R.webp", "start": 117868132, "end": 117921936}, {"filename": "/resources/CardImage/PL!SP-pb1-002-P2.webp", "start": 117921936, "end": 117978032}, {"filename": "/resources/CardImage/PL!SP-pb1-002-R.webp", "start": 117978032, "end": 118027930}, {"filename": "/resources/CardImage/PL!SP-pb1-003-P2.webp", "start": 118027930, "end": 118084084}, {"filename": "/resources/CardImage/PL!SP-pb1-003-R.webp", "start": 118084084, "end": 118139848}, {"filename": "/resources/CardImage/PL!SP-pb1-004-P2.webp", "start": 118139848, "end": 118195612}, {"filename": "/resources/CardImage/PL!SP-pb1-004-R.webp", "start": 118195612, "end": 118250346}, {"filename": "/resources/CardImage/PL!SP-pb1-005-P2.webp", "start": 118250346, "end": 118305336}, {"filename": "/resources/CardImage/PL!SP-pb1-005-R.webp", "start": 118305336, "end": 118357892}, {"filename": "/resources/CardImage/PL!SP-pb1-006-P2.webp", "start": 118357892, "end": 118410432}, {"filename": "/resources/CardImage/PL!SP-pb1-006-R.webp", "start": 118410432, "end": 118461704}, {"filename": "/resources/CardImage/PL!SP-pb1-007-P2.webp", "start": 118461704, "end": 118510756}, {"filename": "/resources/CardImage/PL!SP-pb1-007-R.webp", "start": 118510756, "end": 118562976}, {"filename": "/resources/CardImage/PL!SP-pb1-008-P2.webp", "start": 118562976, "end": 118617436}, {"filename": "/resources/CardImage/PL!SP-pb1-008-R.webp", "start": 118617436, "end": 118672060}, {"filename": "/resources/CardImage/PL!SP-pb1-009-P2.webp", "start": 118672060, "end": 118724124}, {"filename": "/resources/CardImage/PL!SP-pb1-009-R.webp", "start": 118724124, "end": 118776250}, {"filename": "/resources/CardImage/PL!SP-pb1-010-P2.webp", "start": 118776250, "end": 118826436}, {"filename": "/resources/CardImage/PL!SP-pb1-010-R.webp", "start": 118826436, "end": 118874292}, {"filename": "/resources/CardImage/PL!SP-pb1-011-P2.webp", "start": 118874292, "end": 118927856}, {"filename": "/resources/CardImage/PL!SP-pb1-011-R.webp", "start": 118927856, "end": 118981826}, {"filename": "/resources/CardImage/PL!SP-pb1-012-N.webp", "start": 118981826, "end": 119027386}, {"filename": "/resources/CardImage/PL!SP-pb1-012-PR.webp", "start": 119027386, "end": 119063364}, {"filename": "/resources/CardImage/PL!SP-pb1-013-N.webp", "start": 119063364, "end": 119107018}, {"filename": "/resources/CardImage/PL!SP-pb1-013-PR.webp", "start": 119107018, "end": 119140486}, {"filename": "/resources/CardImage/PL!SP-pb1-014-N.webp", "start": 119140486, "end": 119190650}, {"filename": "/resources/CardImage/PL!SP-pb1-014-PR.webp", "start": 119190650, "end": 119229678}, {"filename": "/resources/CardImage/PL!SP-pb1-015-N.webp", "start": 119229678, "end": 119283794}, {"filename": "/resources/CardImage/PL!SP-pb1-016-N.webp", "start": 119283794, "end": 119331010}, {"filename": "/resources/CardImage/PL!SP-pb1-017-N.webp", "start": 119331010, "end": 119382626}, {"filename": "/resources/CardImage/PL!SP-pb1-018-N.webp", "start": 119382626, "end": 119429498}, {"filename": "/resources/CardImage/PL!SP-pb1-019-N.webp", "start": 119429498, "end": 119475518}, {"filename": "/resources/CardImage/PL!SP-pb1-020-N.webp", "start": 119475518, "end": 119524058}, {"filename": "/resources/CardImage/PL!SP-pb1-021-N.webp", "start": 119524058, "end": 119575534}, {"filename": "/resources/CardImage/PL!SP-pb1-022-N.webp", "start": 119575534, "end": 119623728}, {"filename": "/resources/CardImage/PL!SP-pb1-023-L.webp", "start": 119623728, "end": 119669432}, {"filename": "/resources/CardImage/PL!SP-pb1-023-SRL.webp", "start": 119669432, "end": 119721946}, {"filename": "/resources/CardImage/PL!SP-pb1-024-L.webp", "start": 119721946, "end": 119769002}, {"filename": "/resources/CardImage/PL!SP-pb1-024-SRL.webp", "start": 119769002, "end": 119821920}, {"filename": "/resources/CardImage/PL!SP-pb1-025-L.webp", "start": 119821920, "end": 119867894}, {"filename": "/resources/CardImage/PL!SP-pb1-025-SECL.webp", "start": 119867894, "end": 119944550}, {"filename": "/resources/CardImage/PL!SP-pb1-025-SRL.webp", "start": 119944550, "end": 119994726}, {"filename": "/resources/CardImage/PL!SP-pb1-026-L.webp", "start": 119994726, "end": 120037346}, {"filename": "/resources/CardImage/PL!SP-pb1-026-L2.webp", "start": 120037346, "end": 120096178}, {"filename": "/resources/CardImage/PL!SP-pb1-026-SRL.webp", "start": 120096178, "end": 120143192}, {"filename": "/resources/CardImage/PL!SP-pb1-027-PE.webp", "start": 120143192, "end": 120192226}, {"filename": "/resources/CardImage/PL!SP-pb1-027-PE2.webp", "start": 120192226, "end": 120238392}, {"filename": "/resources/CardImage/PL!SP-pb1-028-PE.webp", "start": 120238392, "end": 120286528}, {"filename": "/resources/CardImage/PL!SP-pb1-028-PE2.webp", "start": 120286528, "end": 120330620}, {"filename": "/resources/CardImage/PL!SP-pb1-029-PE.webp", "start": 120330620, "end": 120379168}, {"filename": "/resources/CardImage/PL!SP-pb1-029-PE2.webp", "start": 120379168, "end": 120426966}, {"filename": "/resources/CardImage/PL!SP-pb1-030-PE.webp", "start": 120426966, "end": 120474208}, {"filename": "/resources/CardImage/PL!SP-pb1-030-PE2.webp", "start": 120474208, "end": 120522228}, {"filename": "/resources/CardImage/PL!SP-pb1-031-PE.webp", "start": 120522228, "end": 120566882}, {"filename": "/resources/CardImage/PL!SP-pb1-031-PE2.webp", "start": 120566882, "end": 120614310}, {"filename": "/resources/CardImage/PL!SP-pb1-032-PE.webp", "start": 120614310, "end": 120662812}, {"filename": "/resources/CardImage/PL!SP-pb1-032-PE2.webp", "start": 120662812, "end": 120711822}, {"filename": "/resources/CardImage/PL!SP-pb1-033-PE.webp", "start": 120711822, "end": 120757448}, {"filename": "/resources/CardImage/PL!SP-pb1-033-PE2.webp", "start": 120757448, "end": 120804444}, {"filename": "/resources/CardImage/PL!SP-pb1-034-PE.webp", "start": 120804444, "end": 120850714}, {"filename": "/resources/CardImage/PL!SP-pb1-034-PE2.webp", "start": 120850714, "end": 120895776}, {"filename": "/resources/CardImage/PL!SP-pb1-035-PE.webp", "start": 120895776, "end": 120945186}, {"filename": "/resources/CardImage/PL!SP-pb1-035-PE2.webp", "start": 120945186, "end": 120990816}, {"filename": "/resources/CardImage/PL!SP-pb1-036-PE.webp", "start": 120990816, "end": 121040968}, {"filename": "/resources/CardImage/PL!SP-pb1-036-PE2.webp", "start": 121040968, "end": 121086648}, {"filename": "/resources/CardImage/PL!SP-pb1-037-PE.webp", "start": 121086648, "end": 121132136}, {"filename": "/resources/CardImage/PL!SP-pb1-037-PE2.webp", "start": 121132136, "end": 121179240}, {"filename": "/resources/CardImage/PL!SP-pb1-038-SRE.webp", "start": 121179240, "end": 121240242}, {"filename": "/resources/CardImage/PL!SP-pb1-039-SRE.webp", "start": 121240242, "end": 121295034}, {"filename": "/resources/CardImage/PL!SP-pb1-040-SRE.webp", "start": 121295034, "end": 121350794}, {"filename": "/resources/CardImage/PL!SP-pb1-041-SRE.webp", "start": 121350794, "end": 121407928}, {"filename": "/resources/CardImage/PL!SP-pb1-042-SRE.webp", "start": 121407928, "end": 121467486}, {"filename": "/resources/CardImage/PL!SP-pb1-043-SRE.webp", "start": 121467486, "end": 121523080}, {"filename": "/resources/CardImage/PL!SP-pb1-044-SECE.webp", "start": 121523080, "end": 121569546}, {"filename": "/resources/CardImage/PL!SP-pb1-044-SRE.webp", "start": 121569546, "end": 121626372}, {"filename": "/resources/CardImage/PL!SP-pb1-045-SRE.webp", "start": 121626372, "end": 121690406}, {"filename": "/resources/CardImage/PL!SP-pb1-046-SRE.webp", "start": 121690406, "end": 121740408}, {"filename": "/resources/CardImage/PL!SP-pb1-047-SRE.webp", "start": 121740408, "end": 121800948}, {"filename": "/resources/CardImage/PL!SP-pb1-048-SRE.webp", "start": 121800948, "end": 121853620}, {"filename": "/resources/CardImage/PL!SP-pb1-049-SRE.webp", "start": 121853620, "end": 121909868}, {"filename": "/resources/CardImage/PL!SP-pb1-050-SRE.webp", "start": 121909868, "end": 121943642}, {"filename": "/resources/CardImage/PL!SP-pb1-051-SRE.webp", "start": 121943642, "end": 121975316}, {"filename": "/resources/CardImage/PL!SP-pb1-052-SRE.webp", "start": 121975316, "end": 122010284}, {"filename": "/resources/CardImage/PL!SP-pb1-053-SRE.webp", "start": 122010284, "end": 122040924}, {"filename": "/resources/CardImage/PL!SP-pb1-054-SRE.webp", "start": 122040924, "end": 122068286}, {"filename": "/resources/CardImage/PL!SP-pb1-100-LLE.webp", "start": 122068286, "end": 122134512}, {"filename": "/resources/CardImage/PL!SP-pb1-200-LLE.webp", "start": 122134512, "end": 122224678}, {"filename": "/resources/CardImage/PL!SP-pb1-300-LLE.webp", "start": 122224678, "end": 122282076}, {"filename": "/resources/CardImage/PL!SP-pb1-400-LLE.webp", "start": 122282076, "end": 122345328}, {"filename": "/resources/CardImage/PL!SP-pb1-500-LLE.webp", "start": 122345328, "end": 122403804}, {"filename": "/resources/CardImage/PL!SP-pb2-000-DUO.webp", "start": 122403804, "end": 122484844}, {"filename": "/resources/CardImage/PL!SP-pb2-000-R.webp", "start": 122484844, "end": 122553036}, {"filename": "/resources/CardImage/PL!SP-pb2-001-PP.webp", "start": 122553036, "end": 122624294}, {"filename": "/resources/CardImage/PL!SP-pb2-001-R.webp", "start": 122624294, "end": 122688968}, {"filename": "/resources/CardImage/PL!SP-pb2-002-PP.webp", "start": 122688968, "end": 122754810}, {"filename": "/resources/CardImage/PL!SP-pb2-002-R.webp", "start": 122754810, "end": 122816412}, {"filename": "/resources/CardImage/PL!SP-pb2-003-PP.webp", "start": 122816412, "end": 122883240}, {"filename": "/resources/CardImage/PL!SP-pb2-003-R.webp", "start": 122883240, "end": 122944762}, {"filename": "/resources/CardImage/PL!SP-pb2-004-PP.webp", "start": 122944762, "end": 123009342}, {"filename": "/resources/CardImage/PL!SP-pb2-004-R.webp", "start": 123009342, "end": 123071948}, {"filename": "/resources/CardImage/PL!SP-pb2-005-PP.webp", "start": 123071948, "end": 123142500}, {"filename": "/resources/CardImage/PL!SP-pb2-005-R.webp", "start": 123142500, "end": 123199210}, {"filename": "/resources/CardImage/PL!SP-pb2-006-PP.webp", "start": 123199210, "end": 123265578}, {"filename": "/resources/CardImage/PL!SP-pb2-006-R.webp", "start": 123265578, "end": 123325232}, {"filename": "/resources/CardImage/PL!SP-pb2-007-PP.webp", "start": 123325232, "end": 123392542}, {"filename": "/resources/CardImage/PL!SP-pb2-007-R.webp", "start": 123392542, "end": 123446340}, {"filename": "/resources/CardImage/PL!SP-pb2-008-PP.webp", "start": 123446340, "end": 123511912}, {"filename": "/resources/CardImage/PL!SP-pb2-008-R.webp", "start": 123511912, "end": 123568698}, {"filename": "/resources/CardImage/PL!SP-pb2-009-PP.webp", "start": 123568698, "end": 123634122}, {"filename": "/resources/CardImage/PL!SP-pb2-009-R.webp", "start": 123634122, "end": 123695004}, {"filename": "/resources/CardImage/PL!SP-pb2-010-PP.webp", "start": 123695004, "end": 123758832}, {"filename": "/resources/CardImage/PL!SP-pb2-010-R.webp", "start": 123758832, "end": 123821208}, {"filename": "/resources/CardImage/PL!SP-pb2-011-PP.webp", "start": 123821208, "end": 123891626}, {"filename": "/resources/CardImage/PL!SP-pb2-011-R.webp", "start": 123891626, "end": 123951630}, {"filename": "/resources/CardImage/PL!SP-pb2-012-P2.webp", "start": 123951630, "end": 124021946}, {"filename": "/resources/CardImage/PL!SP-pb2-012-R.webp", "start": 124021946, "end": 124083298}, {"filename": "/resources/CardImage/PL!SP-pb2-013-P2.webp", "start": 124083298, "end": 124154122}, {"filename": "/resources/CardImage/PL!SP-pb2-013-R.webp", "start": 124154122, "end": 124216224}, {"filename": "/resources/CardImage/PL!SP-pb2-014-P2.webp", "start": 124216224, "end": 124286832}, {"filename": "/resources/CardImage/PL!SP-pb2-014-R.webp", "start": 124286832, "end": 124350300}, {"filename": "/resources/CardImage/PL!SP-pb2-015-P2.webp", "start": 124350300, "end": 124418824}, {"filename": "/resources/CardImage/PL!SP-pb2-015-R.webp", "start": 124418824, "end": 124484092}, {"filename": "/resources/CardImage/PL!SP-pb2-016-P2.webp", "start": 124484092, "end": 124553502}, {"filename": "/resources/CardImage/PL!SP-pb2-016-R.webp", "start": 124553502, "end": 124611512}, {"filename": "/resources/CardImage/PL!SP-pb2-017-P2.webp", "start": 124611512, "end": 124682716}, {"filename": "/resources/CardImage/PL!SP-pb2-017-R.webp", "start": 124682716, "end": 124741584}, {"filename": "/resources/CardImage/PL!SP-pb2-018-P2.webp", "start": 124741584, "end": 124816176}, {"filename": "/resources/CardImage/PL!SP-pb2-018-R.webp", "start": 124816176, "end": 124873454}, {"filename": "/resources/CardImage/PL!SP-pb2-019-P2.webp", "start": 124873454, "end": 124941132}, {"filename": "/resources/CardImage/PL!SP-pb2-019-R.webp", "start": 124941132, "end": 124998330}, {"filename": "/resources/CardImage/PL!SP-pb2-020-P2.webp", "start": 124998330, "end": 125066564}, {"filename": "/resources/CardImage/PL!SP-pb2-020-R.webp", "start": 125066564, "end": 125128278}, {"filename": "/resources/CardImage/PL!SP-pb2-021-P2.webp", "start": 125128278, "end": 125199086}, {"filename": "/resources/CardImage/PL!SP-pb2-021-R.webp", "start": 125199086, "end": 125263166}, {"filename": "/resources/CardImage/PL!SP-pb2-022-P2.webp", "start": 125263166, "end": 125333876}, {"filename": "/resources/CardImage/PL!SP-pb2-022-R.webp", "start": 125333876, "end": 125394370}, {"filename": "/resources/CardImage/PL!SP-pb2-023-N.webp", "start": 125394370, "end": 125445944}, {"filename": "/resources/CardImage/PL!SP-pb2-024-N.webp", "start": 125445944, "end": 125496894}, {"filename": "/resources/CardImage/PL!SP-pb2-025-N.webp", "start": 125496894, "end": 125555486}, {"filename": "/resources/CardImage/PL!SP-pb2-026-N.webp", "start": 125555486, "end": 125616056}, {"filename": "/resources/CardImage/PL!SP-pb2-027-N.webp", "start": 125616056, "end": 125667732}, {"filename": "/resources/CardImage/PL!SP-pb2-028-N.webp", "start": 125667732, "end": 125720552}, {"filename": "/resources/CardImage/PL!SP-pb2-029-N.webp", "start": 125720552, "end": 125783096}, {"filename": "/resources/CardImage/PL!SP-pb2-030-N.webp", "start": 125783096, "end": 125832246}, {"filename": "/resources/CardImage/PL!SP-pb2-031-N.webp", "start": 125832246, "end": 125891008}, {"filename": "/resources/CardImage/PL!SP-pb2-032-N.webp", "start": 125891008, "end": 125943604}, {"filename": "/resources/CardImage/PL!SP-pb2-033-N.webp", "start": 125943604, "end": 125995480}, {"filename": "/resources/CardImage/PL!SP-pb2-034-N.webp", "start": 125995480, "end": 126048090}, {"filename": "/resources/CardImage/PL!SP-pb2-035-N.webp", "start": 126048090, "end": 126101838}, {"filename": "/resources/CardImage/PL!SP-pb2-036-N.webp", "start": 126101838, "end": 126155258}, {"filename": "/resources/CardImage/PL!SP-pb2-037-N.webp", "start": 126155258, "end": 126211854}, {"filename": "/resources/CardImage/PL!SP-pb2-038-N.webp", "start": 126211854, "end": 126258192}, {"filename": "/resources/CardImage/PL!SP-pb2-039-N.webp", "start": 126258192, "end": 126312442}, {"filename": "/resources/CardImage/PL!SP-pb2-040-N.webp", "start": 126312442, "end": 126365644}, {"filename": "/resources/CardImage/PL!SP-pb2-041-N.webp", "start": 126365644, "end": 126416430}, {"filename": "/resources/CardImage/PL!SP-pb2-042-N.webp", "start": 126416430, "end": 126466256}, {"filename": "/resources/CardImage/PL!SP-pb2-043-N.webp", "start": 126466256, "end": 126518596}, {"filename": "/resources/CardImage/PL!SP-pb2-044-N.webp", "start": 126518596, "end": 126571438}, {"filename": "/resources/CardImage/PL!SP-pb2-045-L.webp", "start": 126571438, "end": 126610426}, {"filename": "/resources/CardImage/PL!SP-pb2-046-L.webp", "start": 126610426, "end": 126644816}, {"filename": "/resources/CardImage/PL!SP-pb2-047-L.webp", "start": 126644816, "end": 126687138}, {"filename": "/resources/CardImage/PL!SP-pb2-048-L.webp", "start": 126687138, "end": 126723620}, {"filename": "/resources/CardImage/PL!SP-pb2-049-L.webp", "start": 126723620, "end": 126758726}, {"filename": "/resources/CardImage/PL!SP-pb2-050-L.webp", "start": 126758726, "end": 126796952}, {"filename": "/resources/CardImage/PL!SP-pb2-E00-SECE.webp", "start": 126796952, "end": 126863120}, {"filename": "/resources/CardImage/PL!SP-pb2-E00-SECS.webp", "start": 126863120, "end": 126931128}, {"filename": "/resources/CardImage/PL!SP-pb2-E01-PE2.webp", "start": 126931128, "end": 126996358}, {"filename": "/resources/CardImage/PL!SP-pb2-E02-PE2.webp", "start": 126996358, "end": 127058170}, {"filename": "/resources/CardImage/PL!SP-pb2-E03-PE2.webp", "start": 127058170, "end": 127124064}, {"filename": "/resources/CardImage/PL!SP-pb2-E04-PE2.webp", "start": 127124064, "end": 127188882}, {"filename": "/resources/CardImage/PL!SP-pb2-E05-PE2.webp", "start": 127188882, "end": 127248514}, {"filename": "/resources/CardImage/PL!SP-pb2-E06-PE2.webp", "start": 127248514, "end": 127313860}, {"filename": "/resources/CardImage/PL!SP-pb2-E07-PE2.webp", "start": 127313860, "end": 127378706}, {"filename": "/resources/CardImage/PL!SP-pb2-E08-PE2.webp", "start": 127378706, "end": 127442418}, {"filename": "/resources/CardImage/PL!SP-pb2-E09-PE2.webp", "start": 127442418, "end": 127506372}, {"filename": "/resources/CardImage/PL!SP-pb2-E10-PE2.webp", "start": 127506372, "end": 127567620}, {"filename": "/resources/CardImage/PL!SP-pb2-E11-PE2.webp", "start": 127567620, "end": 127630984}, {"filename": "/resources/CardImage/PL!SP-pb2-E12-LLE.webp", "start": 127630984, "end": 127698080}, {"filename": "/resources/CardImage/PL!SP-pb2-E13-LLE.webp", "start": 127698080, "end": 127752612}, {"filename": "/resources/CardImage/PL!SP-pb2-E14-LLE.webp", "start": 127752612, "end": 127813778}, {"filename": "/resources/CardImage/PL!SP-pb2-E15-LLE.webp", "start": 127813778, "end": 127877718}, {"filename": "/resources/CardImage/PL!SP-pb2-E16-LLE.webp", "start": 127877718, "end": 127945038}, {"filename": "/resources/CardImage/PL!SP-pb2-E17-LLE.webp", "start": 127945038, "end": 128017082}, {"filename": "/resources/CardImage/PL!SP-sd1-001-SD.webp", "start": 128017082, "end": 128087486}, {"filename": "/resources/CardImage/PL!SP-sd1-002-SD.webp", "start": 128087486, "end": 128144466}, {"filename": "/resources/CardImage/PL!SP-sd1-003-P.webp", "start": 128144466, "end": 128204514}, {"filename": "/resources/CardImage/PL!SP-sd1-003-SD.webp", "start": 128204514, "end": 128267618}, {"filename": "/resources/CardImage/PL!SP-sd1-003-SD2.webp", "start": 128267618, "end": 128312618}, {"filename": "/resources/CardImage/PL!SP-sd1-004-SD.webp", "start": 128312618, "end": 128358932}, {"filename": "/resources/CardImage/PL!SP-sd1-005-SD.webp", "start": 128358932, "end": 128410594}, {"filename": "/resources/CardImage/PL!SP-sd1-006-SD.webp", "start": 128410594, "end": 128461772}, {"filename": "/resources/CardImage/PL!SP-sd1-007-SD.webp", "start": 128461772, "end": 128506130}, {"filename": "/resources/CardImage/PL!SP-sd1-008-SD.webp", "start": 128506130, "end": 128552752}, {"filename": "/resources/CardImage/PL!SP-sd1-009-SD.webp", "start": 128552752, "end": 128601770}, {"filename": "/resources/CardImage/PL!SP-sd1-010-SD.webp", "start": 128601770, "end": 128654322}, {"filename": "/resources/CardImage/PL!SP-sd1-011-P.webp", "start": 128654322, "end": 128702334}, {"filename": "/resources/CardImage/PL!SP-sd1-011-SD.webp", "start": 128702334, "end": 128745464}, {"filename": "/resources/CardImage/PL!SP-sd1-011-SD2.webp", "start": 128745464, "end": 128779024}, {"filename": "/resources/CardImage/PL!SP-sd1-012-SD.webp", "start": 128779024, "end": 128832066}, {"filename": "/resources/CardImage/PL!SP-sd1-013-SD.webp", "start": 128832066, "end": 128877840}, {"filename": "/resources/CardImage/PL!SP-sd1-014-SD.webp", "start": 128877840, "end": 128926628}, {"filename": "/resources/CardImage/PL!SP-sd1-015-SD.webp", "start": 128926628, "end": 128975438}, {"filename": "/resources/CardImage/PL!SP-sd1-016-SD.webp", "start": 128975438, "end": 129024006}, {"filename": "/resources/CardImage/PL!SP-sd1-017-SD.webp", "start": 129024006, "end": 129067990}, {"filename": "/resources/CardImage/PL!SP-sd1-018-SD.webp", "start": 129067990, "end": 129118822}, {"filename": "/resources/CardImage/PL!SP-sd1-019-P.webp", "start": 129118822, "end": 129177376}, {"filename": "/resources/CardImage/PL!SP-sd1-019-RM.webp", "start": 129177376, "end": 129228768}, {"filename": "/resources/CardImage/PL!SP-sd1-019-SD.webp", "start": 129228768, "end": 129273244}, {"filename": "/resources/CardImage/PL!SP-sd1-019-SD2.webp", "start": 129273244, "end": 129304498}, {"filename": "/resources/CardImage/PL!SP-sd1-020-P.webp", "start": 129304498, "end": 129361848}, {"filename": "/resources/CardImage/PL!SP-sd1-020-RM.webp", "start": 129361848, "end": 129427030}, {"filename": "/resources/CardImage/PL!SP-sd1-020-SD.webp", "start": 129427030, "end": 129475344}, {"filename": "/resources/CardImage/PL!SP-sd1-020-SD2.webp", "start": 129475344, "end": 129509532}, {"filename": "/resources/CardImage/PL!SP-sd1-021-SD.webp", "start": 129509532, "end": 129557012}, {"filename": "/resources/CardImage/PL!SP-sd1-022-SD.webp", "start": 129557012, "end": 129605934}, {"filename": "/resources/CardImage/PL!SP-sd1-023-SD.webp", "start": 129605934, "end": 129647976}, {"filename": "/resources/CardImage/PL!SP-sd1-023-SRL.webp", "start": 129647976, "end": 129701154}, {"filename": "/resources/CardImage/PL!SP-sd1-024-P.webp", "start": 129701154, "end": 129748278}, {"filename": "/resources/CardImage/PL!SP-sd1-024-SD.webp", "start": 129748278, "end": 129789090}, {"filename": "/resources/CardImage/PL!SP-sd1-024-SD2.webp", "start": 129789090, "end": 129827458}, {"filename": "/resources/CardImage/PL!SP-sd1-024-SRL.webp", "start": 129827458, "end": 129876016}, {"filename": "/resources/CardImage/PL!SP-sd1-025-SD.webp", "start": 129876016, "end": 129907034}, {"filename": "/resources/CardImage/PL!SP-sd1-025-SRL.webp", "start": 129907034, "end": 129940704}, {"filename": "/resources/CardImage/PL!SP-sd1-026-SD.webp", "start": 129940704, "end": 129970450}, {"filename": "/resources/CardImage/PL!SP-sd1-026-SRL.webp", "start": 129970450, "end": 130000258}, {"filename": "/resources/CardImage/PL!SP-sd1-027-P.webp", "start": 130000258, "end": 130047702}, {"filename": "/resources/CardImage/PL!SP-sd1-028-P.webp", "start": 130047702, "end": 130092742}, {"filename": "/resources/CardImage/PL!SP-sd1-029-P.webp", "start": 130092742, "end": 130138874}, {"filename": "/resources/CardImage/PL!SP-sd1-030-P.webp", "start": 130138874, "end": 130188282}, {"filename": "/resources/CardImage/PL!SP-sd1-031-P.webp", "start": 130188282, "end": 130234928}, {"filename": "/resources/CardImage/PL!SP-sd1-032-P.webp", "start": 130234928, "end": 130278160}, {"filename": "/resources/CardImage/PL!SP-sd1-033-P.webp", "start": 130278160, "end": 130324104}, {"filename": "/resources/CardImage/PL!SP-sd1-034-P.webp", "start": 130324104, "end": 130367876}, {"filename": "/resources/CardImage/PL!SP-sd1-035-P.webp", "start": 130367876, "end": 130411762}, {"filename": "/resources/CardImage/PL!SP-sd1-036-P.webp", "start": 130411762, "end": 130456888}, {"filename": "/resources/CardImage/PL!SP-sd1-037-P.webp", "start": 130456888, "end": 130500048}, {"filename": "/resources/CardImage/PL!SP-sd2-000-P.webp", "start": 130500048, "end": 130551780}, {"filename": "/resources/CardImage/PL!SP-sd2-000-SECS.webp", "start": 130551780, "end": 130606678}, {"filename": "/resources/CardImage/PL!SP-sd2-001-SD2.webp", "start": 130606678, "end": 130662350}, {"filename": "/resources/CardImage/PL!SP-sd2-002-P.webp", "start": 130662350, "end": 130719370}, {"filename": "/resources/CardImage/PL!SP-sd2-002-SD2.webp", "start": 130719370, "end": 130768472}, {"filename": "/resources/CardImage/PL!SP-sd2-003-SD2.webp", "start": 130768472, "end": 130814722}, {"filename": "/resources/CardImage/PL!SP-sd2-004-SD2.webp", "start": 130814722, "end": 130866480}, {"filename": "/resources/CardImage/PL!SP-sd2-005-SD2.webp", "start": 130866480, "end": 130914062}, {"filename": "/resources/CardImage/PL!SP-sd2-006-SD2.webp", "start": 130914062, "end": 130965930}, {"filename": "/resources/CardImage/PL!SP-sd2-007-SD2.webp", "start": 130965930, "end": 131012516}, {"filename": "/resources/CardImage/PL!SP-sd2-008-SD2.webp", "start": 131012516, "end": 131052786}, {"filename": "/resources/CardImage/PL!SP-sd2-009-SD2.webp", "start": 131052786, "end": 131100752}, {"filename": "/resources/CardImage/PL!SP-sd2-010-SD2.webp", "start": 131100752, "end": 131150350}, {"filename": "/resources/CardImage/PL!SP-sd2-011-SD2.webp", "start": 131150350, "end": 131202392}, {"filename": "/resources/CardImage/PL!SP-sd2-012-SD2.webp", "start": 131202392, "end": 131253228}, {"filename": "/resources/CardImage/PL!SP-sd2-013-SD2.webp", "start": 131253228, "end": 131301670}, {"filename": "/resources/CardImage/PL!SP-sd2-014-SD2.webp", "start": 131301670, "end": 131348948}, {"filename": "/resources/CardImage/PL!SP-sd2-015-SD2.webp", "start": 131348948, "end": 131394838}, {"filename": "/resources/CardImage/PL!SP-sd2-016-SD2.webp", "start": 131394838, "end": 131444036}, {"filename": "/resources/CardImage/PL!SP-sd2-017-SD2.webp", "start": 131444036, "end": 131493446}, {"filename": "/resources/CardImage/PL!SP-sd2-018-SD2.webp", "start": 131493446, "end": 131547466}, {"filename": "/resources/CardImage/PL!SP-sd2-019-SD2.webp", "start": 131547466, "end": 131592262}, {"filename": "/resources/CardImage/PL!SP-sd2-020-SD2.webp", "start": 131592262, "end": 131639916}, {"filename": "/resources/CardImage/PL!SP-sd2-021-SD2.webp", "start": 131639916, "end": 131684244}, {"filename": "/resources/CardImage/PL!SP-sd2-022-SD2.webp", "start": 131684244, "end": 131731210}, {"filename": "/resources/CardImage/PL!SP-sd2-023-P.webp", "start": 131731210, "end": 131780284}, {"filename": "/resources/CardImage/PL!SP-sd2-023-SD2.webp", "start": 131780284, "end": 131820764}, {"filename": "/resources/CardImage/PL!SP-sd2-024-P.webp", "start": 131820764, "end": 131867828}, {"filename": "/resources/CardImage/PL!SP-sd2-024-SD2.webp", "start": 131867828, "end": 131908476}, {"filename": "/resources/CardImage/PL!SP-sd2-025-P.webp", "start": 131908476, "end": 131947632}, {"filename": "/resources/CardImage/PL!SP-sd2-025-SD2.webp", "start": 131947632, "end": 131983100}, {"filename": "/resources/CardImage/PYHN-PR-001-PR.webp", "start": 131983100, "end": 132033564}, {"filename": "/resources/CardImage/SAMPLEPL!N-PR-022-PR.webp", "start": 132033564, "end": 132090868}, {"filename": "/resources/CardImage/SAMPLEPL!S-bp6-E02-SECE.webp", "start": 132090868, "end": 132138372}, {"filename": "/resources/CardImage/SEC2-PL!HS-bp1-999-SEC2.webp", "start": 132138372, "end": 132199050}, {"filename": "/resources/CardImage/SEC2-PL!HS-bp2-999-SEC2.webp", "start": 132199050, "end": 132258108}, {"filename": "/resources/CardImage/SEC2-PL!N-bp1-999-SEC2.webp", "start": 132258108, "end": 132311608}, {"filename": "/resources/CardImage/SEC2-PL!S-bp2-999-SEC2.webp", "start": 132311608, "end": 132368082}, {"filename": "/resources/CardImage/SEC2-PL!SP-bp1-999-SEC2.webp", "start": 132368082, "end": 132428618}, {"filename": "/resources/CardImage/SEC2-PL!SP-bp2-999-SEC2.webp", "start": 132428618, "end": 132487066}, {"filename": "/resources/Config/CardDeck.json", "start": 132487066, "end": 132487650}, {"filename": "/resources/Config/README.md", "start": 132487650, "end": 132492070}, {"filename": "/resources/Config/cards/SoloCardDatabase.json", "start": 132492070, "end": 132499559}, {"filename": "/resources/Config/cards/nijigaku_sd1.json", "start": 132499559, "end": 132502390}, {"filename": "/resources/Config/imports/BP01.json", "start": 132502390, "end": 132866367}, {"filename": "/resources/Config/imports/BP02.json", "start": 132866367, "end": 133261081}, {"filename": "/resources/Config/imports/BP03.json", "start": 133261081, "end": 133667121}, {"filename": "/resources/Config/imports/BP04.json", "start": 133667121, "end": 134099043}, {"filename": "/resources/Config/imports/BP05.json", "start": 134099043, "end": 134978071}, {"filename": "/resources/Config/imports/BP06.json", "start": 134978071, "end": 135401564}, {"filename": "/resources/Config/imports/BP07.json", "start": 135401564, "end": 135915352}, {"filename": "/resources/Config/imports/CLHS01.json", "start": 135915352, "end": 135950123}, {"filename": "/resources/Config/imports/CardList-effect-review.json", "start": 135950123, "end": 135950344}, {"filename": "/resources/Config/imports/CardList-import-summary.json", "start": 135950344, "end": 135956512}, {"filename": "/resources/Config/imports/HSSD01.json", "start": 135956512, "end": 136019351}, {"filename": "/resources/Config/imports/NSD01.json", "start": 136019351, "end": 136088803}, {"filename": "/resources/Config/imports/NSD02.json", "start": 136088803, "end": 136185677}, {"filename": "/resources/Config/imports/PBHS.json", "start": 136185677, "end": 136379188}, {"filename": "/resources/Config/imports/PBLL.json", "start": 136379188, "end": 136568293}, {"filename": "/resources/Config/imports/PBLS.json", "start": 136568293, "end": 136722452}, {"filename": "/resources/Config/imports/PBN.json", "start": 136722452, "end": 136971959}, {"filename": "/resources/Config/imports/PBSP.json", "start": 136971959, "end": 137113079}, {"filename": "/resources/Config/imports/PBSP02.json", "start": 137113079, "end": 137400589}, {"filename": "/resources/Config/imports/PLSD01.json", "start": 137400589, "end": 137458045}, {"filename": "/resources/Config/imports/PR.json", "start": 137458045, "end": 137875998}, {"filename": "/resources/Config/imports/SPSD01.json", "start": 137875998, "end": 137938054}, {"filename": "/resources/Config/imports/SPSD02.json", "start": 137938054, "end": 138019290}, {"filename": "/resources/Config/imports/SSD01.json", "start": 138019290, "end": 138076119}, {"filename": "/resources/UI/BattleLogPanel.noco", "start": 138076119, "end": 138106472}, {"filename": "/resources/UI/BattleLogRows.noco", "start": 138106472, "end": 138123617}, {"filename": "/resources/UI/CardArea.noco", "start": 138123617, "end": 138137239}, {"filename": "/resources/UI/ConfirmPopup.noco", "start": 138137239, "end": 138165822}, {"filename": "/resources/UI/EnergyCard.noco", "start": 138165822, "end": 138170016}, {"filename": "/resources/UI/EnergyStorage.noco", "start": 138170016, "end": 138200175}, {"filename": "/resources/UI/Field.noco", "start": 138200175, "end": 138240730}, {"filename": "/resources/UI/MatchPauseMenu.noco", "start": 138240730, "end": 138312540}, {"filename": "/resources/UI/MessagePopup.noco", "start": 138312540, "end": 138319372}, {"filename": "/resources/UI/PileViewer.noco", "start": 138319372, "end": 138326644}, {"filename": "/resources/UI/RoomMatchScene.noco", "start": 138326644, "end": 138382225}, {"filename": "/resources/UI/SelectHeartColorPopup.noco", "start": 138382225, "end": 138416769}, {"filename": "/resources/UI/TitleScene.noco", "start": 138416769, "end": 138530560}, {"filename": "/resources/UI/heart01.png", "start": 138530560, "end": 138536334}, {"filename": "/resources/UI/heart02.png", "start": 138536334, "end": 138542009}, {"filename": "/resources/UI/heart03.png", "start": 138542009, "end": 138547403}, {"filename": "/resources/UI/heart04.png", "start": 138547403, "end": 138554022}, {"filename": "/resources/UI/heart05.png", "start": 138554022, "end": 138559018}, {"filename": "/resources/UI/heart06.png", "start": 138559018, "end": 138564370}, {"filename": "/resources/engine/font/fontawesome/LICENSE.txt", "start": 138564370, "end": 138571797}, {"filename": "/resources/engine/font/fontawesome/fontawesome-brands.otf.zstdcmp", "start": 138571797, "end": 138817423}, {"filename": "/resources/engine/font/fontawesome/fontawesome-solid.otf.zstdcmp", "start": 138817423, "end": 139140810}, {"filename": "/resources/engine/font/materialdesignicons/LICENSE", "start": 139140810, "end": 139141802}, {"filename": "/resources/engine/font/materialdesignicons/license.md", "start": 139141802, "end": 139146369}, {"filename": "/resources/engine/font/materialdesignicons/materialdesignicons-webfont.ttf.zstdcmp", "start": 139146369, "end": 139648198}, {"filename": "/resources/engine/font/min/LICENSE", "start": 139648198, "end": 139652499}, {"filename": "/resources/engine/font/min/siv3d-min.woff", "start": 139652499, "end": 139684791}, {"filename": "/resources/engine/font/mplus/LICENSE_E", "start": 139684791, "end": 139685138}, {"filename": "/resources/engine/font/mplus/mplus-1p-black.ttf.zstdcmp", "start": 139685138, "end": 140546333}, {"filename": "/resources/engine/font/mplus/mplus-1p-bold.ttf.zstdcmp", "start": 140546333, "end": 141463536}, {"filename": "/resources/engine/font/mplus/mplus-1p-heavy.ttf.zstdcmp", "start": 141463536, "end": 142395573}, {"filename": "/resources/engine/font/mplus/mplus-1p-light.ttf.zstdcmp", "start": 142395573, "end": 143250932}, {"filename": "/resources/engine/font/mplus/mplus-1p-medium.ttf.zstdcmp", "start": 143250932, "end": 144118710}, {"filename": "/resources/engine/font/mplus/mplus-1p-regular.ttf.zstdcmp", "start": 144118710, "end": 144987578}, {"filename": "/resources/engine/font/mplus/mplus-1p-thin.ttf.zstdcmp", "start": 144987578, "end": 145724940}, {"filename": "/resources/engine/font/noto-cjk/LICENSE", "start": 145724940, "end": 145729241}, {"filename": "/resources/engine/font/noto-cjk/NotoSansCJK-Regular.ttc.zstdcmp", "start": 145729241, "end": 158363337}, {"filename": "/resources/engine/font/noto-cjk/NotoSansJP-Regular.otf.zstdcmp", "start": 158363337, "end": 162118836}, {"filename": "/resources/engine/font/noto-emoji/LICENSE", "start": 162118836, "end": 162123137}, {"filename": "/resources/engine/font/noto-emoji/NotoColorEmoji.ttf.zstdcmp", "start": 162123137, "end": 171695800}, {"filename": "/resources/engine/font/noto-emoji/NotoEmoji-Regular.ttf.zstdcmp", "start": 171695800, "end": 172225222}, {"filename": "/resources/engine/shader/essl/apply_srgb_curve.frag", "start": 172225222, "end": 172227582}, {"filename": "/resources/engine/shader/essl/bitmapfont.frag", "start": 172227582, "end": 172228219}, {"filename": "/resources/engine/shader/essl/copy.frag", "start": 172228219, "end": 172228806}, {"filename": "/resources/engine/shader/essl/forward3d.frag", "start": 172228806, "end": 172230846}, {"filename": "/resources/engine/shader/essl/forward3d.vert", "start": 172230846, "end": 172231712}, {"filename": "/resources/engine/shader/essl/fullscreen_triangle.frag", "start": 172231712, "end": 172232086}, {"filename": "/resources/engine/shader/essl/fullscreen_triangle.vert", "start": 172232086, "end": 172232642}, {"filename": "/resources/engine/shader/essl/gaussian_blur_13.frag", "start": 172232642, "end": 172233906}, {"filename": "/resources/engine/shader/essl/gaussian_blur_5.frag", "start": 172233906, "end": 172234742}, {"filename": "/resources/engine/shader/essl/gaussian_blur_9.frag", "start": 172234742, "end": 172235790}, {"filename": "/resources/engine/shader/essl/line3d.frag", "start": 172235790, "end": 172236126}, {"filename": "/resources/engine/shader/essl/line3d.vert", "start": 172236126, "end": 172236789}, {"filename": "/resources/engine/shader/essl/msdffont.frag", "start": 172236789, "end": 172237754}, {"filename": "/resources/engine/shader/essl/msdffont_outline.frag", "start": 172237754, "end": 172238982}, {"filename": "/resources/engine/shader/essl/msdffont_outlineshadow.frag", "start": 172238982, "end": 172240728}, {"filename": "/resources/engine/shader/essl/msdffont_shadow.frag", "start": 172240728, "end": 172242147}, {"filename": "/resources/engine/shader/essl/msdfprint.frag", "start": 172242147, "end": 172243363}, {"filename": "/resources/engine/shader/essl/quad_warp.frag", "start": 172243363, "end": 172244390}, {"filename": "/resources/engine/shader/essl/quad_warp.vert", "start": 172244390, "end": 172245513}, {"filename": "/resources/engine/shader/essl/round_dot.frag", "start": 172245513, "end": 172246240}, {"filename": "/resources/engine/shader/essl/sdffont.frag", "start": 172246240, "end": 172246922}, {"filename": "/resources/engine/shader/essl/sdffont_outline.frag", "start": 172246922, "end": 172247876}, {"filename": "/resources/engine/shader/essl/sdffont_outlineshadow.frag", "start": 172247876, "end": 172249342}, {"filename": "/resources/engine/shader/essl/sdffont_shadow.frag", "start": 172249342, "end": 172250493}, {"filename": "/resources/engine/shader/essl/shape.frag", "start": 172250493, "end": 172250973}, {"filename": "/resources/engine/shader/essl/sky.frag", "start": 172250973, "end": 172262532}, {"filename": "/resources/engine/shader/essl/sprite.vert", "start": 172262532, "end": 172263282}, {"filename": "/resources/engine/shader/essl/square_dot.frag", "start": 172263282, "end": 172263945}, {"filename": "/resources/engine/shader/essl/texture.frag", "start": 172263945, "end": 172264539}, {"filename": "/resources/engine/shader/wgsl/apply_srgb_curve.frag.wgsl", "start": 172264539, "end": 172267122}, {"filename": "/resources/engine/shader/wgsl/bitmapfont.frag.wgsl", "start": 172267122, "end": 172267957}, {"filename": "/resources/engine/shader/wgsl/copy.frag.wgsl", "start": 172267957, "end": 172268416}, {"filename": "/resources/engine/shader/wgsl/forward3d.frag.wgsl", "start": 172268416, "end": 172271090}, {"filename": "/resources/engine/shader/wgsl/forward3d.vert.wgsl", "start": 172271090, "end": 172272398}, {"filename": "/resources/engine/shader/wgsl/fullscreen_triangle.frag.wgsl", "start": 172272398, "end": 172272761}, {"filename": "/resources/engine/shader/wgsl/fullscreen_triangle.vert.wgsl", "start": 172272761, "end": 172273326}, {"filename": "/resources/engine/shader/wgsl/gaussian_blur_13.frag.wgsl", "start": 172273326, "end": 172275029}, {"filename": "/resources/engine/shader/wgsl/gaussian_blur_5.frag.wgsl", "start": 172275029, "end": 172276122}, {"filename": "/resources/engine/shader/wgsl/gaussian_blur_9.frag.wgsl", "start": 172276122, "end": 172277519}, {"filename": "/resources/engine/shader/wgsl/line3d.frag.wgsl", "start": 172277519, "end": 172277837}, {"filename": "/resources/engine/shader/wgsl/line3d.vert.wgsl", "start": 172277837, "end": 172278786}, {"filename": "/resources/engine/shader/wgsl/linear_to_screen.frag.wgsl", "start": 172278786, "end": 172279416}, {"filename": "/resources/engine/shader/wgsl/msdffont.frag.wgsl", "start": 172279416, "end": 172280643}, {"filename": "/resources/engine/shader/wgsl/msdffont_outline.frag.wgsl", "start": 172280643, "end": 172282185}, {"filename": "/resources/engine/shader/wgsl/msdffont_outlineshadow.frag.wgsl", "start": 172282185, "end": 172284363}, {"filename": "/resources/engine/shader/wgsl/msdffont_shadow.frag.wgsl", "start": 172284363, "end": 172286157}, {"filename": "/resources/engine/shader/wgsl/msdfprint.frag.wgsl", "start": 172286157, "end": 172287657}, {"filename": "/resources/engine/shader/wgsl/quad_warp.frag.wgsl", "start": 172287657, "end": 172289011}, {"filename": "/resources/engine/shader/wgsl/quad_warp.vert.wgsl", "start": 172289011, "end": 172290516}, {"filename": "/resources/engine/shader/wgsl/round_dot.frag.wgsl", "start": 172290516, "end": 172291378}, {"filename": "/resources/engine/shader/wgsl/sdffont.frag.wgsl", "start": 172291378, "end": 172292294}, {"filename": "/resources/engine/shader/wgsl/sdffont_outline.frag.wgsl", "start": 172292294, "end": 172293500}, {"filename": "/resources/engine/shader/wgsl/sdffont_outlineshadow.frag.wgsl", "start": 172293500, "end": 172295363}, {"filename": "/resources/engine/shader/wgsl/sdffont_shadow.frag.wgsl", "start": 172295363, "end": 172296844}, {"filename": "/resources/engine/shader/wgsl/shape.frag.wgsl", "start": 172296844, "end": 172297430}, {"filename": "/resources/engine/shader/wgsl/sky.frag.wgsl", "start": 172297430, "end": 172310328}, {"filename": "/resources/engine/shader/wgsl/sprite.vert.wgsl", "start": 172310328, "end": 172311384}, {"filename": "/resources/engine/shader/wgsl/square_dot.frag.wgsl", "start": 172311384, "end": 172312231}, {"filename": "/resources/engine/shader/wgsl/texture.frag.wgsl", "start": 172312231, "end": 172312974}, {"filename": "/resources/engine/soundfont/GMGSx.sf2.txt", "start": 172312974, "end": 172313183}, {"filename": "/resources/engine/soundfont/GMGSx.sf2.zstdcmp", "start": 172313183, "end": 176137466}, {"filename": "/resources/engine/texture/box-shadow/128.png", "start": 176137466, "end": 176140021}, {"filename": "/resources/engine/texture/box-shadow/16.png", "start": 176140021, "end": 176140284}, {"filename": "/resources/engine/texture/box-shadow/256.png", "start": 176140284, "end": 176145923}, {"filename": "/resources/engine/texture/box-shadow/32.png", "start": 176145923, "end": 176146540}, {"filename": "/resources/engine/texture/box-shadow/64.png", "start": 176146540, "end": 176147909}, {"filename": "/resources/engine/texture/box-shadow/8.png", "start": 176147909, "end": 176148049}], "remote_package_size": 176148049});

  })();

// Photon configures the POSIX WebSocket backend before opening its sockets.
Module['websocket'] = {};
Module['preRun'] = Module['preRun'] || [];
Module['preRun'].push(function () {
    // Realtime Core 6 also configures the Emscripten 4 SOCKFS alias.
    // On 3.1.20 both names must address the same backend settings.
    if (typeof SOCKFS !== 'undefined') SOCKFS.websocketArgs = Module['websocket'];
});

// Decks belong to the player's browser, independently of the static host.
(function () {
    'use strict';
    const key = 'LoveLiveCardWeb.decks.v1';
    const directory = '/resources/Config/decks';
    const maxBytes = 1024 * 1024;
    let status;
    let selector;

    function filename(name) {
        if (typeof name !== 'string' || !name.toLowerCase().endsWith('.json') ||
            name.length > 180 || /[\\/\x00-\x1f]/.test(name) || name === '.json') {
            throw new Error('JSONファイル名を確認してください。');
        }
        return name;
    }

    function validate(text) {
        if (typeof text !== 'string' || new TextEncoder().encode(text).length > maxBytes) {
            throw new Error('JSONは1MB以下にしてください。');
        }
        text = text.replace(/^\uFEFF/, '');
        const deck = JSON.parse(text);
        const legacy = Array.isArray(deck);
        const entries = legacy ? deck : deck && deck.main_deck;
        if (!Array.isArray(entries) || entries.length === 0 || entries.length > 60 ||
            (!legacy && deck.name !== undefined && typeof deck.name !== 'string') ||
            (!legacy && deck.energy_cards !== undefined && deck.energy_cards !== 12)) {
            throw new Error('LoveLiveCardのデッキJSONを選んでください。');
        }
        let count = 0;
        for (const entry of entries) {
            const id = entry && entry[legacy ? 'CardID' : 'card_id'];
            const copies = legacy ? 1 : (entry && entry.count !== undefined ? entry.count : 1);
            if (typeof id !== 'string' || !id.trim() || id.length > 200 ||
                !Number.isInteger(copies) || copies < 1 || copies > 4) {
                throw new Error('カードIDと枚数を確認してください。');
            }
            count += copies;
        }
        if (count !== 30 && count !== 60) throw new Error('メインデッキは30枚または60枚必要です。');
        return text;
    }

    function readStore() {
        const value = JSON.parse(localStorage.getItem(key) || '{}');
        if (!value || Array.isArray(value) || typeof value !== 'object') {
            throw new Error('ブラウザーのデッキ保存データを読み込めませんでした。');
        }
        return Object.assign(Object.create(null), value);
    }

    function list() {
        FS.mkdirTree(directory);
        return FS.readdir(directory).filter(name => name.toLowerCase().endsWith('.json')).sort();
    }

    function refresh() {
        if (!selector) return;
        const previous = selector.value;
        selector.replaceChildren();
        for (const name of list()) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            selector.append(option);
        }
        if (Array.from(selector.options).some(option => option.value === previous)) selector.value = previous;
    }

    function message(text, error = false) {
        if (status) {
            status.textContent = text;
            status.style.color = error ? '#b42318' : '#146c43';
        }
    }

    function restore() {
        FS.mkdirTree(directory);
        let saved;
        try { saved = readStore(); }
        catch (error) { console.warn('Deck restore:', error.message); return; }
        for (const [name, text] of Object.entries(saved)) {
            try {
                filename(name);
                validate(text);
                FS.writeFile(directory + '/' + name, text);
            } catch (error) { console.warn('A saved deck could not be restored:', name, error.message); }
        }
        refresh();
    }

    function persist(path) {
        try {
            const name = filename(path.split('/').pop());
            const text = validate(FS.readFile(path, {encoding: 'utf8'}));
            const saved = readStore();
            saved[name] = text;
            localStorage.setItem(key, JSON.stringify(saved));
            refresh();
            message('「' + name + '」をこの端末のブラウザーに保存しました。');
            return true;
        } catch (error) {
            console.warn('Deck browser storage:', error.message);
            message('端末内の保存に失敗しました。書き出したJSONを保管してください。' + error.message, true);
            return false;
        }
    }

    async function importFiles(files) {
        const saved = readStore();
        const used = new Set([...list(), ...Object.keys(saved)]);
        const additions = [];
        for (const file of files) {
            if (file.size > maxBytes) throw new Error(file.name + ': JSONは1MB以下にしてください。');
            const original = filename(file.name);
            const text = validate(await file.text());
            let name = original;
            let suffix = 2;
            while (used.has(name)) name = original.slice(0, -5) + ' (' + suffix++ + ').json';
            filename(name);
            used.add(name);
            saved[name] = text;
            additions.push({name, text});
        }
        const previous = localStorage.getItem(key);
        localStorage.setItem(key, JSON.stringify(saved));
        const written = [];
        try {
            for (const {name, text} of additions) {
                written.push(name);
                FS.writeFile(directory + '/' + name, text);
            }
        } catch (error) {
            for (const name of written) {
                try { FS.unlink(directory + '/' + name); } catch (_) { /* Write may have failed before creation. */ }
            }
            if (previous === null) localStorage.removeItem(key);
            else localStorage.setItem(key, previous);
            throw error;
        }
        refresh();
        message(additions.length + '件を読み込みました。タイトルからデッキ選択を開くか、一覧の「再読込」を押してください。');
        return additions.map(item => item.name);
    }

    function exportFile(name) {
        filename(name);
        const text = validate(FS.readFile(directory + '/' + name, {encoding: 'utf8'}));
        const url = URL.createObjectURL(new Blob([text], {type: 'application/json;charset=utf-8'}));
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = name;
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        message('「' + name + '」を書き出しました。');
    }

    function mount() {
        const footer = document.getElementById('footer-control');
        if (!footer) return;
        const dialog = document.createElement('dialog');
        dialog.setAttribute('aria-label', '端末のデッキJSON');
        dialog.style.cssText = 'box-sizing:border-box;width: min(520px,94vw);border:1px solid #cbd5e1;border-radius:12px;padding:24px;color:#172033;background:#fff;font:16px sans-serif;';
        const heading = document.createElement('h2');
        heading.textContent = '端末のデッキJSON';
        const description = document.createElement('p');
        description.textContent = 'デッキはこの端末のブラウザーに保存します。別のURLやブラウザーへ移すときは、JSONを書き出して読み込んでください。';
        const label = document.createElement('label');
        label.textContent = 'JSONファイルを読み込む';
        label.style.display = 'block';
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,application/json';
        input.multiple = true;
        input.style.cssText = 'display:block;width:100%;margin:12px 0 24px;';
        label.append(input);
        input.addEventListener('change', async () => {
            try { if (input.files.length) await importFiles(Array.from(input.files)); }
            catch (error) { message('読み込めませんでした: ' + error.message, true); }
            input.value = '';
        });
        const exportLabel = document.createElement('label');
        exportLabel.textContent = '書き出すデッキ';
        selector = document.createElement('select');
        selector.style.cssText = 'display:block;width:100%;margin:12px 0;';
        exportLabel.append(selector);
        const exportButton = document.createElement('button');
        exportButton.textContent = 'JSONを書き出す';
        exportButton.addEventListener('click', () => {
            try { exportFile(selector.value); }
            catch (error) { message('書き出せませんでした: ' + error.message, true); }
        });
        status = document.createElement('p');
        status.setAttribute('role', 'status');
        status.style.minHeight = '2em';
        const close = document.createElement('button');
        close.textContent = 'ゲームに戻る';
        close.addEventListener('click', () => dialog.close());
        dialog.append(heading, description, label, exportLabel, exportButton, status, close);
        document.body.append(dialog);
        const button = document.createElement('button');
        button.textContent = 'デッキJSON';
        button.style.cssText = 'margin:4px auto 4px 8px;padding:8px 12px;cursor:pointer;border-radius:6px;border:0;';
        button.addEventListener('click', () => { refresh(); dialog.showModal(); });
        footer.prepend(button);
        refresh();
    }

    Module['loveLiveDeckStorage'] = {restore, persist, importFiles, list, validate};
    Module['postRun'] = Module['postRun'] || [];
    Module['postRun'].push(mount);
})();

(function() 
{
    const onAbort = Module["onAbort"] || ((e) => {
        window.alert(e);
    });

    Module["onAbort"] = function(e) 
    {
        if (e instanceof WebAssembly.CompileError)
        {
            const additionalMessage = 
                "The application failed to launch with WebAssembly compilation failure. \
Maybe some webassembly features are required to execute this application. \
Please refer https://webassembly.org/roadmap/ to check which webassembly features are supported in your browser. \
\
Original Error: " + e;
            
            onAbort(additionalMessage);
        }
        else if (e instanceof ProgressEvent)
        {
            onAbort("Browser seems to blocked fetch required assets. \
The application has been launched from explorer, which is not supported. \
Please launch emrun or your favorite HTTP server and access this application through it.");
        }
        else if (e instanceof ReferenceError && e.message.includes("WebAssembly"))
        {
            onAbort("The application cannot be launched with this browser. \
The application requires that this browser supports WebAssembly, which seems to be not available in this browser.\
Please use another browser that supports WebAssembly.")
        }
        else
        {
            onAbort(e);
        }
    };
})();

/**
 * @license
 * Copyright 2013 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 *
 * This file gets implicatly injected as a `--pre-js` file when
 * emcc is run with `--emrun`
 */

// Route URL GET parameters to argc+argv
if (typeof window == 'object') {
  Module['arguments'] = window.location.search.substr(1).trim().split('&');
  // If no args were passed arguments = [''], in which case kill the single empty string.
  if (!Module['arguments'][0]) {
    Module['arguments'] = [];
  }
}


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  err('exiting due to exception: ' + toLog);
}

var fs;
var nodePath;
var requireNodeFS;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


requireNodeFS = () => {
  // Use nodePath as the indicator for these not being initialized,
  // since in some environments a global fs may have already been
  // created.
  if (!nodePath) {
    fs = require('fs');
    nodePath = require('path');
  }
};

read_ = function shell_read(filename, binary) {
  requireNodeFS();
  filename = nodePath['normalize'](filename);
  return fs.readFileSync(filename, binary ? undefined : 'utf8');
};

readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  return ret;
};

readAsync = (filename, onload, onerror) => {
  requireNodeFS();
  filename = nodePath['normalize'](filename);
  fs.readFile(filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  // Without this older versions of node (< v15) will log unhandled rejections
  // but return 0, which is not normally the desired behaviour.  This is
  // not be needed with node v15 and about because it is now the default
  // behaviour:
  // See https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
  process['on']('unhandledRejection', function(reason) { throw reason; });

  quit_ = (status, toThrow) => {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js


  read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;
var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': case 'u8': return 1;
    case 'i16': case 'u16': return 2;
    case 'i32': case 'u32': return 4;
    case 'i64': case 'u64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length - 1] === '*') {
        return POINTER_SIZE;
      }
      if (type[0] === 'i') {
        const bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      }
      return 0;
    }
  }
}

// include: runtime_debug.js


// end include: runtime_debug.js


// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime = Module['noExitRuntime'] || false;

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implemenation here for now.
    abort(text);
  }
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.
/**
 * heapOrArray is either a regular array, or a JavaScript typed array view.
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = '';
  // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
  while (idx < endPtr) {
    // For UTF8 byte structure, see:
    // http://en.wikipedia.org/wiki/UTF-8#Description
    // https://www.ietf.org/rfc/rfc2279.txt
    // https://tools.ietf.org/html/rfc3629
    var u0 = heapOrArray[idx++];
    if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 0xF0) == 0xE0) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }

    if (u0 < 0x10000) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var c = str.charCodeAt(i); // possibly a lead surrogate
    if (c <= 0x7F) {
      len++;
    } else if (c <= 0x7FF) {
      len += 2;
    } else if (c >= 0xD800 && c <= 0xDFFF) {
      len += 4; ++i;
    } else {
      len += 3;
    }
  }
  return len;
}

// end include: runtime_strings.js
// Memory management

var HEAP,
/** @type {!ArrayBuffer} */
  buffer,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  SOCKFS.root = FS.mount(SOCKFS, {}, null);

if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  ___funcs_on_exit(); // Native atexit() functions
  callRuntimeCallbacks(__ATEXIT__);
  FS.quit();
TTY.shutdown();
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
var wasmBinaryFile;
  wasmBinaryFile = 'index.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    exports = Asyncify.instrumentWasmExports(exports);

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming == 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        // Avoid instantiateStreaming() on Node.js environment for now, as while
        // Node.js v18.1.0 implements it, it does not have a full fetch()
        // implementation yet.
        //
        // Reference:
        //   https://github.com/emscripten-core/emscripten/pull/16917
        !ENVIRONMENT_IS_NODE &&
        typeof fetch == 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        // Suppress closure warning here since the upstream definition for
        // instantiateStreaming only allows Promise<Repsponse> rather than
        // an actual Response.
        // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
        /** @suppress {checkTypes} */
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  // Also pthreads and wasm workers initialize the wasm instance through this path.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      exports = Asyncify.instrumentWasmExports(exports);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  2009724: () => { return new URLSearchParams(location.search).get('qa') === '1' ? 1 : 0; },  
 2009799: ($0) => { console.warn('Photon: ' + UTF8ToString($0).replace(/[a-fA-F0-9]{8}-[a-fA-F0-9-]{27,}|[a-fA-F0-9]{32}/g, '[redacted]')); },  
 2009923: () => { Module['loveLiveDeckStorage'].restore(); },  
 2009968: ($0) => { Module['loveLiveDeckStorage'].persist(UTF8ToString($0)); },  
 2010029: ($0, $1) => { Module['websocket'].subprotocol = UTF8ToString($0); Module['websocket'].url = UTF8ToString($1); if (typeof SOCKFS !== 'undefined') { SOCKFS.websocketArgs['url'] = UTF8ToString($1); SOCKFS.websocketArgs['subprotocol'] = UTF8ToString($0); } },  
 2010272: () => { setTimeout(function() { _siv3dMaybeAwake(); }, 0) },  
 2010324: () => { setTimeout(function() { _siv3dMaybeAwake(); }, 0) },  
 2010376: () => { if (typeof(AudioContext) !== 'undefined') { return true; } else if (typeof(webkitAudioContext) !== 'undefined') { return true; } return false; },  
 2010523: () => { if ((typeof(navigator.mediaDevices) !== 'undefined') && (typeof(navigator.mediaDevices.getUserMedia) !== 'undefined')) { return true; } else if (typeof(navigator.webkitGetUserMedia) !== 'undefined') { return true; } return false; },  
 2010757: ($0) => { if(typeof(Module['SDL2']) === 'undefined') { Module['SDL2'] = {}; } var SDL2 = Module['SDL2']; if (!$0) { SDL2.audio = {}; } else { SDL2.capture = {}; } if (!SDL2.audioContext) { if (typeof(AudioContext) !== 'undefined') { SDL2.audioContext = new AudioContext(); } else if (typeof(webkitAudioContext) !== 'undefined') { SDL2.audioContext = new webkitAudioContext(); } if (SDL2.audioContext) { autoResumeAudioContext(SDL2.audioContext); } } return SDL2.audioContext === undefined ? -1 : 0; },  
 2011250: () => { var SDL2 = Module['SDL2']; return SDL2.audioContext.sampleRate; },  
 2011318: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; var have_microphone = function(stream) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); SDL2.capture.silenceTimer = undefined; } SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream); SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1); SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) { if ((SDL2 === undefined) || (SDL2.capture === undefined)) { return; } audioProcessingEvent.outputBuffer.getChannelData(0).fill(0.0); SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode); SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination); SDL2.capture.stream = stream; }; var no_microphone = function(error) { }; SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate); SDL2.capture.silenceBuffer.getChannelData(0).fill(0.0); var silence_callback = function() { SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer; dynCall('vi', $2, [$3]); }; SDL2.capture.silenceTimer = setTimeout(silence_callback, ($1 / SDL2.audioContext.sampleRate) * 1000); if ((navigator.mediaDevices !== undefined) && (navigator.mediaDevices.getUserMedia !== undefined)) { navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(have_microphone).catch(no_microphone); } else if (navigator.webkitGetUserMedia !== undefined) { navigator.webkitGetUserMedia({ audio: true, video: false }, have_microphone, no_microphone); } },  
 2012970: ($0, $1, $2, $3) => { var SDL2 = Module['SDL2']; SDL2.audio.scriptProcessorNode = SDL2.audioContext['createScriptProcessor']($1, 0, $0); SDL2.audio.scriptProcessorNode['onaudioprocess'] = function (e) { if ((SDL2 === undefined) || (SDL2.audio === undefined)) { return; } SDL2.audio.currentOutputBuffer = e['outputBuffer']; dynCall('vi', $2, [$3]); }; SDL2.audio.scriptProcessorNode['connect'](SDL2.audioContext['destination']); },  
 2013380: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c); if (channelData.length != $1) { throw 'Web Audio capture buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } if (numChannels == 1) { for (var j = 0; j < $1; ++j) { setValue($0 + (j * 4), channelData[j], 'float'); } } else { for (var j = 0; j < $1; ++j) { setValue($0 + (((j * numChannels) + c) * 4), channelData[j], 'float'); } } } },  
 2013985: ($0, $1) => { var SDL2 = Module['SDL2']; var numChannels = SDL2.audio.currentOutputBuffer['numberOfChannels']; for (var c = 0; c < numChannels; ++c) { var channelData = SDL2.audio.currentOutputBuffer['getChannelData'](c); if (channelData.length != $1) { throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + $1 + ' samples!'; } for (var j = 0; j < $1; ++j) { channelData[j] = HEAPF32[$0 + ((j*numChannels + c) << 2) >> 2]; } } },  
 2014465: ($0) => { var SDL2 = Module['SDL2']; if ($0) { if (SDL2.capture.silenceTimer !== undefined) { clearTimeout(SDL2.capture.silenceTimer); } if (SDL2.capture.stream !== undefined) { var tracks = SDL2.capture.stream.getAudioTracks(); for (var i = 0; i < tracks.length; i++) { SDL2.capture.stream.removeTrack(tracks[i]); } SDL2.capture.stream = undefined; } if (SDL2.capture.scriptProcessorNode !== undefined) { SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {}; SDL2.capture.scriptProcessorNode.disconnect(); SDL2.capture.scriptProcessorNode = undefined; } if (SDL2.capture.mediaStreamNode !== undefined) { SDL2.capture.mediaStreamNode.disconnect(); SDL2.capture.mediaStreamNode = undefined; } if (SDL2.capture.silenceBuffer !== undefined) { SDL2.capture.silenceBuffer = undefined } SDL2.capture = undefined; } else { if (SDL2.audio.scriptProcessorNode != undefined) { SDL2.audio.scriptProcessorNode.disconnect(); SDL2.audio.scriptProcessorNode = undefined; } SDL2.audio = undefined; } if ((SDL2.audioContext !== undefined) && (SDL2.audio === undefined) && (SDL2.capture === undefined)) { SDL2.audioContext.close(); SDL2.audioContext = undefined; } }
};






  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
      if (type.endsWith('*')) type = '*';
      switch (type) {
        case 'i1': return HEAP8[((ptr)>>0)];
        case 'i8': return HEAP8[((ptr)>>0)];
        case 'i16': return HEAP16[((ptr)>>1)];
        case 'i32': return HEAP32[((ptr)>>2)];
        case 'i64': return HEAP32[((ptr)>>2)];
        case 'float': return HEAPF32[((ptr)>>2)];
        case 'double': return HEAPF64[((ptr)>>3)];
        case '*': return HEAPU32[((ptr)>>2)];
        default: abort('invalid type for getValue: ' + type);
      }
      return null;
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only
        // populated if an Error object is thrown, so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
      if (type.endsWith('*')) type = '*';
      switch (type) {
        case 'i1': HEAP8[((ptr)>>0)] = value; break;
        case 'i8': HEAP8[((ptr)>>0)] = value; break;
        case 'i16': HEAP16[((ptr)>>1)] = value; break;
        case 'i32': HEAP32[((ptr)>>2)] = value; break;
        case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
        case 'float': HEAPF32[((ptr)>>2)] = value; break;
        case 'double': HEAPF64[((ptr)>>3)] = value; break;
        case '*': HEAPU32[((ptr)>>2)] = value; break;
        default: abort('invalid type for setValue: ' + type);
      }
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }

  /** @type {function(...*):?} */
  function __ZN3s3d6System15DefaultLanguageEv(
  ) {
  err('missing function: _ZN3s3d6System15DefaultLanguageEv'); abort(-1);
  }

  /** @type {function(...*):?} */
  function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv(
  ) {
  err('missing function: _ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv'); abort(-1);
  }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function ___cxa_allocate_exception(size) {
      // Thrown object is prepended by exception metadata block
      return _malloc(size + 24) + 24;
    }

  var exceptionCaught =  [];
  
  function exception_addRef(info) {
      info.add_ref();
    }
  
  var uncaughtExceptionCount = 0;
  function ___cxa_begin_catch(ptr) {
      var info = new ExceptionInfo(ptr);
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(info);
      exception_addRef(info);
      return info.get_exception_ptr();
    }

  function ___cxa_call_unexpected(exception) {
      err('Unexpected exception thrown, this is not properly supported - aborting');
      ABORT = true;
      throw exception;
    }

  function ___cxa_current_primary_exception() {
      if (!exceptionCaught.length) {
        return 0;
      }
      var info = exceptionCaught[exceptionCaught.length - 1];
      exception_addRef(info);
      return info.excPtr;
    }

  /** @constructor */
  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 24;
  
      this.set_type = function(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      };
  
      this.set_refcount = function(refcount) {
        HEAP32[((this.ptr)>>2)] = refcount;
      };
  
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(12))>>0)] = caught;
      };
  
      this.get_caught = function () {
        return HEAP8[(((this.ptr)+(12))>>0)] != 0;
      };
  
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
      };
  
      this.get_rethrown = function () {
        return HEAP8[(((this.ptr)+(13))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      }
  
      this.add_ref = function() {
        var value = HEAP32[((this.ptr)>>2)];
        HEAP32[((this.ptr)>>2)] = value + 1;
      };
  
      // Returns true if last reference released.
      this.release_ref = function() {
        var prev = HEAP32[((this.ptr)>>2)];
        HEAP32[((this.ptr)>>2)] = prev - 1;
        return prev === 1;
      };
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[((this.excPtr)>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      };
    }
  function ___cxa_free_exception(ptr) {
        return _free(new ExceptionInfo(ptr).ptr);
    }
  function exception_decRef(info) {
      // A rethrown exception can reach refcount 0; it must not be discarded
      // Its next handler will clear the rethrown flag and addRef it, prior to
      // final decRef and destruction here
      if (info.release_ref() && !info.get_rethrown()) {
        var destructor = info.get_destructor();
        if (destructor) {
          // In Wasm, destructors return 'this' as in ARM
          (function(a1) { return dynCall_ii.apply(null, [destructor, a1]); })(info.excPtr);
        }
        ___cxa_free_exception(info.excPtr);
      }
    }
  function ___cxa_decrement_exception_refcount(ptr) {
      if (!ptr) return;
      exception_decRef(new ExceptionInfo(ptr));
    }

  var exceptionLast = 0;
  function ___cxa_end_catch() {
      // Clear state flag.
      _setThrew(0);
      // Call destructor if one is registered then clear it.
      var info = exceptionCaught.pop();
  
      exception_decRef(info);
      exceptionLast = 0; // XXX in decRef?
    }

  function ___resumeException(ptr) {
      if (!exceptionLast) { exceptionLast = ptr; }
      throw ptr;
    }
  function ___cxa_find_matching_catch_2() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }

  function ___cxa_find_matching_catch_3() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }

  function ___cxa_find_matching_catch_4() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }

  function ___cxa_find_matching_catch_5() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }

  function ___cxa_find_matching_catch_7() {
      var thrown = exceptionLast;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < arguments.length; i++) {
        var caughtType = arguments[i];
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    }


  function ___cxa_increment_exception_refcount(ptr) {
      if (!ptr) return;
      exception_addRef(new ExceptionInfo(ptr));
    }

  function ___cxa_rethrow() {
      var info = exceptionCaught.pop();
      if (!info) {
        abort('no exception to throw');
      }
      var ptr = info.excPtr;
      if (!info.get_rethrown()) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        exceptionCaught.push(info);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      }
      exceptionLast = ptr;
      throw ptr;
    }

  function ___cxa_rethrow_primary_exception(ptr) {
      if (!ptr) return;
      var info = new ExceptionInfo(ptr);
      exceptionCaught.push(info);
      info.set_rethrown(true);
      ___cxa_rethrow();
    }

  function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw ptr;
    }

  function ___cxa_uncaught_exceptions() {
      return uncaughtExceptionCount;
    }


  function getRandomDevice() {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return () => { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return () => crypto_module['randomBytes'](1)[0];
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return () => abort("randomDevice");
    }
  
  var PATH = {isAbs:(path) => path.charAt(0) === '/',splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },join2:(l, r) => {
        return PATH.normalize(l + '/' + r);
      }};
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },fsync:function(stream) {
          stream.tty.ops.fsync(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().includes('EOF')) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },fsync:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
      return address;
    }
  
  function alignMemory(size, alignment) {
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (!ptr) return 0;
      return zeroMemory(ptr, size);
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  /** @param {boolean=} noRunDep */
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path, opts = {}) => {
        path = PATH_FS.resolve(FS.cwd(), path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter((p) => !!p), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:(node) => {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:(parentid, name) => {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:(parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:(parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:(node) => {
        FS.hashRemoveNode(node);
      },isRoot:(node) => {
        return node === node.parent;
      },isMountpoint:(node) => {
        return !!node.mounted;
      },isFile:(mode) => {
        return (mode & 61440) === 32768;
      },isDir:(mode) => {
        return (mode & 61440) === 16384;
      },isLink:(mode) => {
        return (mode & 61440) === 40960;
      },isChrdev:(mode) => {
        return (mode & 61440) === 8192;
      },isBlkdev:(mode) => {
        return (mode & 61440) === 24576;
      },isFIFO:(mode) => {
        return (mode & 61440) === 4096;
      },isSocket:(mode) => {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:(str) => {
        var flags = FS.flagModes[str];
        if (typeof flags == 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:(flag) => {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:(node, perms) => {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:(dir) => {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:(dir, name) => {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:(dir, name, isdir) => {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:(node, flags) => {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:(fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:(fd) => FS.streams[fd],createStream:(stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get: function() { return this.node; },
              /** @this {FS.FSStream} */
              set: function(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get: function() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get: function() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set: function(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:(fd) => {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:(stream) => {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:() => {
          throw new FS.ErrnoError(70);
        }},major:(dev) => ((dev) >> 8),minor:(dev) => ((dev) & 0xff),makedev:(ma, mi) => ((ma) << 8 | (mi)),registerDevice:(dev, ops) => {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:(dev) => FS.devices[dev],getMounts:(mount) => {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:(populate, callback) => {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:(type, opts, mountpoint) => {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:(mountpoint) => {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:(parent, name) => {
        return parent.node_ops.lookup(parent, name);
      },mknod:(path, mode, dev) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:(path, mode) => {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:(path, mode) => {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:(path, mode) => {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:(path, mode, dev) => {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:(oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:(old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:(path) => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:(path, dontFollow) => {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:(path) => {
        return FS.stat(path, true);
      },chmod:(path, mode, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:(path, mode) => {
        FS.chmod(path, mode, true);
      },fchmod:(fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:(path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:(path, uid, gid) => {
        FS.chown(path, uid, gid, true);
      },fchown:(fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:(path, len) => {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:(fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:(path, atime, mtime) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:(path, flags, mode) => {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:(stream) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:(stream) => {
        return stream.fd === null;
      },llseek:(stream, offset, whence) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:(stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:(stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:(stream, offset, length) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:(stream, length, position, prot, flags) => {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },msync:(stream, buffer, offset, length, mmapFlags) => {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:(stream) => 0,ioctl:(stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:(path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:(path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:() => FS.currentPath,chdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:() => {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:() => {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:() => {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: () => {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: (parent, name) => {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:() => {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },ensureErrnoError:() => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:() => {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:(input, output, error) => {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:() => {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:(canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:(path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },analyzePath:(path, dontResolveLastLink) => {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:(parent, path, canRead, canWrite) => {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:(parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:(parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:(parent, name, input, output) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: (stream) => {
            stream.seekable = false;
          },
          close: (stream) => {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: (stream, buffer, offset, length, pos /* ignored */) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:(obj) => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:(parent, name, url, canRead, canWrite) => {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr: ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
            if (onerror) onerror();
            removeRunDependency(dep);
          })) {
            return;
          }
          finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, (byteArray) => processData(byteArray), onerror);
        } else {
          processData(url);
        }
      },indexedDB:() => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:() => {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = () => {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = () => {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach((path) => {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = () => { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:(paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = () => {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach((path) => {
            var getRequest = files.get(path);
            getRequest.onsuccess = () => {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  var SOCKFS = {mount:function(mount) {
        // If Module['websocket'] has already been defined (e.g. for configuring
        // the subprotocol/url) use that, if not initialise it to a new object.
        Module['websocket'] = (Module['websocket'] && 
                               ('object' === typeof Module['websocket'])) ? Module['websocket'] : {};
  
        // Add the Event registration mechanism to the exported websocket configuration
        // object so we can register network callbacks from native JavaScript too.
        // For more documentation see system/include/emscripten/emscripten.h
        Module['websocket']._callbacks = {};
        Module['websocket']['on'] = /** @this{Object} */ function(event, callback) {
          if ('function' === typeof callback) {
            this._callbacks[event] = callback;
          }
          return this;
        };
  
        Module['websocket'].emit = /** @this{Object} */ function(event, param) {
          if ('function' === typeof this._callbacks[event]) {
            this._callbacks[event].call(this, param);
          }
        };
  
        // If debug is enabled register simple default logging callbacks for each Event.
  
        return FS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createSocket:function(family, type, protocol) {
        type &= ~526336; // Some applications may pass it; it makes no sense for a single process.
        var streaming = type == 1;
        if (streaming && protocol && protocol != 6) {
          throw new FS.ErrnoError(66); // if SOCK_STREAM, must be tcp or 0.
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          error: null, // Used in getsockopt for SOL_SOCKET/SO_ERROR test
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: 2,
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function(stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function(sock, addr, port) {
          var ws;
  
          if (typeof addr == 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              // runtimeConfig gets set to true if WebSocket runtime configuration is available.
              var runtimeConfig = (Module['websocket'] && ('object' === typeof Module['websocket']));
  
              // The default value is 'ws://' the replace is needed because the compiler replaces '//' comments with '#'
              // comments without checking context, so we'd end up with ws:#, the replace swaps the '#' for '//' again.
              var url = 'ws:#'.replace('#', '//');
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['url']) {
                  url = Module['websocket']['url']; // Fetch runtime WebSocket URL config.
                }
              }
  
              if (url === 'ws://' || url === 'wss://') { // Is the supplied URL config just a prefix, if so complete it.
                var parts = addr.split('/');
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join('/');
              }
  
              // Make the WebSocket subprotocol (Sec-WebSocket-Protocol) default to binary if no configuration is set.
              var subProtocols = 'binary'; // The default value is 'binary'
  
              if (runtimeConfig) {
                if ('string' === typeof Module['websocket']['subprotocol']) {
                  subProtocols = Module['websocket']['subprotocol']; // Fetch runtime WebSocket subprotocol config.
                }
              }
  
              // The default WebSocket options
              var opts = undefined;
  
              if (subProtocols !== 'null') {
                // The regex trims the string (removes spaces at the beginning and end, then splits the string by
                // <any space>,<any space> into an Array. Whitespace removal is important for Websockify and ws.
                subProtocols = subProtocols.replace(/^ +| +$/g,"").split(/ *, */);
  
                opts = subProtocols;
              }
  
              // some webservers (azure) does not support subprotocol header
              if (runtimeConfig && null === Module['websocket']['subprotocol']) {
                subProtocols = 'null';
                opts = undefined;
              }
  
              // If node we use the ws library.
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = /** @type{(typeof WebSocket)} */(require('ws'));
              } else
              {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(23);
            }
          }
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport != 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function(sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function(sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function(sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function(sock, peer) {
          var first = true;
  
          var handleOpen = function () {
  
            Module['websocket'].emit('open', sock.stream.fd);
  
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            if (typeof data == 'string') {
              var encoder = new TextEncoder(); // should be utf-8
              data = encoder.encode(data); // make a typed array from the string
            } else {
              assert(data.byteLength !== undefined); // must receive an ArrayBuffer
              if (data.byteLength == 0) {
                // An empty ArrayBuffer will emit a pseudo disconnect event
                // as recv/recvmsg will return zero which indicates that a socket
                // has performed a shutdown although the connection has not been disconnected yet.
                return;
              }
              data = new Uint8Array(data); // make a typed array view on the array buffer
            }
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
            Module['websocket'].emit('message', sock.stream.fd);
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, isBinary) {
              if (!isBinary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer); // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('close', function() {
              Module['websocket'].emit('close', sock.stream.fd);
            });
            peer.socket.on('error', function(error) {
              // Although the ws library may pass errors that may be more descriptive than
              // ECONNREFUSED they are not necessarily the expected error code e.g. 
              // ENOTFOUND on getaddrinfo seems to be node.js specific, so using ECONNREFUSED
              // is still probably the most useful thing to do.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module['websocket'].emit('close', sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              // The WebSocket spec only allows a 'simple event' to be thrown on error,
              // so we only really know as much as ECONNREFUSED.
              sock.error = 14; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
              Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'ECONNREFUSED: Connection refused']);
            };
          }
        },poll:function(sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)] = bytes;
              return 0;
            default:
              return 28;
          }
        },close:function(sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function(sock, addr, port) {
          if (typeof sock.saddr != 'undefined' || typeof sock.sport != 'undefined') {
            throw new FS.ErrnoError(28);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port;
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== 138) throw e;
            }
          }
        },connect:function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(138);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr != 'undefined' && typeof sock.dport != 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(7);
              } else {
                throw new FS.ErrnoError(30);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(26);
        },listen:function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(138);
          }
          if (sock.server) {
             throw new FS.ErrnoError(28);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          Module['websocket'].emit('listen', sock.stream.fd); // Send Event with listen fd.
  
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
  
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
  
              // push to queue for accept to pick up
              sock.pending.push(newsock);
              Module['websocket'].emit('connection', newsock.stream.fd);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module['websocket'].emit('connection', sock.stream.fd);
            }
          });
          sock.server.on('close', function() {
            Module['websocket'].emit('close', sock.stream.fd);
            sock.server = null;
          });
          sock.server.on('error', function(error) {
            // Although the ws library may pass errors that may be more descriptive than
            // ECONNREFUSED they are not necessarily the expected error code e.g. 
            // ENOTFOUND on getaddrinfo seems to be node.js specific, so using EHOSTUNREACH
            // is still probably the most useful thing to do. This error shouldn't
            // occur in a well written app as errors should get trapped in the compiled
            // app's own getaddrinfo call.
            sock.error = 23; // Used in getsockopt for SOL_SOCKET/SO_ERROR test.
            Module['websocket'].emit('error', [sock.stream.fd, sock.error, 'EHOSTUNREACH: Host is unreachable']);
            // don't throw
          });
        },accept:function(listensock) {
          if (!listensock.server || !listensock.pending.length) {
            throw new FS.ErrnoError(28);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(53);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(17);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(53);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(6);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
  
          var data;
            data = buffer.slice(offset, offset + length);
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(28);
          }
        },recvmsg:function(sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(53);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(53);
              }
              if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              // else, our socket is in a valid state but truly has nothing available
              throw new FS.ErrnoError(6);
            }
            throw new FS.ErrnoError(6);
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};
  function getSocketFromFD(fd) {
      var socket = SOCKFS.getSocket(fd);
      if (!socket) throw new FS.ErrnoError(8);
      return socket;
    }
  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  var Sockets = {BUFFER_SIZE:10240,MAX_BUFFER_SIZE:10485760,nextFd:1,fds:{},nextport:1,maxport:65535,peer:null,connections:{},portmap:{},localAddr:4261412874,addrPool:[33554442,50331658,67108874,83886090,100663306,117440522,134217738,150994954,167772170,184549386,201326602,218103818,234881034]};
  
  function inetNtop4(addr) {
      return (addr & 0xff) + '.' + ((addr >> 8) & 0xff) + '.' + ((addr >> 16) & 0xff) + '.' + ((addr >> 24) & 0xff)
    }
  
  function inetNtop6(ints) {
      //  ref:  http://www.ietf.org/rfc/rfc2373.txt - section 2.5.4
      //  Format for IPv4 compatible and mapped  128-bit IPv6 Addresses
      //  128-bits are split into eight 16-bit words
      //  stored in network byte order (big-endian)
      //  |                80 bits               | 16 |      32 bits        |
      //  +-----------------------------------------------------------------+
      //  |               10 bytes               |  2 |      4 bytes        |
      //  +--------------------------------------+--------------------------+
      //  +               5 words                |  1 |      2 words        |
      //  +--------------------------------------+--------------------------+
      //  |0000..............................0000|0000|    IPv4 ADDRESS     | (compatible)
      //  +--------------------------------------+----+---------------------+
      //  |0000..............................0000|FFFF|    IPv4 ADDRESS     | (mapped)
      //  +--------------------------------------+----+---------------------+
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 0xffff,
        (ints[0] >> 16),
        ints[1] & 0xffff,
        (ints[1] >> 16),
        ints[2] & 0xffff,
        (ints[2] >> 16),
        ints[3] & 0xffff,
        (ints[3] >> 16)
      ];
  
      // Handle IPv4-compatible, IPv4-mapped, loopback and any/unspecified addresses
  
      var hasipv4 = true;
      var v4part = "";
      // check if the 10 high-order bytes are all zeros (first 5 words)
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) { hasipv4 = false; break; }
      }
  
      if (hasipv4) {
        // low-order 32-bits store an IPv4 address (bytes 13 to 16) (last 2 words)
        v4part = inetNtop4(parts[6] | (parts[7] << 16));
        // IPv4-mapped IPv6 address if 16-bit value (bytes 11 and 12) == 0xFFFF (6th word)
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        // IPv4-compatible IPv6 address if 16-bit value (bytes 11 and 12) == 0x0000 (6th word)
        if (parts[5] === 0) {
          str = "::";
          //special case IPv6 addresses
          if (v4part === "0.0.0.0") v4part = ""; // any/unspecified address
          if (v4part === "0.0.0.1") v4part = "1";// loopback address
          str += v4part;
          return str;
        }
      }
  
      // Handle all other IPv6 addresses
  
      // first run to find the longest contiguous zero words
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
  
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          // compress contiguous zeros - to produce "::"
          if (parts[word] === 0 && word >= zstart && word < (zstart + longest) ) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0) str += ":"; //leading zeros case
            }
            continue;
          }
        }
        // converts 16-bit words from big-endian to little-endian before converting to hex string
        str += Number(_ntohs(parts[word] & 0xffff)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
  function readSockaddr(sa, salen) {
      // family / port offsets are common to both sockaddr_in and sockaddr_in6
      var family = HEAP16[((sa)>>1)];
      var port = _ntohs(HEAPU16[(((sa)+(2))>>1)]);
      var addr;
  
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[(((sa)+(4))>>2)];
          addr = inetNtop4(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[(((sa)+(8))>>2)],
            HEAP32[(((sa)+(12))>>2)],
            HEAP32[(((sa)+(16))>>2)],
            HEAP32[(((sa)+(20))>>2)]
          ];
          addr = inetNtop6(addr);
          break;
        default:
          return { errno: 5 };
      }
  
      return { family: family, addr: addr, port: port };
    }
  
  function inetPton4(str) {
      var b = str.split('.');
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp;
      }
      return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
    }
  
  /** @suppress {checkTypes} */
  function jstoi_q(str) {
      return parseInt(str);
    }
  function inetPton6(str) {
      var words;
      var w, offset, z, i;
      /* http://home.deds.nl/~aeron/regex/ */
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      // Z placeholder to keep track of zeros when splitting the string on ":"
      if (str.startsWith("::")) {
        str = str.replace("::", "Z:"); // leading zeros case
      } else {
        str = str.replace("::", ":Z:");
      }
  
      if (str.indexOf(".") > 0) {
        // parse IPv4 embedded stress
        str = str.replace(new RegExp('[.]', 'g'), ":");
        words = str.split(":");
        words[words.length-4] = jstoi_q(words[words.length-4]) + jstoi_q(words[words.length-3])*256;
        words[words.length-3] = jstoi_q(words[words.length-2]) + jstoi_q(words[words.length-1])*256;
        words = words.slice(0, words.length-2);
      } else {
        words = str.split(":");
      }
  
      offset = 0; z = 0;
      for (w=0; w < words.length; w++) {
        if (typeof words[w] == 'string') {
          if (words[w] === 'Z') {
            // compressed zeros - write appropriate number of zero words
            for (z = 0; z < (8 - words.length+1); z++) {
              parts[w+z] = 0;
            }
            offset = z-1;
          } else {
            // parse hex to field to 16-bit value and write it in network byte-order
            parts[w+offset] = _htons(parseInt(words[w],16));
          }
        } else {
          // parsed IPv4 words
          parts[w+offset] = words[w];
        }
      }
      return [
        (parts[1] << 16) | parts[0],
        (parts[3] << 16) | parts[2],
        (parts[5] << 16) | parts[4],
        (parts[7] << 16) | parts[6]
      ];
    }
  var DNS = {address_map:{id:1,addrs:{},names:{}},lookup_name:function (name) {
        // If the name is already a valid ipv4 / ipv6 address, don't generate a fake one.
        var res = inetPton4(name);
        if (res !== null) {
          return name;
        }
        res = inetPton6(name);
        if (res !== null) {
          return name;
        }
  
        // See if this name is already mapped.
        var addr;
  
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, 'exceeded max address mappings of 65535');
  
          addr = '172.29.' + (id & 0xff) + '.' + (id & 0xff00);
  
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
  
        return addr;
      },lookup_addr:function (addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
  
        return null;
      }};
  /** @param {boolean=} allowNull */
  function getSocketAddress(addrp, addrlen, allowNull) {
      if (allowNull && addrp === 0) return null;
      var info = readSockaddr(addrp, addrlen);
      if (info.errno) throw new FS.ErrnoError(info.errno);
      info.addr = DNS.lookup_addr(info.addr) || info.addr;
      return info;
    }
  
  var SYSCALLS = {DEFAULT_POLLMASK:5,calculateAt:function(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAPU32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        (tempI64 = [Math.floor(stat.atime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.atime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = 0;
        (tempI64 = [Math.floor(stat.mtime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.mtime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = 0;
        (tempI64 = [Math.floor(stat.ctime.getTime() / 1000)>>>0,(tempDouble=Math.floor(stat.ctime.getTime() / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(96))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(104))>>2)] = tempI64[0],HEAP32[(((buf)+(108))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      }};
  function ___syscall_bind(fd, addr, addrlen) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.bind(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_chdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.chdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_connect(fd, addr, addrlen) {
  try {
  
      var sock = getSocketFromFD(fd);
      var info = getSocketAddress(addr, addrlen);
      sock.sock_ops.connect(sock, info.addr, info.port);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5:
        /* case 5: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
        /* case 6: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 7: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstat64(fd, buf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_getcwd(buf, size) {
  try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_getdents64(fd, dirp, count) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name === '.') {
          id = stream.node.id;
          type = 4; // DT_DIR
        }
        else if (name === '..') {
          var lookup = FS.lookupPath(stream.path, { parent: true });
          id = lookup.node.id;
          type = 4; // DT_DIR
        }
        else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)] = 280;
        HEAP8[(((dirp + pos)+(18))>>0)] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  /** @param {number=} addrlen */
  function writeSockaddr(sa, family, addr, port, addrlen) {
      switch (family) {
        case 2:
          addr = inetPton4(addr);
          zeroMemory(sa, 16);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 16;
          }
          HEAP16[((sa)>>1)] = family;
          HEAP32[(((sa)+(4))>>2)] = addr;
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        case 10:
          addr = inetPton6(addr);
          zeroMemory(sa, 28);
          if (addrlen) {
            HEAP32[((addrlen)>>2)] = 28;
          }
          HEAP32[((sa)>>2)] = family;
          HEAP32[(((sa)+(8))>>2)] = addr[0];
          HEAP32[(((sa)+(12))>>2)] = addr[1];
          HEAP32[(((sa)+(16))>>2)] = addr[2];
          HEAP32[(((sa)+(20))>>2)] = addr[3];
          HEAP16[(((sa)+(2))>>1)] = _htons(port);
          break;
        default:
          return 5;
      }
      return 0;
    }
  function ___syscall_getsockname(fd, addr, addrlen) {
  try {
  
      err("__syscall_getsockname " + fd);
      var sock = getSocketFromFD(fd);
      // TODO: sock.saddr should never be undefined, see TODO in websocket_sock_ops.getname
      var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || '0.0.0.0'), sock.sport, addrlen);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_mkdirat(dirfd, path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      // remove a trailing slash, if one - /a/b/ has basename of '', but
      // we want to create b in the context of this function
      path = PATH.normalize(path);
      if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
      FS.mkdir(path, mode, 0);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~4352);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? SYSCALLS.get() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_poll(fds, nfds, timeout) {
  try {
  
      var nonzero = 0;
      for (var i = 0; i < nfds; i++) {
        var pollfd = fds + 8 * i;
        var fd = HEAP32[((pollfd)>>2)];
        var events = HEAP16[(((pollfd)+(4))>>1)];
        var mask = 32;
        var stream = FS.getStream(fd);
        if (stream) {
          mask = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            mask = stream.stream_ops.poll(stream);
          }
        }
        mask &= events | 8 | 16;
        if (mask) nonzero++;
        HEAP16[(((pollfd)+(6))>>1)] = mask;
      }
      return nonzero;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (bufsize <= 0) return -28;
      var ret = FS.readlink(path);
  
      var len = Math.min(bufsize, lengthBytesUTF8(ret));
      var endChar = HEAP8[buf+len];
      stringToUTF8(ret, buf, bufsize+1);
      // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
      // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
      HEAP8[buf+len] = endChar;
      return len;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
  try {
  
      var sock = getSocketFromFD(fd);
      var msg = sock.sock_ops.recvmsg(sock, len);
      if (!msg) return 0; // socket is closed
      if (addr) {
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
      }
      HEAPU8.set(msg.buffer, buf);
      return msg.buffer.byteLength;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
  try {
  
      var sock = getSocketFromFD(fd);
      var dest = getSocketAddress(addr, addr_len, true);
      if (!dest) {
        // send, no address provided
        return FS.write(sock.stream, HEAP8,message, length);
      }
      // sendto an address
      return sock.sock_ops.sendmsg(sock, HEAP8,message, length, dest.addr, dest.port);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_socket(domain, type, protocol) {
  try {
  
      var sock = SOCKFS.createSocket(domain, type, protocol);
      return sock.stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (flags === 0) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        abort('Invalid flags passed to unlinkat');
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function __emscripten_date_now() {
      return Date.now();
    }

  var nowIsMonotonic = true;;
  function __emscripten_get_now_is_monotonic() {
      return nowIsMonotonic;
    }

  function __emscripten_throw_longjmp() { throw Infinity; }

  function readI53FromI64(ptr) {
      return HEAPU32[ptr>>2] + HEAP32[ptr+4>>2] * 4294967296;
    }
  function __localtime_js(time, tmPtr) {
      var date = new Date(readI53FromI64(time)*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    }

  function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }
  function _tzset_impl(timezone, daylight, tzname) {
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAP32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAPU32[((tzname)>>2)] = winterNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = summerNamePtr;
      } else {
        HEAPU32[((tzname)>>2)] = summerNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = winterNamePtr;
      }
    }
  function __tzset_js(timezone, daylight, tzname) {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (__tzset_js.called) return;
      __tzset_js.called = true;
      _tzset_impl(timezone, daylight, tzname);
    }

  function _abort() {
      abort('');
    }

  var readAsmConstArgsArray = [];
  function readAsmConstArgs(sigPtr, buffer) {
          readAsmConstArgsArray.length = 0;
          var index = buffer >> 2;
          var type;
          while ((type = HEAPU8[sigPtr++])) {
              var integer = type === 105 || type === 112; // i32 or wasm32 pointer
              if (integer) {
                  readAsmConstArgsArray.push(HEAP32[index++]);
              } else {
                  index += index & 1;
                  readAsmConstArgsArray.push(HEAPF64[index >> 1]);
                  index += 2;
              }
          }
          return readAsmConstArgsArray;
      }
  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }

  function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
  function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
      return mainThreadEM_ASM(code, sigPtr, argbuf, 1);
    }

  function getHeapMax() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  function _emscripten_get_heap_max() {
      return getHeapMax();
    }

  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = () => {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else _emscripten_get_now = () => performance.now();
  ;

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
  /** @param {boolean|number=} implicit */
  function exitJS(status, implicit) {
      EXITSTATUS = status;
  
      if (!keepRuntimeAlive()) {
        exitRuntime();
      }
  
      _proc_exit(status);
    }
  var _exit = exitJS;
  function maybeExit() {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    }
  function callUserCallback(func) {
      if (runtimeExited || ABORT) {
        return;
      }
      try {
        func();
          maybeExit();
      } catch (e) {
        handleException(e);
      }
    }
  
  function runtimeKeepalivePush() {
      runtimeKeepaliveCounter += 1;
    }
  
  function runtimeKeepalivePop() {
      runtimeKeepaliveCounter -= 1;
    }
  function _emscripten_set_timeout(cb, msecs, userData) {
      runtimeKeepalivePush();
      return setTimeout(function() {
        runtimeKeepalivePop();
        callUserCallback(function() {
          (function(a1) {  dynCall_vi.apply(null, [cb, a1]); })(userData);
        });
      }, msecs);
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  
  /** @param {boolean=} dontAddNull */
  function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the pointer to the HEAP.
      if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
    }
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doReadv(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
      }
      return ret;
    }
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function convertI32PairToI53Checked(lo, hi) {
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    }
  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
  
      var offset = convertI32PairToI53Checked(offset_low, offset_high); if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  function doWritev(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8,ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
      }
      return ret;
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _getaddrinfo(node, service, hint, out) {
      // Note getaddrinfo currently only returns a single addrinfo with ai_next defaulting to NULL. When NULL
      // hints are specified or ai_family set to AF_UNSPEC or ai_socktype or ai_protocol set to 0 then we
      // really should provide a linked list of suitable addrinfo values.
      var addrs = [];
      var canon = null;
      var addr = 0;
      var port = 0;
      var flags = 0;
      var family = 0;
      var type = 0;
      var proto = 0;
      var ai, last;
  
      function allocaddrinfo(family, type, proto, canon, addr, port) {
        var sa, salen, ai;
        var errno;
  
        salen = family === 10 ?
          28 :
          16;
        addr = family === 10 ?
          inetNtop6(addr) :
          inetNtop4(addr);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family, addr, port);
        assert(!errno);
  
        ai = _malloc(32);
        HEAP32[(((ai)+(4))>>2)] = family;
        HEAP32[(((ai)+(8))>>2)] = type;
        HEAP32[(((ai)+(12))>>2)] = proto;
        HEAP32[(((ai)+(24))>>2)] = canon;
        HEAPU32[(((ai)+(20))>>2)] = sa;
        if (family === 10) {
          HEAP32[(((ai)+(16))>>2)] = 28;
        } else {
          HEAP32[(((ai)+(16))>>2)] = 16;
        }
        HEAP32[(((ai)+(28))>>2)] = 0;
  
        return ai;
      }
  
      if (hint) {
        flags = HEAP32[((hint)>>2)];
        family = HEAP32[(((hint)+(4))>>2)];
        type = HEAP32[(((hint)+(8))>>2)];
        proto = HEAP32[(((hint)+(12))>>2)];
      }
      if (type && !proto) {
        proto = type === 2 ? 17 : 6;
      }
      if (!type && proto) {
        type = proto === 17 ? 2 : 1;
      }
  
      // If type or proto are set to zero in hints we should really be returning multiple addrinfo values, but for
      // now default to a TCP STREAM socket so we can at least return a sensible addrinfo given NULL hints.
      if (proto === 0) {
        proto = 6;
      }
      if (type === 0) {
        type = 1;
      }
  
      if (!node && !service) {
        return -2;
      }
      if (flags & ~(1|2|4|
          1024|8|16|32)) {
        return -1;
      }
      if (hint !== 0 && (HEAP32[((hint)>>2)] & 2) && !node) {
        return -1;
      }
      if (flags & 32) {
        // TODO
        return -2;
      }
      if (type !== 0 && type !== 1 && type !== 2) {
        return -7;
      }
      if (family !== 0 && family !== 2 && family !== 10) {
        return -6;
      }
  
      if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
  
        if (isNaN(port)) {
          if (flags & 1024) {
            return -2;
          }
          // TODO support resolving well-known service names from:
          // http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
          return -8;
        }
      }
  
      if (!node) {
        if (family === 0) {
          family = 2;
        }
        if ((flags & 1) === 0) {
          if (family === 2) {
            addr = _htonl(2130706433);
          } else {
            addr = [0, 0, 0, 1];
          }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
  
      //
      // try as a numeric address
      //
      node = UTF8ToString(node);
      addr = inetPton4(node);
      if (addr !== null) {
        // incoming node is a valid ipv4 address
        if (family === 0 || family === 2) {
          family = 2;
        }
        else if (family === 10 && (flags & 8)) {
          addr = [0, 0, _htonl(0xffff), addr];
          family = 10;
        } else {
          return -2;
        }
      } else {
        addr = inetPton6(node);
        if (addr !== null) {
          // incoming node is a valid ipv6 address
          if (family === 0 || family === 10) {
            family = 10;
          } else {
            return -2;
          }
        }
      }
      if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAPU32[((out)>>2)] = ai;
        return 0;
      }
      if (flags & 4) {
        return -2;
      }
  
      //
      // try as a hostname
      //
      // resolve the hostname to a temporary fake address
      node = DNS.lookup_name(node);
      addr = inetPton4(node);
      if (family === 0) {
        family = 2;
      } else if (family === 10) {
        addr = [0, 0, _htonl(0xffff), addr];
      }
      ai = allocaddrinfo(family, type, proto, null, addr, port);
      HEAPU32[((out)>>2)] = ai;
      return 0;
    }

  function _getentropy(buffer, size) {
      if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice();
      }
      for (var i = 0; i < size; i++) {
        HEAP8[(((buffer)+(i))>>0)] = _getentropy.randomDevice();
      }
      return 0;
    }

  function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.dibvbi' property, so not accessing it quoted.
      return !!(ctx.dibvbi = ctx.getExtension('WEBGL_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
      // Closure is expected to be allowed to minify the '.mdibvbi' property, so not accessing it quoted.
      return !!(ctx.mdibvbi = ctx.getExtension('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
    }
  
  function __webgl_enable_WEBGL_multi_draw(ctx) {
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
    }
  var GL = {counter:1,buffers:[],mappedBuffers:{},programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],samplers:[],transformFeedbacks:[],syncs:[],byteSizeByTypeRoot:5120,byteSizeByType:[1,1,2,2,4,4,4,2,3,4,8],stringCache:{},stringiCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },getNewId:function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },MAX_TEMP_BUFFER_SIZE:2097152,numTempVertexBuffersPerSize:64,log2ceilLookup:function(i) {
        return 32 - Math.clz32(i === 0 ? 0 : i - 1);
      },generateTempBuffers:function(quads, context) {
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        context.tempVertexBufferCounters1 = [];
        context.tempVertexBufferCounters2 = [];
        context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex+1;
        context.tempVertexBuffers1 = [];
        context.tempVertexBuffers2 = [];
        context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex+1;
        context.tempIndexBuffers = [];
        context.tempIndexBuffers.length = largestIndex+1;
        for (var i = 0; i <= largestIndex; ++i) {
          context.tempIndexBuffers[i] = null; // Created on-demand
          context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
          var ringbufferLength = GL.numTempVertexBuffersPerSize;
          context.tempVertexBuffers1[i] = [];
          context.tempVertexBuffers2[i] = [];
          var ringbuffer1 = context.tempVertexBuffers1[i];
          var ringbuffer2 = context.tempVertexBuffers2[i];
          ringbuffer1.length = ringbuffer2.length = ringbufferLength;
          for (var j = 0; j < ringbufferLength; ++j) {
            ringbuffer1[j] = ringbuffer2[j] = null; // Created on-demand
          }
        }
  
        if (quads) {
          // GL_QUAD indexes can be precalculated
          context.tempQuadIndexBuffer = GLctx.createBuffer();
          context.GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, context.tempQuadIndexBuffer);
          var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
          var quadIndexes = new Uint16Array(numIndexes);
          var i = 0, v = 0;
          while (1) {
            quadIndexes[i++] = v;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+1;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+2;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+2;
            if (i >= numIndexes) break;
            quadIndexes[i++] = v+3;
            if (i >= numIndexes) break;
            v += 4;
          }
          context.GLctx.bufferData(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, quadIndexes, 0x88E4 /*GL_STATIC_DRAW*/);
          context.GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, null);
        }
      },getTempVertexBuffer:function getTempVertexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
        var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
        GL.currentContext.tempVertexBufferCounters1[idx] = (GL.currentContext.tempVertexBufferCounters1[idx]+1) & (GL.numTempVertexBuffersPerSize-1);
        var vbo = ringbuffer[nextFreeBufferIndex];
        if (vbo) {
          return vbo;
        }
        var prevVBO = GLctx.getParameter(0x8894 /*GL_ARRAY_BUFFER_BINDING*/);
        ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
        GLctx.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, ringbuffer[nextFreeBufferIndex]);
        GLctx.bufferData(0x8892 /*GL_ARRAY_BUFFER*/, 1 << idx, 0x88E8 /*GL_DYNAMIC_DRAW*/);
        GLctx.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, prevVBO);
        return ringbuffer[nextFreeBufferIndex];
      },getTempIndexBuffer:function getTempIndexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ibo = GL.currentContext.tempIndexBuffers[idx];
        if (ibo) {
          return ibo;
        }
        var prevIBO = GLctx.getParameter(0x8895 /*ELEMENT_ARRAY_BUFFER_BINDING*/);
        GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
        GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, GL.currentContext.tempIndexBuffers[idx]);
        GLctx.bufferData(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, 1 << idx, 0x88E8 /*GL_DYNAMIC_DRAW*/);
        GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, prevIBO);
        return GL.currentContext.tempIndexBuffers[idx];
      },newRenderingFrameStarted:function newRenderingFrameStarted() {
        if (!GL.currentContext) {
          return;
        }
        var vb = GL.currentContext.tempVertexBuffers1;
        GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
        GL.currentContext.tempVertexBuffers2 = vb;
        vb = GL.currentContext.tempVertexBufferCounters1;
        GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
        GL.currentContext.tempVertexBufferCounters2 = vb;
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        for (var i = 0; i <= largestIndex; ++i) {
          GL.currentContext.tempVertexBufferCounters1[i] = 0;
        }
      },getSource:function(shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;
          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);
        }
        return source;
      },calcBufLength:function calcBufLength(size, type, stride, count) {
        if (stride > 0) {
          return count * stride;  // XXXvlad this is not exactly correct I don't think
        }
        var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
        return size * typeSize * count;
      },usedTempBuffers:[],preDrawHandleClientVertexAttribBindings:function preDrawHandleClientVertexAttribBindings(count) {
        GL.resetBufferBinding = false;
  
        // TODO: initial pass to detect ranges we need to upload, might not need an upload per attrib
        for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
          var cb = GL.currentContext.clientBuffers[i];
          if (!cb.clientside || !cb.enabled) continue;
  
          GL.resetBufferBinding = true;
  
          var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
          var buf = GL.getTempVertexBuffer(size);
          GLctx.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, buf);
          GLctx.bufferSubData(0x8892 /*GL_ARRAY_BUFFER*/,
                                   0,
                                   HEAPU8.subarray(cb.ptr, cb.ptr + size));
          cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0);
        }
      },postDrawHandleClientVertexAttribBindings:function postDrawHandleClientVertexAttribBindings() {
        if (GL.resetBufferBinding) {
          GLctx.bindBuffer(0x8892 /*GL_ARRAY_BUFFER*/, GL.buffers[GLctx.currentArrayBufferBinding]);
        }
      },createContext:function(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL context on a canvas,
        // calling .getContext() will always return that context independent of which 'webgl' or 'webgl2'
        // context version was passed. See https://bugs.webkit.org/show_bug.cgi?id=222758 and
        // https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
          function fixedGetContext(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
          canvas.getContext = fixedGetContext;
        }
  
        var ctx = canvas.getContext("webgl2", webGLContextAttributes);
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },registerContext:function(ctx, webGLContextAttributes) {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        context.maxVertexAttribs = context.GLctx.getParameter(0x8869 /*GL_MAX_VERTEX_ATTRIBS*/);
        context.clientBuffers = [];
        for (var i = 0; i < context.maxVertexAttribs; i++) {
          context.clientBuffers[i] = { enabled: false, clientside: false, size: 0, type: 0, normalized: 0, stride: 0, ptr: 0, vertexAttribPointerAdaptor: null };
        }
  
        GL.generateTempBuffers(false, context);
  
        return handle;
      },makeContextCurrent:function(contextHandle) {
  
        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.
        return !(contextHandle && !GLctx);
      },getContext:function(contextHandle) {
        return GL.contexts[contextHandle];
      },deleteContext:function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents == 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.
        GL.contexts[contextHandle] = null;
      },initExtensions:function(context) {
        // If this function is called without a specific context object, init the extensions of the currently active context.
        if (!context) context = GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.
  
        // Extensions that are available from WebGL >= 2 (no-op if called on a WebGL 1 context active)
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  
        // On WebGL 2, EXT_disjoint_timer_query is replaced with an alternative
        // that's based on core APIs, and exposes only the queryCounterEXT()
        // entrypoint.
        if (context.version >= 2) {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
        }
  
        // However, Firefox exposes the WebGL 1 version on WebGL 2 as well and
        // thus we look for the WebGL 1 version again if the WebGL 2 version
        // isn't present. https://bugzilla.mozilla.org/show_bug.cgi?id=1328882
        if (context.version < 2 || !GLctx.disjointTimerQueryExt)
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        __webgl_enable_WEBGL_multi_draw(GLctx);
  
        // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      }};
  function _glActiveTexture(x0) { GLctx['activeTexture'](x0) }

  function _glAttachShader(program, shader) {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    }

  function _glBindBuffer(target, buffer) {
      if (target == 0x8892 /*GL_ARRAY_BUFFER*/) {
        GLctx.currentArrayBufferBinding = buffer;
      } else if (target == 0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/) {
        GLctx.currentElementArrayBufferBinding = buffer;
      }
  
      if (target == 0x88EB /*GL_PIXEL_PACK_BUFFER*/) {
        // In WebGL 2 glReadPixels entry point, we need to use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_PACK_BUFFER_BINDING point, so must keep track whether that binding point is non-null to know what is
        // the proper API function to call.
        GLctx.currentPixelPackBufferBinding = buffer;
      } else if (target == 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/) {
        // In WebGL 2 gl(Compressed)Tex(Sub)Image[23]D entry points, we need to
        // use a different WebGL 2 API function call when a buffer is bound to
        // GL_PIXEL_UNPACK_BUFFER_BINDING point, so must keep track whether that
        // binding point is non-null to know what is the proper API function to
        // call.
        GLctx.currentPixelUnpackBufferBinding = buffer;
      }
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    }

  function _glBindBufferBase(target, index, buffer) {
      GLctx['bindBufferBase'](target, index, GL.buffers[buffer]);
    }

  function _glBindFramebuffer(target, framebuffer) {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    }

  function _glBindRenderbuffer(target, renderbuffer) {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    }

  function _glBindSampler(unit, sampler) {
      GLctx['bindSampler'](unit, GL.samplers[sampler]);
    }

  function _glBindTexture(target, texture) {
      GLctx.bindTexture(target, GL.textures[texture]);
    }

  function _glBindVertexArray(vao) {
      GLctx['bindVertexArray'](GL.vaos[vao]);
      var ibo = GLctx.getParameter(0x8895 /*ELEMENT_ARRAY_BUFFER_BINDING*/);
      GLctx.currentElementArrayBufferBinding = ibo ? (ibo.name | 0) : 0;
    }

  function _glBlendEquationSeparate(x0, x1) { GLctx['blendEquationSeparate'](x0, x1) }

  function _glBlendFuncSeparate(x0, x1, x2, x3) { GLctx['blendFuncSeparate'](x0, x1, x2, x3) }

  function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) { GLctx['blitFramebuffer'](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) }

  function _glBufferData(target, size, data, usage) {
  
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        // If size is zero, WebGL would interpret uploading the whole input arraybuffer (starting from given offset), which would
        // not make sense in WebAssembly, so avoid uploading if size is zero. However we must still call bufferData to establish a
        // backing storage of zero bytes.
        if (data && size) {
          GLctx.bufferData(target, HEAPU8, usage, data, size);
        } else {
          GLctx.bufferData(target, size, usage);
        }
      } else {
        // N.b. here first form specifies a heap subarray, second form an integer size, so the ?: code here is polymorphic. It is advised to avoid
        // randomly mixing both uses in calling code, to avoid any potential JS engine JIT issues.
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
      }
    }

  function _glBufferSubData(target, offset, size, data) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return;
      }
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    }

  function _glCheckFramebufferStatus(x0) { return GLctx['checkFramebufferStatus'](x0) }

  function _glClear(x0) { GLctx['clear'](x0) }

  function _glClearColor(x0, x1, x2, x3) { GLctx['clearColor'](x0, x1, x2, x3) }

  function _glClearDepthf(x0) { GLctx['clearDepth'](x0) }

  function _glColorMask(red, green, blue, alpha) {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    }

  function _glCompileShader(shader) {
      GLctx.compileShader(GL.shaders[shader]);
    }

  function _glCreateProgram() {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    }

  function _glCreateShader(shaderType) {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    }

  function _glCullFace(x0) { GLctx['cullFace'](x0) }

  function _glDeleteBuffers(n, buffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
        if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
        if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
      }
    }

  function _glDeleteFramebuffers(n, framebuffers) {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    }

  function _glDeleteProgram(id) {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) { // glDeleteProgram actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    }

  function _glDeleteRenderbuffers(n, renderbuffers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    }

  function _glDeleteSamplers(n, samplers) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((samplers)+(i*4))>>2)];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx['deleteSampler'](sampler);
        sampler.name = 0;
        GL.samplers[id] = null;
      }
    }

  function _glDeleteShader(id) {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) { // glDeleteShader actually signals an error when deleting a nonexisting object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    }

  function _glDeleteTextures(n, textures) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        if (!texture) continue; // GL spec: "glDeleteTextures silently ignores 0s and names that do not correspond to existing textures".
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    }

  function _glDeleteVertexArrays(n, vaos) {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx['deleteVertexArray'](GL.vaos[id]);
        GL.vaos[id] = null;
      }
    }

  function _glDepthFunc(x0) { GLctx['depthFunc'](x0) }

  function _glDepthMask(flag) {
      GLctx.depthMask(!!flag);
    }

  function _glDetachShader(program, shader) {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    }

  function _glDisable(x0) { GLctx['disable'](x0) }

  function _glDrawArrays(mode, first, count) {
      // bind any client-side buffers
      GL.preDrawHandleClientVertexAttribBindings(first + count);
  
      GLctx.drawArrays(mode, first, count);
  
      GL.postDrawHandleClientVertexAttribBindings();
    }

  function _glDrawElements(mode, count, type, indices) {
      var buf;
      if (!GLctx.currentElementArrayBufferBinding) {
        var size = GL.calcBufLength(1, type, 0, count);
        buf = GL.getTempIndexBuffer(size);
        GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, buf);
        GLctx.bufferSubData(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/,
                                 0,
                                 HEAPU8.subarray(indices, indices + size));
        // the index is now 0
        indices = 0;
      }
  
      // bind any client-side buffers
      GL.preDrawHandleClientVertexAttribBindings(count);
  
      GLctx.drawElements(mode, count, type, indices);
  
      GL.postDrawHandleClientVertexAttribBindings(count);
  
      if (!GLctx.currentElementArrayBufferBinding) {
        GLctx.bindBuffer(0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/, null);
      }
    }

  function _glEnable(x0) { GLctx['enable'](x0) }

  function _glEnableVertexAttribArray(index) {
      var cb = GL.currentContext.clientBuffers[index];
      cb.enabled = true;
      GLctx.enableVertexAttribArray(index);
    }

  function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    }

  function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    }

  function _glFrontFace(x0) { GLctx['frontFace'](x0) }

  function __glGenObject(n, buffers, createFunction, objectTable
      ) {
      for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
          buffer.name = id;
          objectTable[id] = buffer;
        } else {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        }
        HEAP32[(((buffers)+(i*4))>>2)] = id;
      }
    }
  function _glGenBuffers(n, buffers) {
      __glGenObject(n, buffers, 'createBuffer', GL.buffers
        );
    }

  function _glGenFramebuffers(n, ids) {
      __glGenObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    }

  function _glGenRenderbuffers(n, renderbuffers) {
      __glGenObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    }

  function _glGenSamplers(n, samplers) {
      __glGenObject(n, samplers, 'createSampler', GL.samplers
        );
    }

  function _glGenTextures(n, textures) {
      __glGenObject(n, textures, 'createTexture', GL.textures
        );
    }

  function _glGenVertexArrays(n, arrays) {
      __glGenObject(n, arrays, 'createVertexArray', GL.vaos
        );
    }

  function writeI53ToI64(ptr, num) {
      HEAPU32[ptr>>2] = num;
      HEAPU32[ptr+4>>2] = (num - HEAPU32[ptr>>2])/4294967296;
    }
  function emscriptenWebGLGet(name_, p, type) {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null pointer should be treated.
      // Testing on desktop core GL 3, the application crashes on glGetIntegerv to a null pointer, but
      // better to report an error instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          return; // Do not write anything to the out pointer, since no binary formats are supported.
        case 0x87FE: // GL_NUM_PROGRAM_BINARY_FORMATS
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be queried for length),
          // so implement it ourselves to allow C++ GLES2 code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
        case 0x821D: // GL_NUM_EXTENSIONS
          if (GL.currentContext.version < 2) {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */); // Calling GLES3/WebGL2 function with a GLES2/WebGL1 context
            return;
          }
          // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
          var exts = GLctx.getSupportedExtensions() || [];
          ret = 2 * exts.length; // each extension is duplicated, first in unprefixed WebGL form, and then a second time with "GL_" prefix.
          break;
        case 0x821B: // GL_MAJOR_VERSION
        case 0x821C: // GL_MINOR_VERSION
          if (GL.currentContext.version < 2) {
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          }
          ret = name_ == 0x821B ? 3 : 0; // return version 3.0
          break;
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound - perhaps nothing is bound), but otherwise
              // can mean an invalid name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8F36: // COPY_READ_BUFFER_BINDING or COPY_READ_BUFFER
                case 0x8F37: // COPY_WRITE_BUFFER_BINDING or COPY_WRITE_BUFFER
                case 0x88ED: // PIXEL_PACK_BUFFER_BINDING
                case 0x88EF: // PIXEL_UNPACK_BUFFER_BINDING
                case 0x8CAA: // READ_FRAMEBUFFER_BINDING
                case 0x8919: // SAMPLER_BINDING
                case 0x8C1D: // TEXTURE_BINDING_2D_ARRAY
                case 0x806A: // TEXTURE_BINDING_3D
                case 0x8E25: // TRANSFORM_FEEDBACK_BINDING
                case 0x8C8F: // TRANSFORM_FEEDBACK_BUFFER_BINDING
                case 0x8A28: // UNIFORM_BUFFER_BINDING
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(((p)+(i))>>0)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err('GL_INVALID_ENUM in glGet' + type + 'v: Unknown object returned from WebGL getParameter(' + name_ + ')! (error: ' + e + ')');
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err('GL_INVALID_ENUM in glGet' + type + 'v: Native code calling glGet' + type + 'v(' + name_ + ') and it returns ' + result + ' of type ' + typeof(result) + '!');
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[((p)>>0)] = ret ? 1 : 0; break;
      }
    }
  function _glGetIntegerv(name_, p) {
      emscriptenWebGLGet(name_, p, 0);
    }

  function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    }

  function _glGetShaderiv(shader, pname, p) {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    }

  function stringToNewUTF8(jsString) {
      var length = lengthBytesUTF8(jsString)+1;
      var cString = _malloc(length);
      stringToUTF8(jsString, cString, length);
      return cString;
    }
  function _glGetString(name_) {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
            exts = exts.concat(exts.map(function(e) { return "GL_" + e; }));
            ret = stringToNewUTF8(exts.join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s && stringToNewUTF8(s);
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var glVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            if (true) glVersion = 'OpenGL ES 3.0 (' + glVersion + ')';
            else
            {
              glVersion = 'OpenGL ES 2.0 (' + glVersion + ')';
            }
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = 'OpenGL ES GLSL ES ' + ver_num[1] + ' (' + glslVersion + ')';
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    }

  function _glGetUniformBlockIndex(program, uniformBlockName) {
      return GLctx['getUniformBlockIndex'](GL.programs[program], UTF8ToString(uniformBlockName));
    }

  /** @noinline */
  function webglGetLeftBracePos(name) {
      return name.slice(-1) == ']' && name.lastIndexOf('[');
    }
  function webglPrepareUniformLocationsBeforeFirstUse(program) {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        for (i = 0; i < GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/); ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for(j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    }
  function _glGetUniformLocation(program, name) {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must maintain the precondition that
        // arrays reside in contiguous addresses, i.e. for a 'vec4 colors[10];', colors[4] must be at location colors[0]+4.
        // However, user might call glGetUniformLocation(program, "colors") for an array, so we cannot discover based on the user
        // input arguments whether the uniform we are dealing with is an array. The only way to discover which uniforms are arrays
        // is to enumerate over all the active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName]; // A pair [array length, GLint of the uniform location]
  
        // If an uniform with this name exists, and if its index is within the array limits (if it's even an array),
        // query the WebGLlocation, or return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that never existed vs GL program IDs that have been deleted,
        // so report GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    }

  function _glLinkProgram(program) {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    }

  function emscriptenWebGLGetBufferBinding(target) {
      switch (target) {
        case 0x8892 /*GL_ARRAY_BUFFER*/: target = 0x8894 /*GL_ARRAY_BUFFER_BINDING*/; break;
        case 0x8893 /*GL_ELEMENT_ARRAY_BUFFER*/: target = 0x8895 /*GL_ELEMENT_ARRAY_BUFFER_BINDING*/; break;
        case 0x88EB /*GL_PIXEL_PACK_BUFFER*/: target = 0x88ED /*GL_PIXEL_PACK_BUFFER_BINDING*/; break;
        case 0x88EC /*GL_PIXEL_UNPACK_BUFFER*/: target = 0x88EF /*GL_PIXEL_UNPACK_BUFFER_BINDING*/; break;
        case 0x8C8E /*GL_TRANSFORM_FEEDBACK_BUFFER*/: target = 0x8C8F /*GL_TRANSFORM_FEEDBACK_BUFFER_BINDING*/; break;
        case 0x8F36 /*GL_COPY_READ_BUFFER*/: target = 0x8F36 /*GL_COPY_READ_BUFFER_BINDING*/; break;
        case 0x8F37 /*GL_COPY_WRITE_BUFFER*/: target = 0x8F37 /*GL_COPY_WRITE_BUFFER_BINDING*/; break;
        case 0x8A11 /*GL_UNIFORM_BUFFER*/: target = 0x8A28 /*GL_UNIFORM_BUFFER_BINDING*/; break;
        // In default case, fall through and assume passed one of the _BINDING enums directly.
      }
      var buffer = GLctx.getParameter(target);
      if (buffer) return buffer.name|0;
      else return 0;
    }
  
  function emscriptenWebGLValidateMapBufferTarget(target) {
      switch (target) {
        case 0x8892: // GL_ARRAY_BUFFER
        case 0x8893: // GL_ELEMENT_ARRAY_BUFFER
        case 0x8F36: // GL_COPY_READ_BUFFER
        case 0x8F37: // GL_COPY_WRITE_BUFFER
        case 0x88EB: // GL_PIXEL_PACK_BUFFER
        case 0x88EC: // GL_PIXEL_UNPACK_BUFFER
        case 0x8C2A: // GL_TEXTURE_BUFFER
        case 0x8C8E: // GL_TRANSFORM_FEEDBACK_BUFFER
        case 0x8A11: // GL_UNIFORM_BUFFER
          return true;
        default:
          return false;
      }
    }
  function _glMapBufferRange(target, offset, length, access) {
      if (access != 0x1A && access != 0xA) {
        err("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
        return 0;
      }
  
      if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        err('GL_INVALID_ENUM in glMapBufferRange');
        return 0;
      }
  
      var mem = _malloc(length);
      if (!mem) return 0;
  
      GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)] = {
        offset: offset,
        length: length,
        mem: mem,
        access: access,
      };
      return mem;
    }

  function _glPolygonOffset(x0, x1) { GLctx['polygonOffset'](x0, x1) }

  function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = width * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
      return height * alignedRowSize;
    }
  
  function __colorChannelsInGlTextureFormat(format) {
      // Micro-optimizations for size: map format to size by subtracting smallest enum value (0x1902) from all values first.
      // Also omit the most common size value (1) from the list, which is assumed by formats not on the list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
        // 0x1903 /* GL_RED */ - 0x1902: 1,
        26917: 2,
        26918: 2,
        // 0x8D94 /* GL_RED_INTEGER */ - 0x1902: 1,
        29846: 3,
        29847: 4
      };
      return colorChannels[format - 0x1902]||1;
    }
  
  function heapObjectForWebGLType(type) {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
      if (type == 0) return HEAP8;
  
      if (type == 1) return HEAPU8;
  
      if (type == 2) return HEAP16;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        || type == 28520
        || type == 30779
        || type == 30782
        )
        return HEAPU32;
  
      return HEAPU16;
    }
  
  function heapAccessShiftForWebGLHeap(heap) {
      return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
    }
  function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
      var heap = heapObjectForWebGLType(type);
      var shift = heapAccessShiftForWebGLHeap(heap);
      var byteSize = 1<<shift;
      var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
      return heap.subarray(pixels >> shift, pixels + bytes >> shift);
    }
  function _glReadPixels(x, y, width, height, format, type, pixels) {
      if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelPackBufferBinding) {
          GLctx.readPixels(x, y, width, height, format, type, pixels);
        } else {
          var heap = heapObjectForWebGLType(type);
          GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        }
        return;
      }
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    }

  function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) { GLctx['renderbufferStorageMultisample'](x0, x1, x2, x3, x4) }

  function _glSamplerParameterf(sampler, pname, param) {
      GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
    }

  function _glSamplerParameterfv(sampler, pname, params) {
      var param = HEAPF32[((params)>>2)];
      GLctx['samplerParameterf'](GL.samplers[sampler], pname, param);
    }

  function _glSamplerParameteri(sampler, pname, param) {
      GLctx['samplerParameteri'](GL.samplers[sampler], pname, param);
    }

  function _glScissor(x0, x1, x2, x3) { GLctx['scissor'](x0, x1, x2, x3) }

  function _glShaderSource(shader, count, string, length) {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    }

  function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
      if (true) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
        }
        return;
      }
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
    }

  function _glTexParameteri(x0, x1, x2) { GLctx['texParameteri'](x0, x1, x2) }

  function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      if (true) {
        // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
        if (GLctx.currentPixelUnpackBufferBinding) {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
        } else if (pixels) {
          var heap = heapObjectForWebGLType(type);
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
        } else {
          GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
        }
        return;
      }
      var pixelData = null;
      if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    }

  function webglGetUniformLocation(location) {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a WebGLUniformLocation.
  
        // If an integer, we have not yet bound the location, so do it now. The integer value specifies the array index
        // we should bind to.
        if (typeof webglLoc == 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? '[' + webglLoc + ']' : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    }
  function _glUniform1i(location, v0) {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    }

  function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
      program = GL.programs[program];
  
      GLctx['uniformBlockBinding'](program, uniformBlockIndex, uniformBlockBinding);
    }

  function _glUnmapBuffer(target) {
      if (!emscriptenWebGLValidateMapBufferTarget(target)) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        err('GL_INVALID_ENUM in glUnmapBuffer');
        return 0;
      }
  
      var buffer = emscriptenWebGLGetBufferBinding(target);
      var mapping = GL.mappedBuffers[buffer];
      if (!mapping) {
        GL.recordError(0x502 /* GL_INVALID_OPERATION */);
        err('buffer was never mapped in glUnmapBuffer');
        return 0;
      }
      GL.mappedBuffers[buffer] = null;
  
      if (!(mapping.access & 0x10)) /* GL_MAP_FLUSH_EXPLICIT_BIT */
        if (true) { // WebGL 2 provides new garbage-free entry points to call to WebGL. Use those always when possible.
          GLctx.bufferSubData(target, mapping.offset, HEAPU8, mapping.mem, mapping.length);
        } else {
          GLctx.bufferSubData(target, mapping.offset, HEAPU8.subarray(mapping.mem, mapping.mem+mapping.length));
        }
      _free(mapping.mem);
      return 1;
    }

  function _glUseProgram(program) {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    }

  function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
      var cb = GL.currentContext.clientBuffers[index];
      if (!GLctx.currentArrayBufferBinding) {
        cb.size = size;
        cb.type = type;
        cb.normalized = normalized;
        cb.stride = stride;
        cb.ptr = ptr;
        cb.clientside = true;
        cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
          this.vertexAttribPointer(index, size, type, normalized, stride, ptr);
        };
        return;
      }
      cb.clientside = false;
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    }

  function _glViewport(x0, x1, x2, x3) { GLctx['viewport'](x0, x1, x2, x3) }

  var GLEW = {isLinaroFork:1,extensions:null,error:{0:null,1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null},version:{1:null,2:null,3:null,4:null},errorStringConstantFromCode:function(error) {
        if (GLEW.isLinaroFork) {
          switch (error) {
            case 4:return "OpenGL ES lib expected, found OpenGL lib"; // GLEW_ERROR_NOT_GLES_VERSION
            case 5:return "OpenGL lib expected, found OpenGL ES lib"; // GLEW_ERROR_GLES_VERSION
            case 6:return "Missing EGL version"; // GLEW_ERROR_NO_EGL_VERSION
            case 7:return "EGL 1.1 and up are supported"; // GLEW_ERROR_EGL_VERSION_10_ONLY
            default:break;
          }
        }
  
        switch (error) {
          case 0:return "No error"; // GLEW_OK || GLEW_NO_ERROR
          case 1:return "Missing GL version"; // GLEW_ERROR_NO_GL_VERSION
          case 2:return "GL 1.1 and up are supported"; // GLEW_ERROR_GL_VERSION_10_ONLY
          case 3:return "GLX 1.2 and up are supported"; // GLEW_ERROR_GLX_VERSION_11_ONLY
          default:return null;
        }
      },errorString:function(error) {
        if (!GLEW.error[error]) {
          var string = GLEW.errorStringConstantFromCode(error);
          if (!string) {
            string = "Unknown error";
            error = 8; // prevent array from growing more than this
          }
          GLEW.error[error] = allocateUTF8(string);
        }
        return GLEW.error[error];
      },versionStringConstantFromCode:function(name) {
        switch (name) {
          case 1:return "1.10.0"; // GLEW_VERSION
          case 2:return "1"; // GLEW_VERSION_MAJOR
          case 3:return "10"; // GLEW_VERSION_MINOR
          case 4:return "0"; // GLEW_VERSION_MICRO
          default:return null;
        }
      },versionString:function(name) {
        if (!GLEW.version[name]) {
          var string = GLEW.versionStringConstantFromCode(name);
          if (!string)
            return 0;
          GLEW.version[name] = allocateUTF8(string);
        }
        return GLEW.version[name];
      },extensionIsSupported:function(name) {
        if (!GLEW.extensions) {
          GLEW.extensions = UTF8ToString(_glGetString(0x1F03)).split(' ');
        }
  
        if (GLEW.extensions.includes(name))
          return 1;
  
        // extensions from GLEmulations do not come unprefixed
        // so, try with prefix
        return (GLEW.extensions.includes("GL_" + name));
      }};
  function _glewInit() { return 0; }

  function _emscripten_set_main_loop_timing(mode, value) {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
  
      if (!Browser.mainLoop.func) {
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (!Browser.mainLoop.running) {
        runtimeKeepalivePush();
        Browser.mainLoop.running = true;
      }
      if (mode == 0 /*EM_TIMING_SETTIMEOUT*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else if (mode == 1 /*EM_TIMING_RAF*/) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      } else if (mode == 2 /*EM_TIMING_SETIMMEDIATE*/) {
        if (typeof setImmediate == 'undefined') {
          // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
          var setImmediates = [];
          var emscriptenMainLoopMessageId = 'setimmediate';
          /** @param {Event} event */
          var Browser_setImmediate_messageHandler = (event) => {
            // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
            // so check for both cases.
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          };
          addEventListener("message", Browser_setImmediate_messageHandler, true);
          setImmediate = /** @type{function(function(): ?, ...?): number} */(function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
              Module['setImmediates'].push(func);
              postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
            } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
          })
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'immediate';
      }
      return 0;
    }
  
    /**
     * @param {number=} arg
     * @param {boolean=} noSetTiming
     */
  function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
      assert(!Browser.mainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
  
      Browser.mainLoop.func = browserIterationFunc;
      Browser.mainLoop.arg = arg;
  
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
          runtimeKeepalivePop();
          maybeExit();
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen a
      // later time).  This member signifies that the current runner has not
      // yet been started so that we can call runtimeKeepalivePush when it
      // gets it timing set for the first time.
      Browser.mainLoop.running = false;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1/*EM_TIMING_RAF*/ && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0/*EM_TIMING_SETTIMEOUT*/) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
        GL.newRenderingFrameStarted();
  
        Browser.mainLoop.runIter(browserIterationFunc);
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        // Queue new audio data. This is important to be right after the main loop invocation, so that we will immediately be able
        // to queue the newest produced audio samples.
        // TODO: Consider adding pre- and post- rAF callbacks so that GL.newRenderingFrameStarted() and SDL.audio.queueNewAudioData()
        //       do not need to be hardcoded into this function, but can be more generic.
        if (typeof SDL == 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  
        Browser.mainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0/*EM_TIMING_SETTIMEOUT*/, 1000.0 / fps);
        else _emscripten_set_main_loop_timing(1/*EM_TIMING_RAF*/, 1); // Do rAF by rendering each frame (no decimating)
  
        Browser.mainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    }
  
  /** @param {number=} timeout */
  function safeSetTimeout(func, timeout) {
      runtimeKeepalivePush();
      return setTimeout(function() {
        runtimeKeepalivePop();
        callUserCallback(func);
      }, timeout);
    }
  
  function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    }
  var Browser = {mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function() {
          Browser.mainLoop.scheduler = null;
          // Incrementing this signals the previous main loop that it's now become old, and it must return.
          Browser.mainLoop.currentlyRunningMainloop++;
        },resume:function() {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          // do not set timing and call scheduler, we will do it on the next lines
          setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },updateStatus:function() {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        },runIter:function(func) {
          if (ABORT) return;
          if (Module['preMainLoop']) {
            var preRet = Module['preMainLoop']();
            if (preRet === false) {
              return; // |return false| skips a frame
            }
          }
          callUserCallback(func);
          if (Module['postMainLoop']) Module['postMainLoop']();
        }},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function() {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          err("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? err("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject == 'undefined') {
          err("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = () => {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            preloadedImages[name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = (event) => {
            out('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            preloadedAudios[name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            preloadedAudios[name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', () => finish(audio), false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              err('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === Module['canvas'] ||
                                document['mozPointerLockElement'] === Module['canvas'] ||
                                document['webkitPointerLockElement'] === Module['canvas'] ||
                                document['msPointerLockElement'] === Module['canvas'];
        }
        var canvas = Module['canvas'];
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      (() => {});
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   (() => {}); // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", (ev) => {
              if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                Module['canvas'].requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },handledByPreloadPlugin:function(byteArray, fullname, finish, onerror) {
        // Ensure plugins are ready.
        Browser.init();
  
        var handled = false;
        Module['preloadPlugins'].forEach(function(plugin) {
          if (handled) return;
          if (plugin['canHandle'](fullname)) {
            plugin['handle'](byteArray, fullname, finish, onerror);
            handled = true;
          }
        });
        return handled;
      },createContext:function(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 2,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL != 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx == 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
  
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function(canvas, useWebGL, setInModule) {},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
          if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
  
        canvasContainer.requestFullscreen();
      },exitFullscreen:function() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (function() {});
        CFS.apply(document, []);
        return true;
      },nextRAF:0,fakeRequestAnimationFrame:function(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= Browser.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            Browser.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },requestAnimationFrame:function(func) {
        if (typeof requestAnimationFrame == 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },safeSetTimeout:function(func) {
        // Legacy function, this is used by the SDL2 port so we need to keep it
        // around at least until that is updated.
        return safeSetTimeout(func);
      },safeRequestAnimationFrame:function(func) {
        runtimeKeepalivePush();
        return Browser.requestAnimationFrame(function() {
          runtimeKeepalivePop();
          callUserCallback(func);
        });
      },getMimetype:function(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function(func) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // check if SDL is available
          if (typeof SDL != "undefined") {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            // just add the mouse delta to the current absolut mouse position
            // FIXME: ideally this should be clamped against the canvas size and zero
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
  
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
  
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
  
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
  
            var coords = { x: adjustedX, y: adjustedY };
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },resizeListeners:[],updateResizeListeners:function() {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function(width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },updateCanvasDimensions:function(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      }};
  
  /** @constructor */
  function GLFW_Window(id, width, height, title, monitor, share) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.fullscreen = false; // Used to determine if app in fullscreen mode
        this.storedX = 0; // Used to store X before fullscreen
        this.storedY = 0; // Used to store Y before fullscreen
        this.width = width;
        this.height = height;
        this.storedWidth = width; // Used to store width before fullscreen
        this.storedHeight = height; // Used to store height before fullscreen
        this.title = title;
        this.monitor = monitor;
        this.share = share;
        this.attributes = GLFW.hints;
        this.inputModes = {
          0x00033001:0x00034001, // GLFW_CURSOR (GLFW_CURSOR_NORMAL)
          0x00033002:0, // GLFW_STICKY_KEYS
          0x00033003:0, // GLFW_STICKY_MOUSE_BUTTONS
        };
        this.buttons = 0;
        this.keys = new Array();
        this.domKeys = new Array();
        this.shouldClose = 0;
        this.title = null;
        this.windowPosFunc = null; // GLFWwindowposfun
        this.windowSizeFunc = null; // GLFWwindowsizefun
        this.windowCloseFunc = null; // GLFWwindowclosefun
        this.windowRefreshFunc = null; // GLFWwindowrefreshfun
        this.windowFocusFunc = null; // GLFWwindowfocusfun
        this.windowIconifyFunc = null; // GLFWwindowiconifyfun
        this.framebufferSizeFunc = null; // GLFWframebuffersizefun
        this.mouseButtonFunc = null; // GLFWmousebuttonfun
        this.cursorPosFunc = null; // GLFWcursorposfun
        this.cursorEnterFunc = null; // GLFWcursorenterfun
        this.scrollFunc = null; // GLFWscrollfun
        this.dropFunc = null; // GLFWdropfun
        this.keyFunc = null; // GLFWkeyfun
        this.charFunc = null; // GLFWcharfun
        this.userptr = null;
      }
  var GLFW = {WindowFromId:function(id) {
        if (id <= 0 || !GLFW.windows) return null;
        return GLFW.windows[id - 1];
      },joystickFunc:null,errorFunc:null,monitorFunc:null,active:null,windows:null,monitors:null,monitorString:null,versionString:null,initialTime:null,extensions:null,hints:null,defaultHints:{131073:0,131074:0,131075:1,131076:1,131077:1,135169:8,135170:8,135171:8,135172:8,135173:24,135174:8,135175:0,135176:0,135177:0,135178:0,135179:0,135180:0,135181:0,135182:0,135183:0,139265:196609,139266:1,139267:0,139268:0,139269:0,139270:0,139271:0,139272:0},DOMToGLFWKeyCode:function(keycode) {
        switch (keycode) {
          // these keycodes are only defined for GLFW3, assume they are the same for GLFW2
          case 0x20:return 32; // DOM_VK_SPACE -> GLFW_KEY_SPACE
          case 0xDE:return 39; // DOM_VK_QUOTE -> GLFW_KEY_APOSTROPHE
          case 0xBC:return 44; // DOM_VK_COMMA -> GLFW_KEY_COMMA
          case 0xAD:return 45; // DOM_VK_HYPHEN_MINUS -> GLFW_KEY_MINUS
          case 0xBD:return 45; // DOM_VK_MINUS -> GLFW_KEY_MINUS
          case 0xBE:return 46; // DOM_VK_PERIOD -> GLFW_KEY_PERIOD
          case 0xBF:return 47; // DOM_VK_SLASH -> GLFW_KEY_SLASH
          case 0x30:return 48; // DOM_VK_0 -> GLFW_KEY_0
          case 0x31:return 49; // DOM_VK_1 -> GLFW_KEY_1
          case 0x32:return 50; // DOM_VK_2 -> GLFW_KEY_2
          case 0x33:return 51; // DOM_VK_3 -> GLFW_KEY_3
          case 0x34:return 52; // DOM_VK_4 -> GLFW_KEY_4
          case 0x35:return 53; // DOM_VK_5 -> GLFW_KEY_5
          case 0x36:return 54; // DOM_VK_6 -> GLFW_KEY_6
          case 0x37:return 55; // DOM_VK_7 -> GLFW_KEY_7
          case 0x38:return 56; // DOM_VK_8 -> GLFW_KEY_8
          case 0x39:return 57; // DOM_VK_9 -> GLFW_KEY_9
          case 0x3B:return 59; // DOM_VK_SEMICOLON -> GLFW_KEY_SEMICOLON
          case 0x3D:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0xBB:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0x41:return 65; // DOM_VK_A -> GLFW_KEY_A
          case 0x42:return 66; // DOM_VK_B -> GLFW_KEY_B
          case 0x43:return 67; // DOM_VK_C -> GLFW_KEY_C
          case 0x44:return 68; // DOM_VK_D -> GLFW_KEY_D
          case 0x45:return 69; // DOM_VK_E -> GLFW_KEY_E
          case 0x46:return 70; // DOM_VK_F -> GLFW_KEY_F
          case 0x47:return 71; // DOM_VK_G -> GLFW_KEY_G
          case 0x48:return 72; // DOM_VK_H -> GLFW_KEY_H
          case 0x49:return 73; // DOM_VK_I -> GLFW_KEY_I
          case 0x4A:return 74; // DOM_VK_J -> GLFW_KEY_J
          case 0x4B:return 75; // DOM_VK_K -> GLFW_KEY_K
          case 0x4C:return 76; // DOM_VK_L -> GLFW_KEY_L
          case 0x4D:return 77; // DOM_VK_M -> GLFW_KEY_M
          case 0x4E:return 78; // DOM_VK_N -> GLFW_KEY_N
          case 0x4F:return 79; // DOM_VK_O -> GLFW_KEY_O
          case 0x50:return 80; // DOM_VK_P -> GLFW_KEY_P
          case 0x51:return 81; // DOM_VK_Q -> GLFW_KEY_Q
          case 0x52:return 82; // DOM_VK_R -> GLFW_KEY_R
          case 0x53:return 83; // DOM_VK_S -> GLFW_KEY_S
          case 0x54:return 84; // DOM_VK_T -> GLFW_KEY_T
          case 0x55:return 85; // DOM_VK_U -> GLFW_KEY_U
          case 0x56:return 86; // DOM_VK_V -> GLFW_KEY_V
          case 0x57:return 87; // DOM_VK_W -> GLFW_KEY_W
          case 0x58:return 88; // DOM_VK_X -> GLFW_KEY_X
          case 0x59:return 89; // DOM_VK_Y -> GLFW_KEY_Y
          case 0x5a:return 90; // DOM_VK_Z -> GLFW_KEY_Z
          case 0xDB:return 91; // DOM_VK_OPEN_BRACKET -> GLFW_KEY_LEFT_BRACKET
          case 0xDC:return 92; // DOM_VK_BACKSLASH -> GLFW_KEY_BACKSLASH
          case 0xDD:return 93; // DOM_VK_CLOSE_BRACKET -> GLFW_KEY_RIGHT_BRACKET
          case 0xC0:return 96; // DOM_VK_BACK_QUOTE -> GLFW_KEY_GRAVE_ACCENT
  
          case 0x1B:return 256; // DOM_VK_ESCAPE -> GLFW_KEY_ESCAPE
          case 0x0D:return 257; // DOM_VK_RETURN -> GLFW_KEY_ENTER
          case 0x09:return 258; // DOM_VK_TAB -> GLFW_KEY_TAB
          case 0x08:return 259; // DOM_VK_BACK -> GLFW_KEY_BACKSPACE
          case 0x2D:return 260; // DOM_VK_INSERT -> GLFW_KEY_INSERT
          case 0x2E:return 261; // DOM_VK_DELETE -> GLFW_KEY_DELETE
          case 0x27:return 262; // DOM_VK_RIGHT -> GLFW_KEY_RIGHT
          case 0x25:return 263; // DOM_VK_LEFT -> GLFW_KEY_LEFT
          case 0x28:return 264; // DOM_VK_DOWN -> GLFW_KEY_DOWN
          case 0x26:return 265; // DOM_VK_UP -> GLFW_KEY_UP
          case 0x21:return 266; // DOM_VK_PAGE_UP -> GLFW_KEY_PAGE_UP
          case 0x22:return 267; // DOM_VK_PAGE_DOWN -> GLFW_KEY_PAGE_DOWN
          case 0x24:return 268; // DOM_VK_HOME -> GLFW_KEY_HOME
          case 0x23:return 269; // DOM_VK_END -> GLFW_KEY_END
          case 0x14:return 280; // DOM_VK_CAPS_LOCK -> GLFW_KEY_CAPS_LOCK
          case 0x91:return 281; // DOM_VK_SCROLL_LOCK -> GLFW_KEY_SCROLL_LOCK
          case 0x90:return 282; // DOM_VK_NUM_LOCK -> GLFW_KEY_NUM_LOCK
          case 0x2C:return 283; // DOM_VK_SNAPSHOT -> GLFW_KEY_PRINT_SCREEN
          case 0x13:return 284; // DOM_VK_PAUSE -> GLFW_KEY_PAUSE
          case 0x70:return 290; // DOM_VK_F1 -> GLFW_KEY_F1
          case 0x71:return 291; // DOM_VK_F2 -> GLFW_KEY_F2
          case 0x72:return 292; // DOM_VK_F3 -> GLFW_KEY_F3
          case 0x73:return 293; // DOM_VK_F4 -> GLFW_KEY_F4
          case 0x74:return 294; // DOM_VK_F5 -> GLFW_KEY_F5
          case 0x75:return 295; // DOM_VK_F6 -> GLFW_KEY_F6
          case 0x76:return 296; // DOM_VK_F7 -> GLFW_KEY_F7
          case 0x77:return 297; // DOM_VK_F8 -> GLFW_KEY_F8
          case 0x78:return 298; // DOM_VK_F9 -> GLFW_KEY_F9
          case 0x79:return 299; // DOM_VK_F10 -> GLFW_KEY_F10
          case 0x7A:return 300; // DOM_VK_F11 -> GLFW_KEY_F11
          case 0x7B:return 301; // DOM_VK_F12 -> GLFW_KEY_F12
          case 0x7C:return 302; // DOM_VK_F13 -> GLFW_KEY_F13
          case 0x7D:return 303; // DOM_VK_F14 -> GLFW_KEY_F14
          case 0x7E:return 304; // DOM_VK_F15 -> GLFW_KEY_F15
          case 0x7F:return 305; // DOM_VK_F16 -> GLFW_KEY_F16
          case 0x80:return 306; // DOM_VK_F17 -> GLFW_KEY_F17
          case 0x81:return 307; // DOM_VK_F18 -> GLFW_KEY_F18
          case 0x82:return 308; // DOM_VK_F19 -> GLFW_KEY_F19
          case 0x83:return 309; // DOM_VK_F20 -> GLFW_KEY_F20
          case 0x84:return 310; // DOM_VK_F21 -> GLFW_KEY_F21
          case 0x85:return 311; // DOM_VK_F22 -> GLFW_KEY_F22
          case 0x86:return 312; // DOM_VK_F23 -> GLFW_KEY_F23
          case 0x87:return 313; // DOM_VK_F24 -> GLFW_KEY_F24
          case 0x88:return 314; // 0x88 (not used?) -> GLFW_KEY_F25
          case 0x60:return 320; // DOM_VK_NUMPAD0 -> GLFW_KEY_KP_0
          case 0x61:return 321; // DOM_VK_NUMPAD1 -> GLFW_KEY_KP_1
          case 0x62:return 322; // DOM_VK_NUMPAD2 -> GLFW_KEY_KP_2
          case 0x63:return 323; // DOM_VK_NUMPAD3 -> GLFW_KEY_KP_3
          case 0x64:return 324; // DOM_VK_NUMPAD4 -> GLFW_KEY_KP_4
          case 0x65:return 325; // DOM_VK_NUMPAD5 -> GLFW_KEY_KP_5
          case 0x66:return 326; // DOM_VK_NUMPAD6 -> GLFW_KEY_KP_6
          case 0x67:return 327; // DOM_VK_NUMPAD7 -> GLFW_KEY_KP_7
          case 0x68:return 328; // DOM_VK_NUMPAD8 -> GLFW_KEY_KP_8
          case 0x69:return 329; // DOM_VK_NUMPAD9 -> GLFW_KEY_KP_9
          case 0x6E:return 330; // DOM_VK_DECIMAL -> GLFW_KEY_KP_DECIMAL
          case 0x6F:return 331; // DOM_VK_DIVIDE -> GLFW_KEY_KP_DIVIDE
          case 0x6A:return 332; // DOM_VK_MULTIPLY -> GLFW_KEY_KP_MULTIPLY
          case 0x6D:return 333; // DOM_VK_SUBTRACT -> GLFW_KEY_KP_SUBTRACT
          case 0x6B:return 334; // DOM_VK_ADD -> GLFW_KEY_KP_ADD
          // case 0x0D:return 335; // DOM_VK_RETURN -> GLFW_KEY_KP_ENTER (DOM_KEY_LOCATION_RIGHT)
          // case 0x61:return 336; // DOM_VK_EQUALS -> GLFW_KEY_KP_EQUAL (DOM_KEY_LOCATION_RIGHT)
          case 0x10:return 340; // DOM_VK_SHIFT -> GLFW_KEY_LEFT_SHIFT
          case 0x11:return 341; // DOM_VK_CONTROL -> GLFW_KEY_LEFT_CONTROL
          case 0x12:return 342; // DOM_VK_ALT -> GLFW_KEY_LEFT_ALT
          case 0x5B:return 343; // DOM_VK_WIN -> GLFW_KEY_LEFT_SUPER
          // case 0x10:return 344; // DOM_VK_SHIFT -> GLFW_KEY_RIGHT_SHIFT (DOM_KEY_LOCATION_RIGHT)
          // case 0x11:return 345; // DOM_VK_CONTROL -> GLFW_KEY_RIGHT_CONTROL (DOM_KEY_LOCATION_RIGHT)
          // case 0x12:return 346; // DOM_VK_ALT -> GLFW_KEY_RIGHT_ALT (DOM_KEY_LOCATION_RIGHT)
          // case 0x5B:return 347; // DOM_VK_WIN -> GLFW_KEY_RIGHT_SUPER (DOM_KEY_LOCATION_RIGHT)
          case 0x5D:return 348; // DOM_VK_CONTEXT_MENU -> GLFW_KEY_MENU
          // XXX: GLFW_KEY_WORLD_1, GLFW_KEY_WORLD_2 what are these?
          default:return -1; // GLFW_KEY_UNKNOWN
        };
      },getModBits:function(win) {
        var mod = 0;
        if (win.keys[340]) mod |= 0x0001; // GLFW_MOD_SHIFT
        if (win.keys[341]) mod |= 0x0002; // GLFW_MOD_CONTROL
        if (win.keys[342]) mod |= 0x0004; // GLFW_MOD_ALT
        if (win.keys[343]) mod |= 0x0008; // GLFW_MOD_SUPER
        return mod;
      },onKeyPress:function(event) {
        if (!GLFW.active || !GLFW.active.charFunc) return;
        if (event.ctrlKey || event.metaKey) return;
  
        // correct unicode charCode is only available with onKeyPress event
        var charCode = event.charCode;
        if (charCode == 0 || (charCode >= 0x00 && charCode <= 0x1F)) return;
  
        (function(a1, a2) {  dynCall_vii.apply(null, [GLFW.active.charFunc, a1, a2]); })(GLFW.active.id, charCode);
      },onKeyChanged:function(keyCode, status) {
        if (!GLFW.active) return;
  
        var key = GLFW.DOMToGLFWKeyCode(keyCode);
        if (key == -1) return;
  
        var repeat = status && GLFW.active.keys[key];
        GLFW.active.keys[key] = status;
        GLFW.active.domKeys[keyCode] = status;
        if (!GLFW.active.keyFunc) return;
  
        if (repeat) status = 2; // GLFW_REPEAT
        (function(a1, a2, a3, a4, a5) {  dynCall_viiiii.apply(null, [GLFW.active.keyFunc, a1, a2, a3, a4, a5]); })(GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active));
      },onGamepadConnected:function(event) {
        GLFW.refreshJoysticks();
      },onGamepadDisconnected:function(event) {
        GLFW.refreshJoysticks();
      },onKeydown:function(event) {
        GLFW.onKeyChanged(event.keyCode, 1); // GLFW_PRESS or GLFW_REPEAT
  
        // This logic comes directly from the sdl implementation. We cannot
        // call preventDefault on all keydown events otherwise onKeyPress will
        // not get called
        if (event.keyCode === 8 /* backspace */ || event.keyCode === 9 /* tab */) {
          event.preventDefault();
        }
      },onKeyup:function(event) {
        GLFW.onKeyChanged(event.keyCode, 0); // GLFW_RELEASE
      },onBlur:function(event) {
        if (!GLFW.active) return;
  
        for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
          if (GLFW.active.domKeys[i]) {
            GLFW.onKeyChanged(i, 0); // GLFW_RELEASE
          }
        }
      },onMousemove:function(event) {
        if (!GLFW.active) return;
  
        Browser.calculateMouseEvent(event);
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorPosFunc) return;
  
        (function(a1, a2, a3) {  dynCall_vidd.apply(null, [GLFW.active.cursorPosFunc, a1, a2, a3]); })(GLFW.active.id, Browser.mouseX, Browser.mouseY);
      },DOMToGLFWMouseButton:function(event) {
        // DOM and glfw have different button codes.
        // See http://www.w3schools.com/jsref/event_button.asp.
        var eventButton = event['button'];
        if (eventButton > 0) {
          if (eventButton == 1) {
            eventButton = 2;
          } else {
            eventButton = 1;
          }
        }
        return eventButton;
      },onMouseenter:function(event) {
        if (!GLFW.active) return;
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorEnterFunc) return;
  
        (function(a1, a2) {  dynCall_vii.apply(null, [GLFW.active.cursorEnterFunc, a1, a2]); })(GLFW.active.id, 1);
      },onMouseleave:function(event) {
        if (!GLFW.active) return;
  
        if (event.target != Module["canvas"] || !GLFW.active.cursorEnterFunc) return;
  
        (function(a1, a2) {  dynCall_vii.apply(null, [GLFW.active.cursorEnterFunc, a1, a2]); })(GLFW.active.id, 0);
      },onMouseButtonChanged:function(event, status) {
        if (!GLFW.active) return;
  
        Browser.calculateMouseEvent(event);
  
        if (event.target != Module["canvas"]) return;
  
        var eventButton = GLFW.DOMToGLFWMouseButton(event);
  
        if (status == 1) { // GLFW_PRESS
          GLFW.active.buttons |= (1 << eventButton);
          try {
            event.target.setCapture();
          } catch (e) {}
        } else {  // GLFW_RELEASE
          GLFW.active.buttons &= ~(1 << eventButton);
        }
  
        if (!GLFW.active.mouseButtonFunc) return;
  
        (function(a1, a2, a3, a4) {  dynCall_viiii.apply(null, [GLFW.active.mouseButtonFunc, a1, a2, a3, a4]); })(GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active));
      },onMouseButtonDown:function(event) {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 1); // GLFW_PRESS
      },onMouseButtonUp:function(event) {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 0); // GLFW_RELEASE
      },onMouseWheel:function(event) {
        // Note the minus sign that flips browser wheel direction (positive direction scrolls page down) to native wheel direction (positive direction is mouse wheel up)
        var delta = -Browser.getMouseWheelDelta(event);
        delta = (delta == 0) ? 0 : (delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1)); // Quantize to integer so that minimum scroll is at least +/- 1.
        GLFW.wheelPos += delta;
  
        if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Module['canvas']) return;
  
        var sx = 0;
        var sy = delta;
        if (event.type == 'mousewheel') {
          sx = event.wheelDeltaX;
        } else {
          sx = event.deltaX;
        }
  
        (function(a1, a2, a3) {  dynCall_vidd.apply(null, [GLFW.active.scrollFunc, a1, a2, a3]); })(GLFW.active.id, sx, sy);
  
        event.preventDefault();
      },onCanvasResize:function(width, height) {
        if (!GLFW.active) return;
  
        var resizeNeeded = true;
  
        // If the client is requesting fullscreen mode
        if (document["fullscreen"] || document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
          GLFW.active.storedX = GLFW.active.x;
          GLFW.active.storedY = GLFW.active.y;
          GLFW.active.storedWidth = GLFW.active.width;
          GLFW.active.storedHeight = GLFW.active.height;
          GLFW.active.x = GLFW.active.y = 0;
          GLFW.active.width = screen.width;
          GLFW.active.height = screen.height;
          GLFW.active.fullscreen = true;
  
        // If the client is reverting from fullscreen mode
        } else if (GLFW.active.fullscreen == true) {
          GLFW.active.x = GLFW.active.storedX;
          GLFW.active.y = GLFW.active.storedY;
          GLFW.active.width = GLFW.active.storedWidth;
          GLFW.active.height = GLFW.active.storedHeight;
          GLFW.active.fullscreen = false;
  
        // If the width/height values do not match current active window sizes
        } else if (GLFW.active.width != width || GLFW.active.height != height) {
            GLFW.active.width = width;
            GLFW.active.height = height;
        } else {
          resizeNeeded = false;
        }
  
        // If any of the above conditions were true, we need to resize the canvas
        if (resizeNeeded) {
          // resets the canvas size to counter the aspect preservation of Browser.updateCanvasDimensions
          Browser.setCanvasSize(GLFW.active.width, GLFW.active.height, true);
          // TODO: Client dimensions (clientWidth/clientHeight) vs pixel dimensions (width/height) of
          // the canvas should drive window and framebuffer size respectfully.
          GLFW.onWindowSizeChanged();
          GLFW.onFramebufferSizeChanged();
        }
      },onWindowSizeChanged:function() {
        if (!GLFW.active) return;
  
        if (!GLFW.active.windowSizeFunc) return;
  
        (function(a1, a2, a3) {  dynCall_viii.apply(null, [GLFW.active.windowSizeFunc, a1, a2, a3]); })(GLFW.active.id, GLFW.active.width, GLFW.active.height);
      },onFramebufferSizeChanged:function() {
        if (!GLFW.active) return;
  
        if (!GLFW.active.framebufferSizeFunc) return;
  
        (function(a1, a2, a3) {  dynCall_viii.apply(null, [GLFW.active.framebufferSizeFunc, a1, a2, a3]); })(GLFW.active.id, GLFW.active.width, GLFW.active.height);
      },getTime:function() {
        return _emscripten_get_now() / 1000;
      },setWindowTitle:function(winid, title) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        win.title = UTF8ToString(title);
        if (GLFW.active.id == win.id) {
          document.title = win.title;
        }
      },setJoystickCallback:function(cbfun) {
        GLFW.joystickFunc = cbfun;
        GLFW.refreshJoysticks();
      },joys:{},lastGamepadState:[],lastGamepadStateFrame:null,refreshJoysticks:function() {
        // Produce a new Gamepad API sample if we are ticking a new game frame, or if not using emscripten_set_main_loop() at all to drive animation.
        if (Browser.mainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !Browser.mainLoop.currentFrameNumber) {
          GLFW.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
          GLFW.lastGamepadStateFrame = Browser.mainLoop.currentFrameNumber;
  
          for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
            var gamepad = GLFW.lastGamepadState[joy];
  
            if (gamepad) {
              if (!GLFW.joys[joy]) {
                out('glfw joystick connected:',joy);
                GLFW.joys[joy] = {
                  id: allocateUTF8(gamepad.id),
                  buttonsCount: gamepad.buttons.length,
                  axesCount: gamepad.axes.length,
                  buttons: _malloc(gamepad.buttons.length),
                  axes: _malloc(gamepad.axes.length*4),
                };
  
                if (GLFW.joystickFunc) {
                  (function(a1, a2) {  dynCall_vii.apply(null, [GLFW.joystickFunc, a1, a2]); })(joy, 0x00040001); // GLFW_CONNECTED
                }
              }
  
              var data = GLFW.joys[joy];
  
              for (var i = 0; i < gamepad.buttons.length;  ++i) {
                HEAP8[((data.buttons + i)>>0)] = gamepad.buttons[i].pressed;
              }
  
              for (var i = 0; i < gamepad.axes.length; ++i) {
                HEAPF32[((data.axes + i*4)>>2)] = gamepad.axes[i];
              }
            } else {
              if (GLFW.joys[joy]) {
                out('glfw joystick disconnected',joy);
  
                if (GLFW.joystickFunc) {
                  (function(a1, a2) {  dynCall_vii.apply(null, [GLFW.joystickFunc, a1, a2]); })(joy, 0x00040002); // GLFW_DISCONNECTED
                }
  
                _free(GLFW.joys[joy].id);
                _free(GLFW.joys[joy].buttons);
                _free(GLFW.joys[joy].axes);
  
                delete GLFW.joys[joy];
              }
            }
          }
        }
      },setKeyCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.keyFunc;
        win.keyFunc = cbfun;
        return prevcbfun;
      },setCharCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.charFunc;
        win.charFunc = cbfun;
        return prevcbfun;
      },setMouseButtonCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.mouseButtonFunc;
        win.mouseButtonFunc = cbfun;
        return prevcbfun;
      },setCursorPosCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.cursorPosFunc;
        win.cursorPosFunc = cbfun;
        return prevcbfun;
      },setScrollCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.scrollFunc;
        win.scrollFunc = cbfun;
        return prevcbfun;
      },setDropCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.dropFunc;
        win.dropFunc = cbfun;
        return prevcbfun;
      },onDrop:function(event) {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
  
        event.preventDefault();
  
        var filenames = _malloc(event.dataTransfer.files.length*4);
        var filenamesArray = [];
        var count = event.dataTransfer.files.length;
  
        // Read and save the files to emscripten's FS
        var written = 0;
        var drop_dir = '.glfw_dropped_files';
        FS.createPath('/', drop_dir);
  
        function save(file) {
          var path = '/' + drop_dir + '/' + file.name.replace(/\//g, '_');
          var reader = new FileReader();
          reader.onloadend = (e) => {
            if (reader.readyState != 2) { // not DONE
              ++written;
              out('failed to read dropped file: '+file.name+': '+reader.error);
              return;
            }
  
            var data = e.target.result;
            FS.writeFile(path, new Uint8Array(data));
            if (++written === count) {
              (function(a1, a2, a3) {  dynCall_viii.apply(null, [GLFW.active.dropFunc, a1, a2, a3]); })(GLFW.active.id, count, filenames);
  
              for (var i = 0; i < filenamesArray.length; ++i) {
                _free(filenamesArray[i]);
              }
              _free(filenames);
            }
          };
          reader.readAsArrayBuffer(file);
  
          var filename = allocateUTF8(path);
          filenamesArray.push(filename);
          HEAPU32[((filenames + i*4)>>2)] = filename;
        }
  
        for (var i = 0; i < count; ++i) {
          save(event.dataTransfer.files[i]);
        }
  
        return false;
      },onDragover:function(event) {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
  
        event.preventDefault();
        return false;
      },setWindowSizeCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowSizeFunc;
        win.windowSizeFunc = cbfun;
  
        return prevcbfun;
      },setWindowCloseCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowCloseFunc;
        win.windowCloseFunc = cbfun;
        return prevcbfun;
      },setWindowRefreshCallback:function(winid, cbfun) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowRefreshFunc;
        win.windowRefreshFunc = cbfun;
        return prevcbfun;
      },onClickRequestPointerLock:function(e) {
        if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
          Module['canvas'].requestPointerLock();
          e.preventDefault();
        }
      },setInputMode:function(winid, mode, value) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        switch (mode) {
          case 0x00033001: { // GLFW_CURSOR
            switch (value) {
              case 0x00034001: { // GLFW_CURSOR_NORMAL
                win.inputModes[mode] = value;
                Module['canvas'].removeEventListener('click', GLFW.onClickRequestPointerLock, true);
                Module['canvas'].exitPointerLock();
                break;
              }
              case 0x00034002: { // GLFW_CURSOR_HIDDEN
                out("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented.");
                break;
              }
              case 0x00034003: { // GLFW_CURSOR_DISABLED
                win.inputModes[mode] = value;
                Module['canvas'].addEventListener('click', GLFW.onClickRequestPointerLock, true);
                Module['canvas'].requestPointerLock();
                break;
              }
              default: {
                out("glfwSetInputMode called with unknown value parameter value: " + value + ".");
                break;
              }
            }
            break;
          }
          case 0x00033002: { // GLFW_STICKY_KEYS
            out("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented.");
            break;
          }
          case 0x00033003: { // GLFW_STICKY_MOUSE_BUTTONS
            out("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented.");
            break;
          }
          default: {
            out("glfwSetInputMode called with unknown mode parameter value: " + mode + ".");
            break;
          }
        }
      },getKey:function(winid, key) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return win.keys[key];
      },getMouseButton:function(winid, button) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return (win.buttons & (1 << button)) > 0;
      },getCursorPos:function(winid, x, y) {
        HEAPF64[((x)>>3)] = Browser.mouseX;
        HEAPF64[((y)>>3)] = Browser.mouseY;
      },getMousePos:function(winid, x, y) {
        HEAP32[((x)>>2)] = Browser.mouseX;
        HEAP32[((y)>>2)] = Browser.mouseY;
      },setCursorPos:function(winid, x, y) {
      },getWindowPos:function(winid, x, y) {
        var wx = 0;
        var wy = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          wx = win.x;
          wy = win.y;
        }
  
        if (x) {
          HEAP32[((x)>>2)] = wx;
        }
  
        if (y) {
          HEAP32[((y)>>2)] = wy;
        }
      },setWindowPos:function(winid, x, y) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.x = x;
        win.y = y;
      },getWindowSize:function(winid, width, height) {
        var ww = 0;
        var wh = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          ww = win.width;
          wh = win.height;
        }
  
        if (width) {
          HEAP32[((width)>>2)] = ww;
        }
  
        if (height) {
          HEAP32[((height)>>2)] = wh;
        }
      },setWindowSize:function(winid, width, height) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (GLFW.active.id == win.id) {
          if (width == screen.width && height == screen.height) {
            Browser.requestFullscreen();
          } else {
            Browser.exitFullscreen();
            Browser.setCanvasSize(width, height);
            win.width = width;
            win.height = height;
          }
        }
  
        if (!win.windowSizeFunc) return;
  
        (function(a1, a2, a3) {  dynCall_viii.apply(null, [win.windowSizeFunc, a1, a2, a3]); })(win.id, width, height);
      },createWindow:function(width, height, title, monitor, share) {
        var i, id;
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {
          // no-op
        }
        if (i > 0) throw "glfwCreateWindow only supports one window at time currently";
  
        // id for window
        id = i + 1;
  
        // not valid
        if (width <= 0 || height <= 0) return 0;
  
        if (monitor) {
          Browser.requestFullscreen();
        } else {
          Browser.setCanvasSize(width, height);
        }
  
        // Create context when there are no existing alive windows
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {
          // no-op
        }
        var useWebGL = GLFW.hints[0x00022001] > 0; // Use WebGL when we are told to based on GLFW_CLIENT_API
        if (i == GLFW.windows.length) {
          if (useWebGL) {
            var contextAttributes = {
              antialias: (GLFW.hints[0x0002100D] > 1), // GLFW_SAMPLES
              depth: (GLFW.hints[0x00021005] > 0),     // GLFW_DEPTH_BITS
              stencil: (GLFW.hints[0x00021006] > 0),   // GLFW_STENCIL_BITS
              alpha: (GLFW.hints[0x00021004] > 0)      // GLFW_ALPHA_BITS
            }
            Module.ctx = Browser.createContext(Module['canvas'], true, true, contextAttributes);
          } else {
            Browser.init();
          }
        }
  
        // If context creation failed, do not return a valid window
        if (!Module.ctx && useWebGL) return 0;
  
        // Get non alive id
        var win = new GLFW_Window(id, width, height, title, monitor, share);
  
        // Set window to array
        if (id - 1 == GLFW.windows.length) {
          GLFW.windows.push(win);
        } else {
          GLFW.windows[id - 1] = win;
        }
  
        GLFW.active = win;
        return win.id;
      },destroyWindow:function(winid) {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (win.windowCloseFunc)
          (function(a1) {  dynCall_vi.apply(null, [win.windowCloseFunc, a1]); })(win.id);
  
        GLFW.windows[win.id - 1] = null;
        if (GLFW.active.id == win.id)
          GLFW.active = null;
  
        // Destroy context when no alive windows
        for (var i = 0; i < GLFW.windows.length; i++)
          if (GLFW.windows[i] !== null) return;
  
        Module.ctx = Browser.destroyContext(Module['canvas'], true, true);
      },swapBuffers:function(winid) {
      },GLFW2ParamToGLFW3Param:function(param) {
        var table = {
          0x00030001:0, // GLFW_MOUSE_CURSOR
          0x00030002:0, // GLFW_STICKY_KEYS
          0x00030003:0, // GLFW_STICKY_MOUSE_BUTTONS
          0x00030004:0, // GLFW_SYSTEM_KEYS
          0x00030005:0, // GLFW_KEY_REPEAT
          0x00030006:0, // GLFW_AUTO_POLL_EVENTS
          0x00020001:0, // GLFW_OPENED
          0x00020002:0, // GLFW_ACTIVE
          0x00020003:0, // GLFW_ICONIFIED
          0x00020004:0, // GLFW_ACCELERATED
          0x00020005:0x00021001, // GLFW_RED_BITS
          0x00020006:0x00021002, // GLFW_GREEN_BITS
          0x00020007:0x00021003, // GLFW_BLUE_BITS
          0x00020008:0x00021004, // GLFW_ALPHA_BITS
          0x00020009:0x00021005, // GLFW_DEPTH_BITS
          0x0002000A:0x00021006, // GLFW_STENCIL_BITS
          0x0002000B:0x0002100F, // GLFW_REFRESH_RATE
          0x0002000C:0x00021007, // GLFW_ACCUM_RED_BITS
          0x0002000D:0x00021008, // GLFW_ACCUM_GREEN_BITS
          0x0002000E:0x00021009, // GLFW_ACCUM_BLUE_BITS
          0x0002000F:0x0002100A, // GLFW_ACCUM_ALPHA_BITS
          0x00020010:0x0002100B, // GLFW_AUX_BUFFERS
          0x00020011:0x0002100C, // GLFW_STEREO
          0x00020012:0, // GLFW_WINDOW_NO_RESIZE
          0x00020013:0x0002100D, // GLFW_FSAA_SAMPLES
          0x00020014:0x00022002, // GLFW_OPENGL_VERSION_MAJOR
          0x00020015:0x00022003, // GLFW_OPENGL_VERSION_MINOR
          0x00020016:0x00022006, // GLFW_OPENGL_FORWARD_COMPAT
          0x00020017:0x00022007, // GLFW_OPENGL_DEBUG_CONTEXT
          0x00020018:0x00022008, // GLFW_OPENGL_PROFILE
        };
        return table[param];
      }};
  function _glfwCreateCursor(image, xhot, yhot) {}

  function _glfwCreateWindow(width, height, title, monitor, share) {
      return GLFW.createWindow(width, height, title, monitor, share);
    }

  function _glfwDestroyCursor(cursor) {}

  function _glfwGetCursorPos(winid, x, y) {
      GLFW.getCursorPos(winid, x, y);
    }

  function _glfwGetFramebufferSize(winid, width, height) {
      var ww = 0;
      var wh = 0;
  
      var win = GLFW.WindowFromId(winid);
      if (win) {
        ww = win.width;
        wh = win.height;
      }
  
      if (width) {
        HEAP32[((width)>>2)] = ww;
      }
  
      if (height) {
        HEAP32[((height)>>2)] = wh;
      }
    }

  function _glfwGetJoystickAxes(joy, count) {
      GLFW.refreshJoysticks();
  
      var state = GLFW.joys[joy];
      if (!state || !state.axes) {
        HEAP32[((count)>>2)] = 0;
        return;
      }
  
      HEAP32[((count)>>2)] = state.axesCount;
      return state.axes;
    }

  function _glfwGetJoystickButtons(joy, count) {
      GLFW.refreshJoysticks();
  
      var state = GLFW.joys[joy];
      if (!state || !state.buttons) {
        HEAP32[((count)>>2)] = 0;
        return;
      }
  
      HEAP32[((count)>>2)] = state.buttonsCount;
      return state.buttons;
    }

  function _glfwGetJoystickHats() {
          // Not supported.
          return 0;
      }

  function _glfwGetKeysSiv3D(windowid) {
          const window = GLFW.WindowFromId(windowid);
          if (!window) return 0;
          if (!window.keysBuffer) {
              window.keysBuffer = Module["_malloc"](349 /* GLFW_KEY_LAST + 1 */)
              Module["HEAPU8"].fill(0, window.keysBuffer, window.keysBuffer + 348);
          }
          Module["HEAPU8"].set(window.keys, window.keysBuffer);
          return window.keysBuffer;
      }

  function _glfwGetMonitorContentScale(handle, xscale, yscale) {
          setValue(xscale, 1, 'float');
          setValue(yscale, 1, 'float'); 
      }

  function _glfwGetMonitorInfo_Siv3D(handle, displayID, xpos, ypos, w, h) {
          setValue(displayID, 1, 'i32');
          setValue(xpos, 0, 'i32');
          setValue(ypos, 0, 'i32');
          setValue(w, window.screen.width, 'i32');
          setValue(h, window.screen.height, 'i32');
      }

  function _glfwGetMonitorName(mon) {
      if (!GLFW.monitorString) {
        GLFW.monitorString = allocateUTF8("HTML5 WebGL Canvas");
      }
      return GLFW.monitorString;
    }

  function _glfwGetMonitorPhysicalSize(monitor, width, height) {
      // AFAIK there is no way to do this in javascript
      // Maybe with platform specific ccalls?
      //
      // Lets report 0 now which is wrong as it can get for end user.
      HEAP32[((width)>>2)] = 0;
      HEAP32[((height)>>2)] = 0;
    }

  function _glfwGetMonitorWorkarea(handle, wx, wy, ww, wh) {
          setValue(wx, 0, 'i32');
          setValue(wy, 0, 'i32');
          setValue(ww, window.screen.availWidth, 'i32');
          setValue(wh, window.screen.availHeight, 'i32');
      }

  function _glfwGetMonitors(count) {
      HEAP32[((count)>>2)] = 1;
      if (!GLFW.monitors) {
        GLFW.monitors = _malloc(4);
        HEAP32[((GLFW.monitors)>>2)] = 1;
      }
      return GLFW.monitors;
    }

  function _glfwGetVideoMode(monitor) { return 0; }

  function _glfwGetWindowAttrib(winid, attrib) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return 0;
      return win.attributes[attrib];
    }

  function _glfwGetWindowPos(winid, x, y) {
      GLFW.getWindowPos(winid, x, y);
    }

  function _glfwGetWindowSize(winid, width, height) {
      GLFW.getWindowSize(winid, width, height);
    }

  function _glfwGetWindowUserPointer(winid) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return 0;
      return win.userptr;
    }

  function _glfwIconifyWindow(winid) {
    }

  function _glfwInit() {
      if (GLFW.windows) return 1; // GL_TRUE
  
      GLFW.initialTime = GLFW.getTime();
      GLFW.hints = GLFW.defaultHints;
      GLFW.windows = new Array()
      GLFW.active = null;
  
      window.addEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
      window.addEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
      window.addEventListener("keydown", GLFW.onKeydown, true);
      window.addEventListener("keypress", GLFW.onKeyPress, true);
      window.addEventListener("keyup", GLFW.onKeyup, true);
      window.addEventListener("blur", GLFW.onBlur, true);
      Module["canvas"].addEventListener("touchmove", GLFW.onMousemove, true);
      Module["canvas"].addEventListener("touchstart", GLFW.onMouseButtonDown, true);
      Module["canvas"].addEventListener("touchcancel", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener("touchend", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener("mousemove", GLFW.onMousemove, true);
      Module["canvas"].addEventListener("mousedown", GLFW.onMouseButtonDown, true);
      Module["canvas"].addEventListener("mouseup", GLFW.onMouseButtonUp, true);
      Module["canvas"].addEventListener('wheel', GLFW.onMouseWheel, true);
      Module["canvas"].addEventListener('mousewheel', GLFW.onMouseWheel, true);
      Module["canvas"].addEventListener('mouseenter', GLFW.onMouseenter, true);
      Module["canvas"].addEventListener('mouseleave', GLFW.onMouseleave, true);
      Module["canvas"].addEventListener('drop', GLFW.onDrop, true);
      Module["canvas"].addEventListener('dragover', GLFW.onDragover, true);
  
      Browser.resizeListeners.push((width, height) => {
         GLFW.onCanvasResize(width, height);
      });
      return 1; // GL_TRUE
    }

  function _glfwJoystickPresent(joy) {
      GLFW.refreshJoysticks();
  
      return GLFW.joys[joy] !== undefined;
    }

  function _glfwMakeContextCurrent(winid) {}

  function _glfwMaximizeWindow(winid) {}

  function _glfwPollEvents() {}

  function _glfwRestoreWindow(winid) {
    }

  function _glfwSetCursorPos(winid, x, y) {
      GLFW.setCursorPos(winid, x, y);
    }

  function _glfwSetErrorCallback(cbfun) {
      var prevcbfun = GLFW.errorFunc;
      GLFW.errorFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetFramebufferSizeCallback(winid, cbfun) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.framebufferSizeFunc;
      win.framebufferSizeFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetMouseButtonCallback(winid, cbfun) {
      return GLFW.setMouseButtonCallback(winid, cbfun);
    }

  function _glfwSetScrollCallback(winid, cbfun) {
      return GLFW.setScrollCallback(winid, cbfun);
    }

  function _glfwSetWindowFocusCallback(winid, cbfun) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowFocusFunc;
      win.windowFocusFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetWindowIconifyCallback(winid, cbfun) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowIconifyFunc;
      win.windowIconifyFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetWindowPos(winid, x, y) {
      GLFW.setWindowPos(winid, x, y);
    }

  function _glfwSetWindowPosCallback(winid, cbfun) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowPosFunc;
      win.windowPosFunc = cbfun;
      return prevcbfun;
    }

  function _glfwSetWindowShouldClose(winid, value) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return;
      win.shouldClose = value;
    }

  function _glfwSetWindowSize(winid, width, height) {
      GLFW.setWindowSize(winid, width, height);
    }

  function _glfwSetWindowSizeCallback(winid, cbfun) {
      return GLFW.setWindowSizeCallback(winid, cbfun);
    }

  function _glfwSetWindowSizeLimits(winid, minwidth, minheight, maxwidth, maxheight) {}

  function _glfwSetWindowTitle(winid, title) {
      GLFW.setWindowTitle(winid, title);
    }

  function _glfwSetWindowUserPointer(winid, ptr) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return;
      win.userptr = ptr;
    }

  function _glfwSwapBuffers(winid) {
      GLFW.swapBuffers(winid);
    }

  function _glfwTerminate() {
      window.removeEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
      window.removeEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
      window.removeEventListener("keydown", GLFW.onKeydown, true);
      window.removeEventListener("keypress", GLFW.onKeyPress, true);
      window.removeEventListener("keyup", GLFW.onKeyup, true);
      window.removeEventListener("blur", GLFW.onBlur, true);
      Module["canvas"].removeEventListener("touchmove", GLFW.onMousemove, true);
      Module["canvas"].removeEventListener("touchstart", GLFW.onMouseButtonDown, true);
      Module["canvas"].removeEventListener("touchcancel", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener("touchend", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener("mousemove", GLFW.onMousemove, true);
      Module["canvas"].removeEventListener("mousedown", GLFW.onMouseButtonDown, true);
      Module["canvas"].removeEventListener("mouseup", GLFW.onMouseButtonUp, true);
      Module["canvas"].removeEventListener('wheel', GLFW.onMouseWheel, true);
      Module["canvas"].removeEventListener('mousewheel', GLFW.onMouseWheel, true);
      Module["canvas"].removeEventListener('mouseenter', GLFW.onMouseenter, true);
      Module["canvas"].removeEventListener('mouseleave', GLFW.onMouseleave, true);
      Module["canvas"].removeEventListener('drop', GLFW.onDrop, true);
      Module["canvas"].removeEventListener('dragover', GLFW.onDragover, true);
  
      Module["canvas"].width = Module["canvas"].height = 1;
      GLFW.windows = null;
      GLFW.active = null;
    }

  function _glfwWindowHint(target, hint) {
      GLFW.hints[target] = hint;
    }

  function _glfwWindowShouldClose(winid) {
      var win = GLFW.WindowFromId(winid);
      if (!win) return 0;
      return win.shouldClose;
    }

  function _llvm_eh_typeid_for(type) {
      return type;
    }

  var siv3dXMLHTTPRequestList = [];
  function _siv3dAbortXMLHTTPRequest(id) {
          siv3dXMLHTTPRequestList[id].abort();
      }

  function _siv3dCallOnAlert(textPtr) {
          const text = UTF8ToString(textPtr);
          Module["onAlert"] && Module["onAlert"](text);
      }

  var siv3dNotifications = [];
  function _siv3dCloseNotification(id) {
          const notificattion = siv3dNotifications[id];
          notificattion.close();
  
          delete siv3dNotifications[id];
      }

  var siv3dPendingUserActions = [];
  
  function listenOnce(object, event, func) {
      object.addEventListener(event, func, { 'once': true });
    }
  /** @param {Object=} elements */
  function autoResumeAudioContext(ctx, elements) {
      if (!elements) {
        elements = [document, document.getElementById('canvas')];
      }
      ['keydown', 'mousedown', 'touchstart'].forEach(function(event) {
        elements.forEach(function(element) {
          if (element) {
            listenOnce(element, event, () => {
              if (ctx.state === 'suspended') ctx.resume();
            });
          }
        });
      });
    }
  
  function dynCallLegacy(sig, ptr, args) {
      var f = Module['dynCall_' + sig];
      return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
    }
  
  var wasmTableMirror = [];
  function getWasmTableEntry(funcPtr) {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    }
  /** @param {Object=} args */
  function dynCall(sig, ptr, args) {
      return dynCallLegacy(sig, ptr, args);
    }
  function siv3dRegisterUserAction(func) {
          siv3dPendingUserActions.push(func);
      }
  
  var siv3dAwakeFunction = null;
  function _siv3dMaybeAwake() {
          if (siv3dAwakeFunction) {
              let awake = siv3dAwakeFunction;
              siv3dAwakeFunction = null;
  
              callUserCallback(awake);
          }
      }
  function _siv3dCreateNotification(title, body, actionsNum, actionTexts, callback, callbackArg) {
          if (!window.Notification && Notification.permission !== "granted") {
              (function(a1, a2) {  dynCall_vii.apply(null, [callback, a1, a2]); })(0, callbackArg);
              _siv3dMaybeAwake();
              return 0;
          }
  
          const idx = GL.getNewId(siv3dNotifications);
  
          const titleText = UTF8ToString(title);
          const bodyText = UTF8ToString(body);
          let actions = [];
  
          for (var i = 0; i < actionsNum; i++) {
              const textPtr = getValue(actionTexts + i * 4, "i32");
              const actionText = UTF8ToString(textPtr);
  
              actions.push({ title: actionText, action: actionText });
          }
  
          siv3dNotifications[idx] = new Notification(titleText, { body: bodyText, actions: actions });
          (function(a1, a2) {  dynCall_vii.apply(null, [callback, a1, a2]); })(idx, callbackArg);
          _siv3dMaybeAwake();
  
          return idx;
      }

  var siv3dXMLHTTPRequestListNextID = 0;
  function _siv3dCreateXMLHTTPRequest() {
          const id = siv3dXMLHTTPRequestListNextID++;
          siv3dXMLHTTPRequestList[id] = new XMLHttpRequest();
          return id;
      }

  var AL = {QUEUE_INTERVAL:25,QUEUE_LOOKAHEAD:0.1,DEVICE_NAME:"Emscripten OpenAL",CAPTURE_DEVICE_NAME:"Emscripten OpenAL capture",ALC_EXTENSIONS:{ALC_SOFT_pause_device:true,ALC_SOFT_HRTF:true},AL_EXTENSIONS:{AL_EXT_float32:true,AL_SOFT_loop_points:true,AL_SOFT_source_length:true,AL_EXT_source_distance_model:true,AL_SOFT_source_spatialize:true},_alcErr:0,alcErr:0,deviceRefCounts:{},alcStringCache:{},paused:false,stringCache:{},contexts:{},currentCtx:null,buffers:{0:{id:0,refCount:0,audioBuf:null,frequency:0,bytesPerSample:2,channels:1,length:0}},paramArray:[],_nextId:1,newId:function() {
        return AL.freeIds.length > 0 ? AL.freeIds.pop() : AL._nextId++;
      },freeIds:[],scheduleContextAudio:function(ctx) {
        // If we are animating using the requestAnimationFrame method, then the main loop does not run when in the background.
        // To give a perfect glitch-free audio stop when switching from foreground to background, we need to avoid updating
        // audio altogether when in the background, so detect that case and kill audio buffer streaming if so.
        if (Browser.mainLoop.timingMode === 1 /* EM_TIMING_RAF */ && document['visibilityState'] != 'visible') {
          return;
        }
  
        for (var i in ctx.sources) {
          AL.scheduleSourceAudio(ctx.sources[i]);
        }
      },scheduleSourceAudio:function(src, lookahead) {
        // See comment on scheduleContextAudio above.
        if (Browser.mainLoop.timingMode === 1 /*EM_TIMING_RAF*/ && document['visibilityState'] != 'visible') {
          return;
        }
        if (src.state !== 0x1012 /* AL_PLAYING */) {
          return;
        }
  
        var currentTime = AL.updateSourceTime(src);
  
        var startTime = src.bufStartTime;
        var startOffset = src.bufOffset;
        var bufCursor = src.bufsProcessed;
  
        // Advance past any audio that is already scheduled
        for (var i = 0; i < src.audioQueue.length; i++) {
          var audioSrc = src.audioQueue[i];
          startTime = audioSrc._startTime + audioSrc._duration;
          startOffset = 0.0;
          bufCursor += audioSrc._skipCount + 1;
        }
  
        if (!lookahead) {
          lookahead = AL.QUEUE_LOOKAHEAD;
        }
        var lookaheadTime = currentTime + lookahead;
        var skipCount = 0;
        while (startTime < lookaheadTime) {
          if (bufCursor >= src.bufQueue.length) {
            if (src.looping) {
              bufCursor %= src.bufQueue.length;
            } else {
              break;
            }
          }
  
          var buf = src.bufQueue[bufCursor % src.bufQueue.length];
          // If the buffer contains no data, skip it
          if (buf.length === 0) {
            skipCount++;
            // If we've gone through the whole queue and everything is 0 length, just give up
            if (skipCount === src.bufQueue.length) {
              break;
            }
          } else {
            var audioSrc = src.context.audioCtx.createBufferSource();
            audioSrc.buffer = buf.audioBuf;
            audioSrc.playbackRate.value = src.playbackRate;
            if (buf.audioBuf._loopStart || buf.audioBuf._loopEnd) {
              audioSrc.loopStart = buf.audioBuf._loopStart;
              audioSrc.loopEnd = buf.audioBuf._loopEnd;
            }
  
            var duration = 0.0;
            // If the source is a looping static buffer, use native looping for gapless playback
            if (src.type === 0x1028 /* AL_STATIC */ && src.looping) {
              duration = Number.POSITIVE_INFINITY;
              audioSrc.loop = true;
              if (buf.audioBuf._loopStart) {
                audioSrc.loopStart = buf.audioBuf._loopStart;
              }
              if (buf.audioBuf._loopEnd) {
                audioSrc.loopEnd = buf.audioBuf._loopEnd;
              }
            } else {
              duration = (buf.audioBuf.duration - startOffset) / src.playbackRate;
            }
  
            audioSrc._startOffset = startOffset;
            audioSrc._duration = duration;
            audioSrc._skipCount = skipCount;
            skipCount = 0;
  
            audioSrc.connect(src.gain);
  
            if (typeof audioSrc.start != 'undefined') {
              // Sample the current time as late as possible to mitigate drift
              startTime = Math.max(startTime, src.context.audioCtx.currentTime);
              audioSrc.start(startTime, startOffset);
            } else if (typeof audioSrc.noteOn != 'undefined') {
              startTime = Math.max(startTime, src.context.audioCtx.currentTime);
              audioSrc.noteOn(startTime);
            }
            audioSrc._startTime = startTime;
            src.audioQueue.push(audioSrc);
  
            startTime += duration;
          }
  
          startOffset = 0.0;
          bufCursor++;
        }
      },updateSourceTime:function(src) {
        var currentTime = src.context.audioCtx.currentTime;
        if (src.state !== 0x1012 /* AL_PLAYING */) {
          return currentTime;
        }
  
        // if the start time is unset, determine it based on the current offset.
        // This will be the case when a source is resumed after being paused, and
        // allows us to pretend that the source actually started playing some time
        // in the past such that it would just now have reached the stored offset.
        if (!isFinite(src.bufStartTime)) {
          src.bufStartTime = currentTime - src.bufOffset / src.playbackRate;
          src.bufOffset = 0.0;
        }
  
        var nextStartTime = 0.0;
        while (src.audioQueue.length) {
          var audioSrc = src.audioQueue[0];
          src.bufsProcessed += audioSrc._skipCount;
          nextStartTime = audioSrc._startTime + audioSrc._duration; // n.b. audioSrc._duration already factors in playbackRate, so no divide by src.playbackRate on it.
  
          if (currentTime < nextStartTime) {
            break;
          }
  
          src.audioQueue.shift();
          src.bufStartTime = nextStartTime;
          src.bufOffset = 0.0;
          src.bufsProcessed++;
        }
  
        if (src.bufsProcessed >= src.bufQueue.length && !src.looping) {
          // The source has played its entire queue and is non-looping, so just mark it as stopped.
          AL.setSourceState(src, 0x1014 /* AL_STOPPED */);
        } else if (src.type === 0x1028 /* AL_STATIC */ && src.looping) {
          // If the source is a looping static buffer, determine the buffer offset based on the loop points
          var buf = src.bufQueue[0];
          if (buf.length === 0) {
            src.bufOffset = 0.0;
          } else {
            var delta = (currentTime - src.bufStartTime) * src.playbackRate;
            var loopStart = buf.audioBuf._loopStart || 0.0;
            var loopEnd = buf.audioBuf._loopEnd || buf.audioBuf.duration;
            if (loopEnd <= loopStart) {
              loopEnd = buf.audioBuf.duration;
            }
  
            if (delta < loopEnd) {
              src.bufOffset = delta;
            } else {
              src.bufOffset = loopStart + (delta - loopStart) % (loopEnd - loopStart);
            }
          }
        } else if (src.audioQueue[0]) {
          // The source is still actively playing, so we just need to calculate where we are in the current buffer
          // so it can be remembered if the source gets paused.
          src.bufOffset = (currentTime - src.audioQueue[0]._startTime) * src.playbackRate;
        } else {
          // The source hasn't finished yet, but there is no scheduled audio left for it. This can be because
          // the source has just been started/resumed, or due to an underrun caused by a long blocking operation.
          // We need to determine what state we would be in by this point in time so that when we next schedule
          // audio playback, it will be just as if no underrun occurred.
  
          if (src.type !== 0x1028 /* AL_STATIC */ && src.looping) {
            // if the source is a looping buffer queue, let's first calculate the queue duration, so we can
            // quickly fast forward past any full loops of the queue and only worry about the remainder.
            var srcDuration = AL.sourceDuration(src) / src.playbackRate;
            if (srcDuration > 0.0) {
              src.bufStartTime += Math.floor((currentTime - src.bufStartTime) / srcDuration) * srcDuration;
            }
          }
  
          // Since we've already skipped any full-queue loops if there were any, we just need to find
          // out where in the queue the remaining time puts us, which won't require stepping through the
          // entire queue more than once.
          for (var i = 0; i < src.bufQueue.length; i++) {
            if (src.bufsProcessed >= src.bufQueue.length) {
              if (src.looping) {
                src.bufsProcessed %= src.bufQueue.length;
              } else {
                AL.setSourceState(src, 0x1014 /* AL_STOPPED */);
                break;
              }
            }
  
            var buf = src.bufQueue[src.bufsProcessed];
            if (buf.length > 0) {
              nextStartTime = src.bufStartTime + buf.audioBuf.duration / src.playbackRate;
  
              if (currentTime < nextStartTime) {
                src.bufOffset = (currentTime - src.bufStartTime) * src.playbackRate;
                break;
              }
  
              src.bufStartTime = nextStartTime;
            }
  
            src.bufOffset = 0.0;
            src.bufsProcessed++;
          }
        }
  
        return currentTime;
      },cancelPendingSourceAudio:function(src) {
        AL.updateSourceTime(src);
  
        for (var i = 1; i < src.audioQueue.length; i++) {
          var audioSrc = src.audioQueue[i];
          audioSrc.stop();
        }
  
        if (src.audioQueue.length > 1) {
          src.audioQueue.length = 1;
        }
      },stopSourceAudio:function(src) {
        for (var i = 0; i < src.audioQueue.length; i++) {
          src.audioQueue[i].stop();
        }
        src.audioQueue.length = 0;
      },setSourceState:function(src, state) {
        if (state === 0x1012 /* AL_PLAYING */) {
          if (src.state === 0x1012 /* AL_PLAYING */ || src.state == 0x1014 /* AL_STOPPED */) {
            src.bufsProcessed = 0;
            src.bufOffset = 0.0;
          } else {
          }
  
          AL.stopSourceAudio(src);
  
          src.state = 0x1012 /* AL_PLAYING */;
          src.bufStartTime = Number.NEGATIVE_INFINITY;
          AL.scheduleSourceAudio(src);
        } else if (state === 0x1013 /* AL_PAUSED */) {
          if (src.state === 0x1012 /* AL_PLAYING */) {
            // Store off the current offset to restore with on resume.
            AL.updateSourceTime(src);
            AL.stopSourceAudio(src);
  
            src.state = 0x1013 /* AL_PAUSED */;
          }
        } else if (state === 0x1014 /* AL_STOPPED */) {
          if (src.state !== 0x1011 /* AL_INITIAL */) {
            src.state = 0x1014 /* AL_STOPPED */;
            src.bufsProcessed = src.bufQueue.length;
            src.bufStartTime = Number.NEGATIVE_INFINITY;
            src.bufOffset = 0.0;
            AL.stopSourceAudio(src);
          }
        } else if (state === 0x1011 /* AL_INITIAL */) {
          if (src.state !== 0x1011 /* AL_INITIAL */) {
            src.state = 0x1011 /* AL_INITIAL */;
            src.bufsProcessed = 0;
            src.bufStartTime = Number.NEGATIVE_INFINITY;
            src.bufOffset = 0.0;
            AL.stopSourceAudio(src);
          }
        }
      },initSourcePanner:function(src) {
        if (src.type === 0x1030 /* AL_UNDETERMINED */) {
          return;
        }
  
        // Find the first non-zero buffer in the queue to determine the proper format
        var templateBuf = AL.buffers[0];
        for (var i = 0; i < src.bufQueue.length; i++) {
          if (src.bufQueue[i].id !== 0) {
            templateBuf = src.bufQueue[i];
            break;
          }
        }
        // Create a panner if AL_SOURCE_SPATIALIZE_SOFT is set to true, or alternatively if it's set to auto and the source is mono
        if (src.spatialize === 1 /* AL_TRUE */ || (src.spatialize === 2 /* AL_AUTO_SOFT */ && templateBuf.channels === 1)) {
          if (src.panner) {
            return;
          }
          src.panner = src.context.audioCtx.createPanner();
  
          AL.updateSourceGlobal(src);
          AL.updateSourceSpace(src);
  
          src.panner.connect(src.context.gain);
          src.gain.disconnect();
          src.gain.connect(src.panner);
        } else {
          if (!src.panner) {
            return;
          }
  
          src.panner.disconnect();
          src.gain.disconnect();
          src.gain.connect(src.context.gain);
          src.panner = null;
        }
      },updateContextGlobal:function(ctx) {
        for (var i in ctx.sources) {
          AL.updateSourceGlobal(ctx.sources[i]);
        }
      },updateSourceGlobal:function(src) {
        var panner = src.panner;
        if (!panner) {
          return;
        }
  
        panner.refDistance = src.refDistance;
        panner.maxDistance = src.maxDistance;
        panner.rolloffFactor = src.rolloffFactor;
  
        panner.panningModel = src.context.hrtf ? 'HRTF' : 'equalpower';
  
        // Use the source's distance model if AL_SOURCE_DISTANCE_MODEL is enabled
        var distanceModel = src.context.sourceDistanceModel ? src.distanceModel : src.context.distanceModel;
        switch (distanceModel) {
        case 0 /* AL_NONE */:
          panner.distanceModel = 'inverse';
          panner.refDistance = 3.40282e38 /* FLT_MAX */;
          break;
        case 0xd001 /* AL_INVERSE_DISTANCE */:
        case 0xd002 /* AL_INVERSE_DISTANCE_CLAMPED */:
          panner.distanceModel = 'inverse';
          break;
        case 0xd003 /* AL_LINEAR_DISTANCE */:
        case 0xd004 /* AL_LINEAR_DISTANCE_CLAMPED */:
          panner.distanceModel = 'linear';
          break;
        case 0xd005 /* AL_EXPONENT_DISTANCE */:
        case 0xd006 /* AL_EXPONENT_DISTANCE_CLAMPED */:
          panner.distanceModel = 'exponential';
          break;
        }
      },updateListenerSpace:function(ctx) {
        var listener = ctx.audioCtx.listener;
        if (listener.positionX) {
          listener.positionX.value = ctx.listener.position[0];
          listener.positionY.value = ctx.listener.position[1];
          listener.positionZ.value = ctx.listener.position[2];
        } else {
          listener.setPosition(ctx.listener.position[0], ctx.listener.position[1], ctx.listener.position[2]);
        }
        if (listener.forwardX) {
          listener.forwardX.value = ctx.listener.direction[0];
          listener.forwardY.value = ctx.listener.direction[1];
          listener.forwardZ.value = ctx.listener.direction[2];
          listener.upX.value = ctx.listener.up[0];
          listener.upY.value = ctx.listener.up[1];
          listener.upZ.value = ctx.listener.up[2];
        } else {
          listener.setOrientation(
            ctx.listener.direction[0], ctx.listener.direction[1], ctx.listener.direction[2],
            ctx.listener.up[0], ctx.listener.up[1], ctx.listener.up[2]);
        }
  
        // Update sources that are relative to the listener
        for (var i in ctx.sources) {
          AL.updateSourceSpace(ctx.sources[i]);
        }
      },updateSourceSpace:function(src) {
        if (!src.panner) {
          return;
        }
        var panner = src.panner;
  
        var posX = src.position[0];
        var posY = src.position[1];
        var posZ = src.position[2];
        var dirX = src.direction[0];
        var dirY = src.direction[1];
        var dirZ = src.direction[2];
  
        var listener = src.context.listener;
        var lPosX = listener.position[0];
        var lPosY = listener.position[1];
        var lPosZ = listener.position[2];
  
        // WebAudio does spatialization in world-space coordinates, meaning both the buffer sources and
        // the listener position are in the same absolute coordinate system relative to a fixed origin.
        // By default, OpenAL works this way as well, but it also provides a "listener relative" mode, where
        // a buffer source's coordinate are interpreted not in absolute world space, but as being relative
        // to the listener object itself, so as the listener moves the source appears to move with it
        // with no update required. Since web audio does not support this mode, we must transform the source
        // coordinates from listener-relative space to absolute world space.
        //
        // We do this via affine transformation matrices applied to the source position and source direction.
        // A change-of-basis converts from listener-space displacements to world-space displacements,
        // which must be done for both the source position and direction. Lastly, the source position must be
        // added to the listener position to get the final source position, since the source position represents
        // a displacement from the listener.
        if (src.relative) {
          // Negate the listener direction since forward is -Z.
          var lBackX = -listener.direction[0];
          var lBackY = -listener.direction[1];
          var lBackZ = -listener.direction[2];
          var lUpX = listener.up[0];
          var lUpY = listener.up[1];
          var lUpZ = listener.up[2];
  
          var inverseMagnitude = function(x, y, z) {
            var length = Math.sqrt(x * x + y * y + z * z);
  
            if (length < Number.EPSILON) {
              return 0.0;
            }
  
            return 1.0 / length;
          };
  
          // Normalize the Back vector
          var invMag = inverseMagnitude(lBackX, lBackY, lBackZ);
          lBackX *= invMag;
          lBackY *= invMag;
          lBackZ *= invMag;
  
          // ...and the Up vector
          invMag = inverseMagnitude(lUpX, lUpY, lUpZ);
          lUpX *= invMag;
          lUpY *= invMag;
          lUpZ *= invMag;
  
          // Calculate the Right vector as the cross product of the Up and Back vectors
          var lRightX = (lUpY * lBackZ - lUpZ * lBackY);
          var lRightY = (lUpZ * lBackX - lUpX * lBackZ);
          var lRightZ = (lUpX * lBackY - lUpY * lBackX);
  
          // Back and Up might not be exactly perpendicular, so the cross product also needs normalization
          invMag = inverseMagnitude(lRightX, lRightY, lRightZ);
          lRightX *= invMag;
          lRightY *= invMag;
          lRightZ *= invMag;
  
          // Recompute Up from the now orthonormal Right and Back vectors so we have a fully orthonormal basis
          lUpX = (lBackY * lRightZ - lBackZ * lRightY);
          lUpY = (lBackZ * lRightX - lBackX * lRightZ);
          lUpZ = (lBackX * lRightY - lBackY * lRightX);
  
          var oldX = dirX;
          var oldY = dirY;
          var oldZ = dirZ;
  
          // Use our 3 vectors to apply a change-of-basis matrix to the source direction
          dirX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
          dirY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
          dirZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
  
          oldX = posX;
          oldY = posY;
          oldZ = posZ;
  
          // ...and to the source position
          posX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
          posY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
          posZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
  
          // The change-of-basis corrects the orientation, but the origin is still the listener.
          // Translate the source position by the listener position to finish.
          posX += lPosX;
          posY += lPosY;
          posZ += lPosZ;
        }
  
        if (panner.positionX) {
          // Assigning to panner.positionX/Y/Z unnecessarily seems to cause performance issues
          // See https://github.com/emscripten-core/emscripten/issues/15847
  
          if (posX != panner.positionX.value) panner.positionX.value = posX;
          if (posY != panner.positionY.value) panner.positionY.value = posY;
          if (posZ != panner.positionZ.value) panner.positionZ.value = posZ;
        } else {
          panner.setPosition(posX, posY, posZ);
        }
        if (panner.orientationX) {
          // Assigning to panner.orientation/Y/Z unnecessarily seems to cause performance issues
          // See https://github.com/emscripten-core/emscripten/issues/15847
  
          if (dirX != panner.orientationX.value) panner.orientationX.value = dirX;
          if (dirY != panner.orientationY.value) panner.orientationY.value = dirY;
          if (dirZ != panner.orientationZ.value) panner.orientationZ.value = dirZ;
        } else {
          panner.setOrientation(dirX, dirY, dirZ);
        }
  
        var oldShift = src.dopplerShift;
        var velX = src.velocity[0];
        var velY = src.velocity[1];
        var velZ = src.velocity[2];
        var lVelX = listener.velocity[0];
        var lVelY = listener.velocity[1];
        var lVelZ = listener.velocity[2];
        if (posX === lPosX && posY === lPosY && posZ === lPosZ
          || velX === lVelX && velY === lVelY && velZ === lVelZ)
        {
          src.dopplerShift = 1.0;
        } else {
          // Doppler algorithm from 1.1 spec
          var speedOfSound = src.context.speedOfSound;
          var dopplerFactor = src.context.dopplerFactor;
  
          var slX = lPosX - posX;
          var slY = lPosY - posY;
          var slZ = lPosZ - posZ;
  
          var magSl = Math.sqrt(slX * slX + slY * slY + slZ * slZ);
          var vls = (slX * lVelX + slY * lVelY + slZ * lVelZ) / magSl;
          var vss = (slX * velX + slY * velY + slZ * velZ) / magSl;
  
          vls = Math.min(vls, speedOfSound / dopplerFactor);
          vss = Math.min(vss, speedOfSound / dopplerFactor);
  
          src.dopplerShift = (speedOfSound - dopplerFactor * vls) / (speedOfSound - dopplerFactor * vss);
        }
        if (src.dopplerShift !== oldShift) {
          AL.updateSourceRate(src);
        }
      },updateSourceRate:function(src) {
        if (src.state === 0x1012 /* AL_PLAYING */) {
          // clear scheduled buffers
          AL.cancelPendingSourceAudio(src);
  
          var audioSrc = src.audioQueue[0];
          if (!audioSrc) {
            return; // It is possible that AL.scheduleContextAudio() has not yet fed the next buffer, if so, skip.
          }
  
          var duration;
          if (src.type === 0x1028 /* AL_STATIC */ && src.looping) {
            duration = Number.POSITIVE_INFINITY;
          } else {
            // audioSrc._duration is expressed after factoring in playbackRate, so when changing playback rate, need
            // to recompute/rescale the rate to the new playback speed.
            duration = (audioSrc.buffer.duration - audioSrc._startOffset) / src.playbackRate;
          }
  
          audioSrc._duration = duration;
          audioSrc.playbackRate.value = src.playbackRate;
  
          // reschedule buffers with the new playbackRate
          AL.scheduleSourceAudio(src);
        }
      },sourceDuration:function(src) {
        var length = 0.0;
        for (var i = 0; i < src.bufQueue.length; i++) {
          var audioBuf = src.bufQueue[i].audioBuf;
          length += audioBuf ? audioBuf.duration : 0.0;
        }
        return length;
      },sourceTell:function(src) {
        AL.updateSourceTime(src);
  
        var offset = 0.0;
        for (var i = 0; i < src.bufsProcessed; i++) {
          if (src.bufQueue[i].audioBuf) {
            offset += src.bufQueue[i].audioBuf.duration;
          }
        }
        offset += src.bufOffset;
  
        return offset;
      },sourceSeek:function(src, offset) {
        var playing = src.state == 0x1012 /* AL_PLAYING */;
        if (playing) {
          AL.setSourceState(src, 0x1011 /* AL_INITIAL */);
        }
  
        if (src.bufQueue[src.bufsProcessed].audioBuf !== null) {
          src.bufsProcessed = 0;
          while (offset > src.bufQueue[src.bufsProcessed].audioBuf.duration) {
            offset -= src.bufQueue[src.bufsProcessed].audiobuf.duration;
            src.bufsProcessed++;
          }
  
          src.bufOffset = offset;
        }
  
        if (playing) {
          AL.setSourceState(src, 0x1012 /* AL_PLAYING */);
        }
      },getGlobalParam:function(funcname, param) {
        if (!AL.currentCtx) {
          return null;
        }
  
        switch (param) {
        case 0xC000 /* AL_DOPPLER_FACTOR */:
          return AL.currentCtx.dopplerFactor;
        case 0xC003 /* AL_SPEED_OF_SOUND */:
          return AL.currentCtx.speedOfSound;
        case 0xD000 /* AL_DISTANCE_MODEL */:
          return AL.currentCtx.distanceModel;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return null;
        }
      },setGlobalParam:function(funcname, param, value) {
        if (!AL.currentCtx) {
          return;
        }
  
        switch (param) {
        case 0xC000 /* AL_DOPPLER_FACTOR */:
          if (!Number.isFinite(value) || value < 0.0) { // Strictly negative values are disallowed
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.currentCtx.dopplerFactor = value;
          AL.updateListenerSpace(AL.currentCtx);
          break;
        case 0xC003 /* AL_SPEED_OF_SOUND */:
          if (!Number.isFinite(value) || value <= 0.0) { // Negative or zero values are disallowed
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.currentCtx.speedOfSound = value;
          AL.updateListenerSpace(AL.currentCtx);
          break;
        case 0xD000 /* AL_DISTANCE_MODEL */:
          switch (value) {
          case 0 /* AL_NONE */:
          case 0xd001 /* AL_INVERSE_DISTANCE */:
          case 0xd002 /* AL_INVERSE_DISTANCE_CLAMPED */:
          case 0xd003 /* AL_LINEAR_DISTANCE */:
          case 0xd004 /* AL_LINEAR_DISTANCE_CLAMPED */:
          case 0xd005 /* AL_EXPONENT_DISTANCE */:
          case 0xd006 /* AL_EXPONENT_DISTANCE_CLAMPED */:
            AL.currentCtx.distanceModel = value;
            AL.updateContextGlobal(AL.currentCtx);
            break;
          default:
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          break;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
      },getListenerParam:function(funcname, param) {
        if (!AL.currentCtx) {
          return null;
        }
  
        switch (param) {
        case 0x1004 /* AL_POSITION */:
          return AL.currentCtx.listener.position;
        case 0x1006 /* AL_VELOCITY */:
          return AL.currentCtx.listener.velocity;
        case 0x100F /* AL_ORIENTATION */:
          return AL.currentCtx.listener.direction.concat(AL.currentCtx.listener.up);
        case 0x100A /* AL_GAIN */:
          return AL.currentCtx.gain.gain.value;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return null;
        }
      },setListenerParam:function(funcname, param, value) {
        if (!AL.currentCtx) {
          return;
        }
        if (value === null) {
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
  
        var listener = AL.currentCtx.listener;
        switch (param) {
        case 0x1004 /* AL_POSITION */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          listener.position[0] = value[0];
          listener.position[1] = value[1];
          listener.position[2] = value[2];
          AL.updateListenerSpace(AL.currentCtx);
          break;
        case 0x1006 /* AL_VELOCITY */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          listener.velocity[0] = value[0];
          listener.velocity[1] = value[1];
          listener.velocity[2] = value[2];
          AL.updateListenerSpace(AL.currentCtx);
          break;
        case 0x100A /* AL_GAIN */:
          if (!Number.isFinite(value) || value < 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.currentCtx.gain.gain.value = value;
          break;
        case 0x100F /* AL_ORIENTATION */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])
            || !Number.isFinite(value[3]) || !Number.isFinite(value[4]) || !Number.isFinite(value[5])
          ) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          listener.direction[0] = value[0];
          listener.direction[1] = value[1];
          listener.direction[2] = value[2];
          listener.up[0] = value[3];
          listener.up[1] = value[4];
          listener.up[2] = value[5];
          AL.updateListenerSpace(AL.currentCtx);
          break;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
      },getBufferParam:function(funcname, bufferId, param) {
        if (!AL.currentCtx) {
          return;
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
          AL.currentCtx.err = 0xA001 /* AL_INVALID_NAME */;
          return;
        }
  
        switch (param) {
        case 0x2001 /* AL_FREQUENCY */:
          return buf.frequency;
        case 0x2002 /* AL_BITS */:
          return buf.bytesPerSample * 8;
        case 0x2003 /* AL_CHANNELS */:
          return buf.channels;
        case 0x2004 /* AL_SIZE */:
          return buf.length * buf.bytesPerSample * buf.channels;
        case 0x2015 /* AL_LOOP_POINTS_SOFT */:
          if (buf.length === 0) {
            return [0, 0];
          }
          return [
            (buf.audioBuf._loopStart || 0.0) * buf.frequency,
            (buf.audioBuf._loopEnd || buf.length) * buf.frequency
          ];
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return null;
        }
      },setBufferParam:function(funcname, bufferId, param, value) {
        if (!AL.currentCtx) {
          return;
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
          AL.currentCtx.err = 0xA001 /* AL_INVALID_NAME */;
          return;
        }
        if (value === null) {
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
  
        switch (param) {
        case 0x2004 /* AL_SIZE */:
          if (value !== 0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          // Per the spec, setting AL_SIZE to 0 is a legal NOP.
          break;
        case 0x2015 /* AL_LOOP_POINTS_SOFT */:
          if (value[0] < 0 || value[0] > buf.length || value[1] < 0 || value[1] > buf.Length || value[0] >= value[1]) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          if (buf.refCount > 0) {
            AL.currentCtx.err = 0xA004 /* AL_INVALID_OPERATION */;
            return;
          }
  
          if (buf.audioBuf) {
            buf.audioBuf._loopStart = value[0] / buf.frequency;
            buf.audioBuf._loopEnd = value[1] / buf.frequency;
          }
          break;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
      },getSourceParam:function(funcname, sourceId, param) {
        if (!AL.currentCtx) {
          return null;
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
          AL.currentCtx.err = 0xA001 /* AL_INVALID_NAME */;
          return null;
        }
  
        switch (param) {
        case 0x202 /* AL_SOURCE_RELATIVE */:
          return src.relative;
        case 0x1001 /* AL_CONE_INNER_ANGLE */:
          return src.coneInnerAngle;
        case 0x1002 /* AL_CONE_OUTER_ANGLE */:
          return src.coneOuterAngle;
        case 0x1003 /* AL_PITCH */:
          return src.pitch;
        case 0x1004 /* AL_POSITION */:
          return src.position;
        case 0x1005 /* AL_DIRECTION */:
          return src.direction;
        case 0x1006 /* AL_VELOCITY */:
          return src.velocity;
        case 0x1007 /* AL_LOOPING */:
          return src.looping;
        case 0x1009 /* AL_BUFFER */:
          if (src.type === 0x1028 /* AL_STATIC */) {
            return src.bufQueue[0].id;
          }
          return 0;
        case 0x100A /* AL_GAIN */:
          return src.gain.gain.value;
         case 0x100D /* AL_MIN_GAIN */:
          return src.minGain;
        case 0x100E /* AL_MAX_GAIN */:
          return src.maxGain;
        case 0x1010 /* AL_SOURCE_STATE */:
          return src.state;
        case 0x1015 /* AL_BUFFERS_QUEUED */:
          if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0) {
            return 0;
          }
          return src.bufQueue.length;
        case 0x1016 /* AL_BUFFERS_PROCESSED */:
          if ((src.bufQueue.length === 1 && src.bufQueue[0].id === 0) || src.looping) {
            return 0;
          }
          return src.bufsProcessed;
        case 0x1020 /* AL_REFERENCE_DISTANCE */:
          return src.refDistance;
        case 0x1021 /* AL_ROLLOFF_FACTOR */:
          return src.rolloffFactor;
        case 0x1022 /* AL_CONE_OUTER_GAIN */:
          return src.coneOuterGain;
        case 0x1023 /* AL_MAX_DISTANCE */:
          return src.maxDistance;
        case 0x1024 /* AL_SEC_OFFSET */:
          return AL.sourceTell(src);
        case 0x1025 /* AL_SAMPLE_OFFSET */:
          var offset = AL.sourceTell(src);
          if (offset > 0.0) {
            offset *= src.bufQueue[0].frequency;
          }
          return offset;
        case 0x1026 /* AL_BYTE_OFFSET */:
          var offset = AL.sourceTell(src);
          if (offset > 0.0) {
            offset *= src.bufQueue[0].frequency * src.bufQueue[0].bytesPerSample;
          }
          return offset;
        case 0x1027 /* AL_SOURCE_TYPE */:
          return src.type;
        case 0x1214 /* AL_SOURCE_SPATIALIZE_SOFT */:
          return src.spatialize;
        case 0x2009 /* AL_BYTE_LENGTH_SOFT */: 
          var length = 0;
          var bytesPerFrame = 0;
          for (var i = 0; i < src.bufQueue.length; i++) {
            length += src.bufQueue[i].length;
            if (src.bufQueue[i].id !== 0) {
              bytesPerFrame = src.bufQueue[i].bytesPerSample * src.bufQueue[i].channels;
            }
          }
          return length * bytesPerFrame;
        case 0x200A /* AL_SAMPLE_LENGTH_SOFT */:
          var length = 0;
          for (var i = 0; i < src.bufQueue.length; i++) {
            length += src.bufQueue[i].length;
          }
          return length;
        case 0x200B /* AL_SEC_LENGTH_SOFT */:
          return AL.sourceDuration(src);
        case 0xD000 /* AL_DISTANCE_MODEL */:
          return src.distanceModel;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return null;
        }
      },setSourceParam:function(funcname, sourceId, param, value) {
        if (!AL.currentCtx) {
          return;
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
          AL.currentCtx.err = 0xA001 /* AL_INVALID_NAME */;
          return;
        }
        if (value === null) {
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
  
        switch (param) {
        case 0x202 /* AL_SOURCE_RELATIVE */:
          if (value === 1 /* AL_TRUE */) {
            src.relative = true;
            AL.updateSourceSpace(src);
          } else if (value === 0 /* AL_FALSE */) {
            src.relative = false;
            AL.updateSourceSpace(src);
          } else {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          break;
        case 0x1001 /* AL_CONE_INNER_ANGLE */:
          if (!Number.isFinite(value)) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.coneInnerAngle = value;
          if (src.panner) {
            src.panner.coneInnerAngle = value % 360.0;
          }
          break;
        case 0x1002 /* AL_CONE_OUTER_ANGLE */:
          if (!Number.isFinite(value)) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.coneOuterAngle = value;
          if (src.panner) {
            src.panner.coneOuterAngle = value % 360.0;
          }
          break;
        case 0x1003 /* AL_PITCH */:
          if (!Number.isFinite(value) || value <= 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          if (src.pitch === value) {
            break;
          }
  
          src.pitch = value;
          AL.updateSourceRate(src);
          break;
        case 0x1004 /* AL_POSITION */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.position[0] = value[0];
          src.position[1] = value[1];
          src.position[2] = value[2];
          AL.updateSourceSpace(src);
          break;
        case 0x1005 /* AL_DIRECTION */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.direction[0] = value[0];
          src.direction[1] = value[1];
          src.direction[2] = value[2];
          AL.updateSourceSpace(src);
          break;
        case 0x1006 /* AL_VELOCITY */:
          if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.velocity[0] = value[0];
          src.velocity[1] = value[1];
          src.velocity[2] = value[2];
          AL.updateSourceSpace(src);
          break;
        case 0x1007 /* AL_LOOPING */:
          if (value === 1 /* AL_TRUE */) {
            src.looping = true;
            AL.updateSourceTime(src);
            if (src.type === 0x1028 /* AL_STATIC */ && src.audioQueue.length > 0) {
              var audioSrc  = src.audioQueue[0];
              audioSrc.loop = true;
              audioSrc._duration = Number.POSITIVE_INFINITY;
            }
          } else if (value === 0 /* AL_FALSE */) {
            src.looping = false;
            var currentTime = AL.updateSourceTime(src);
            if (src.type === 0x1028 /* AL_STATIC */ && src.audioQueue.length > 0) {
              var audioSrc  = src.audioQueue[0];
              audioSrc.loop = false;
              audioSrc._duration = src.bufQueue[0].audioBuf.duration / src.playbackRate;
              audioSrc._startTime = currentTime - src.bufOffset / src.playbackRate;
            }
          } else {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          break;
        case 0x1009 /* AL_BUFFER */:
          if (src.state === 0x1012 /* AL_PLAYING */ || src.state === 0x1013 /* AL_PAUSED */) {
            AL.currentCtx.err = 0xA004 /* AL_INVALID_OPERATION */;
            return;
          }
  
          if (value === 0) {
            for (var i in src.bufQueue) {
              src.bufQueue[i].refCount--;
            }
            src.bufQueue.length = 1;
            src.bufQueue[0] = AL.buffers[0];
  
            src.bufsProcessed = 0;
            src.type = 0x1030 /* AL_UNDETERMINED */;
          } else {
            var buf = AL.buffers[value];
            if (!buf) {
              AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
              return;
            }
  
            for (var i in src.bufQueue) {
              src.bufQueue[i].refCount--;
            }
            src.bufQueue.length = 0;
  
            buf.refCount++;
            src.bufQueue = [buf];
            src.bufsProcessed = 0;
            src.type = 0x1028 /* AL_STATIC */;
          }
  
          AL.initSourcePanner(src);
          AL.scheduleSourceAudio(src);
          break;
        case 0x100A /* AL_GAIN */:
          if (!Number.isFinite(value) || value < 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.gain.gain.value = value;
          break;
        case 0x100D /* AL_MIN_GAIN */:
          if (!Number.isFinite(value) || value < 0.0 || value > Math.min(src.maxGain, 1.0)) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.minGain = value;
          break;
        case 0x100E /* AL_MAX_GAIN */:
          if (!Number.isFinite(value) || value < Math.max(0.0, src.minGain) || value > 1.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.maxGain = value;
          break;
        case 0x1020 /* AL_REFERENCE_DISTANCE */:
          if (!Number.isFinite(value) || value < 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.refDistance = value;
          if (src.panner) {
            src.panner.refDistance = value;
          }
          break;
        case 0x1021 /* AL_ROLLOFF_FACTOR */:
          if (!Number.isFinite(value) || value < 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.rolloffFactor = value;
          if (src.panner) {
            src.panner.rolloffFactor = value;
          }
          break;
        case 0x1022 /* AL_CONE_OUTER_GAIN */:
          if (!Number.isFinite(value) || value < 0.0 || value > 1.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.coneOuterGain = value;
          if (src.panner) {
            src.panner.coneOuterGain = value;
          }
          break;
        case 0x1023 /* AL_MAX_DISTANCE */:
          if (!Number.isFinite(value) || value < 0.0) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          src.maxDistance = value;
          if (src.panner) {
            src.panner.maxDistance = value;
          }
          break;
        case 0x1024 /* AL_SEC_OFFSET */:
          if (value < 0.0 || value > AL.sourceDuration(src)) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.sourceSeek(src, value);
          break;
        case 0x1025 /* AL_SAMPLE_OFFSET */:
          var srcLen = AL.sourceDuration(src);
          if (srcLen > 0.0) {
            var frequency;
            for (var bufId in src.bufQueue) {
              if (bufId) {
                frequency = src.bufQueue[bufId].frequency;
                break;
              }
            }
            value /= frequency;
          }
          if (value < 0.0 || value > srcLen) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.sourceSeek(src, value);
          break;
        case 0x1026 /* AL_BYTE_OFFSET */:
          var srcLen = AL.sourceDuration(src);
          if (srcLen > 0.0) {
            var bytesPerSec;
            for (var bufId in src.bufQueue) {
              if (bufId) {
                var buf = src.bufQueue[bufId];
                bytesPerSec = buf.frequency * buf.bytesPerSample * buf.channels;
                break;
              }
            }
            value /= bytesPerSec;
          }
          if (value < 0.0 || value > srcLen) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          AL.sourceSeek(src, value);
          break;
        case 0x1214 /* AL_SOURCE_SPATIALIZE_SOFT */:
          if (value !== 0 /* AL_FALSE */ && value !== 1 /* AL_TRUE */ && value !== 2 /* AL_AUTO_SOFT */) {
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
  
          src.spatialize = value;
          AL.initSourcePanner(src);
          break;
        case 0x2009 /* AL_BYTE_LENGTH_SOFT */: 
        case 0x200A /* AL_SAMPLE_LENGTH_SOFT */:
        case 0x200B /* AL_SEC_LENGTH_SOFT */:
          AL.currentCtx.err = 0xA004 /* AL_INVALID_OPERATION */;
          break;
        case 0xD000 /* AL_DISTANCE_MODEL */:
          switch (value) {
          case 0 /* AL_NONE */:
          case 0xd001 /* AL_INVERSE_DISTANCE */:
          case 0xd002 /* AL_INVERSE_DISTANCE_CLAMPED */:
          case 0xd003 /* AL_LINEAR_DISTANCE */:
          case 0xd004 /* AL_LINEAR_DISTANCE_CLAMPED */:
          case 0xd005 /* AL_EXPONENT_DISTANCE */:
          case 0xd006 /* AL_EXPONENT_DISTANCE_CLAMPED */:
            src.distanceModel = value;
            if (AL.currentCtx.sourceDistanceModel) {
              AL.updateContextGlobal(AL.currentCtx);
            }
            break;
          default:
            AL.currentCtx.err = 0xA003 /* AL_INVALID_VALUE */;
            return;
          }
          break;
        default:
          AL.currentCtx.err = 0xA002 /* AL_INVALID_ENUM */;
          return;
        }
      },captures:{},sharedCaptureAudioCtx:null,requireValidCaptureDevice:function(deviceId, funcname) {
        if (deviceId === 0) {
          AL.alcErr = 0xA001 /* ALC_INVALID_DEVICE */;
          return null;
        }
        var c = AL.captures[deviceId];
        if (!c) {
          AL.alcErr = 0xA001 /* ALC_INVALID_DEVICE */;
          return null;
        }
        var err = c.mediaStreamError;
        if (err) {
          AL.alcErr = 0xA001 /* ALC_INVALID_DEVICE */;
          return null;
        }
        return c;
      }};
  function _siv3dDecodeAudioFromFileAsync(filePath, callback, arg) {
          const path = UTF8ToString(filePath, 1024);
          const fileBytes = FS.readFile(path);
  
          const onSuccess = function(decoded) {
              const leftDataBuffer = Module["_malloc"](decoded.length * 4);
              HEAPF32.set(decoded.getChannelData(0), leftDataBuffer>>2);
  
              let rightDataBuffer;
              
              if (decoded.numberOfChannels >= 2) {
                  rightDataBuffer = Module["_malloc"](decoded.length * 4);
                  HEAPF32.set(decoded.getChannelData(1), rightDataBuffer>>2);
              } else {
                  rightDataBuffer = leftDataBuffer;
              }
  
              HEAP32[(arg>>2)+0] = leftDataBuffer;
              HEAP32[(arg>>2)+1] = rightDataBuffer;
              HEAPU32[(arg>>2)+2] = decoded.sampleRate;
              HEAPU32[(arg>>2)+3] = decoded.length;
  
              (function(a1) {  dynCall_vi.apply(null, [callback, a1]); })(arg);
              _siv3dMaybeAwake();
          };
  
          const onFailure = function() {
              HEAP32[(arg>>2)+0] = 0;
              HEAP32[(arg>>2)+1] = 0;
              HEAPU32[(arg>>2)+2] = 0;
              HEAPU32[(arg>>2)+3] = 0;
  
              (function(a1) {  dynCall_vi.apply(null, [callback, a1]); })(arg);
              _siv3dMaybeAwake();
          }
  
          Module["SDL2"].audioContext.decodeAudioData(fileBytes.buffer, onSuccess, onFailure);   
      }

  function _siv3dDeleteXMLHTTPRequest(id, methodPtr, urlPtr) {
          delete siv3dXMLHTTPRequestList[id];
      }

  function _siv3dDownloadFile(filePathPtr, fileNamePtr, mimeTypePtr) {
          const filePath = UTF8ToString(filePathPtr);
          const fileName = UTF8ToString(fileNamePtr);
          const mimeType = mimeTypePtr ? UTF8ToString(mimeTypePtr) : "application/octet-stream";
          const fileData = FS.readFile(filePath);
  
          const blob = new Blob([ fileData ], { type: mimeType });
  
          siv3dDownloadLink.href = URL.createObjectURL(blob);
          siv3dDownloadLink.download = fileName;
  
          siv3dRegisterUserAction(function() {
              siv3dDownloadLink.click();         
          });
      }

  function _siv3dEnumerateAvailableTextToSpeechLanguages(returnPtr) {
          const LanguageNameToLanguageCodeList = {
              "ar-SA": 1025,
              "zh-CN": 2052,
              "zh-HK": 3076,
              "zh-TW": 1028,
              "en-AU": 3081,
              "en-GB": 2057,
              "en-US": 1033,
              "fr-FR": 1036,
              "de-DE": 1031,
              "hi-IN": 1081,
              "it-IT": 1040,
              "ja-JP": 1041,
              "ko-KR": 1042,
              "pt-BR": 1046,
              "ru-RU": 1049,
              "es-ES": 1034
          };
          
          const voices = window.speechSynthesis.getVoices();
          let listBufferPtr = Module["_malloc"](voices.length * 4 * 2);
  
          setValue(returnPtr, voices.length, "i32");
          setValue(returnPtr + 4, listBufferPtr, "i32");
  
          for(var i = 0; i < voices.length; i++) {
              const languageCode = LanguageNameToLanguageCodeList[voices[i].lang];
               
              setValue(listBufferPtr + 0, languageCode, "i32");
              setValue(listBufferPtr + 4, voices[i].default, "i32");
  
              listBufferPtr += 8;
          }
      }

  function _siv3dExitFullscreen() {
          siv3dRegisterUserAction(function () {
              Browser.exitFullscreen();
          });
      }

  function siv3dGetClipboardTextImpl(wakeUp) {
          if (!navigator.clipboard.readText) {
              err("Reading clipboard is not allowed in this browser.");
              wakeUp(0);
              return;
          }
  
          siv3dRegisterUserAction(function () {
              navigator.clipboard.readText()
                  .then(function(str) {
                      const strPtr = allocate(intArrayFromString(str), ALLOC_NORMAL);       
                      wakeUp(strPtr);
                  })
                  .catch(function(_) {
                      wakeUp(0);
                  });
          });
      }
  
  function runAndAbortIfError(func) {
      try {
        return func();
      } catch (e) {
        abort(e);
      }
    }
  
  function sigToWasmTypes(sig) {
      var typeNames = {
        'i': 'i32',
        'j': 'i64',
        'f': 'f32',
        'd': 'f64',
        'p': 'i32',
      };
      var type = {
        parameters: [],
        results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
      };
      for (var i = 1; i < sig.length; ++i) {
        type.parameters.push(typeNames[sig[i]]);
      }
      return type;
    }
  var Asyncify = {State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:131072,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(funcName) {
        var id = Asyncify.callStackNameToId[funcName];
        if (id === undefined) {
          id = Asyncify.callStackId++;
          Asyncify.callStackNameToId[funcName] = id;
          Asyncify.callStackIdToName[id] = funcName;
        }
        return id;
      },instrumentWasmImports:function(imports) {
        var ASYNCIFY_IMPORTS = ["env.siv3dRequestAnimationFrame","env.siv3dGetClipboardText","env.siv3dDecodeImageFromFile","env.siv3dSleepUntilWaked","env.invoke_v","env.invoke_vi","env.invoke_vii","env.invoke_viii","env.invoke_viiii","env.invoke_*","env.emscripten_sleep","env.emscripten_wget","env.emscripten_wget_data","env.emscripten_idb_load","env.emscripten_idb_store","env.emscripten_idb_delete","env.emscripten_idb_exists","env.emscripten_idb_load_blob","env.emscripten_idb_store_blob","env.SDL_Delay","env.emscripten_scan_registers","env.emscripten_lazy_load_code","env.emscripten_fiber_swap","wasi_snapshot_preview1.fd_sync","env.__wasi_fd_sync","env._emval_await","env._dlopen_js","env.__asyncjs__*"].map((x) => x.split('.')[1]);
        for (var x in imports) {
          (function(x) {
            var original = imports[x];
            var sig = original.sig;
            if (typeof original == 'function') {
              var isAsyncifyImport = ASYNCIFY_IMPORTS.indexOf(x) >= 0 ||
                                     x.startsWith('__asyncjs__');
            }
          })(x);
        }
      },instrumentWasmExports:function(exports) {
        var ret = {};
        for (var x in exports) {
          (function(x) {
            var original = exports[x];
            if (typeof original == 'function') {
              ret[x] = function() {
                Asyncify.exportCallStack.push(x);
                try {
                  return original.apply(null, arguments);
                } finally {
                  if (!ABORT) {
                    var y = Asyncify.exportCallStack.pop();
                    assert(y === x);
                    Asyncify.maybeStopUnwind();
                  }
                }
              };
            } else {
              ret[x] = original;
            }
          })(x);
        }
        return ret;
      },maybeStopUnwind:function() {
        if (Asyncify.currData &&
            Asyncify.state === Asyncify.State.Unwinding &&
            Asyncify.exportCallStack.length === 0) {
          // We just finished unwinding.
          // Be sure to set the state before calling any other functions to avoid
          // possible infinite recursion here (For example in debug pthread builds
          // the err() function itself can call back into WebAssembly to get the
          // current pthread_self() pointer).
          Asyncify.state = Asyncify.State.Normal;
          runtimeKeepalivePush();
          // Keep the runtime alive so that a re-wind can be done later.
          runAndAbortIfError(_asyncify_stop_unwind);
          if (typeof Fibers != 'undefined') {
            Fibers.trampoline();
          }
        }
      },whenDone:function() {
        return new Promise((resolve, reject) => {
          Asyncify.asyncPromiseHandlers = {
            resolve: resolve,
            reject: reject
          };
        });
      },allocateData:function() {
        // An asyncify data structure has three fields:
        //  0  current stack pos
        //  4  max stack pos
        //  8  id of function at bottom of the call stack (callStackIdToName[id] == name of js function)
        //
        // The Asyncify ABI only interprets the first two fields, the rest is for the runtime.
        // We also embed a stack in the same memory region here, right next to the structure.
        // This struct is also defined as asyncify_data_t in emscripten/fiber.h
        var ptr = _malloc(12 + Asyncify.StackSize);
        Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
        Asyncify.setDataRewindFunc(ptr);
        return ptr;
      },setDataHeader:function(ptr, stack, stackSize) {
        HEAP32[((ptr)>>2)] = stack;
        HEAP32[(((ptr)+(4))>>2)] = stack + stackSize;
      },setDataRewindFunc:function(ptr) {
        var bottomOfCallStack = Asyncify.exportCallStack[0];
        var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
        HEAP32[(((ptr)+(8))>>2)] = rewindId;
      },getDataRewindFunc:function(ptr) {
        var id = HEAP32[(((ptr)+(8))>>2)];
        var name = Asyncify.callStackIdToName[id];
        var func = Module['asm'][name];
        return func;
      },doRewind:function(ptr) {
        var start = Asyncify.getDataRewindFunc(ptr);
        // Once we have rewound and the stack we no longer need to artificially
        // keep the runtime alive.
        runtimeKeepalivePop();
        return start();
      },handleSleep:function(startAsync) {
        if (ABORT) return;
        if (Asyncify.state === Asyncify.State.Normal) {
          // Prepare to sleep. Call startAsync, and see what happens:
          // if the code decided to call our callback synchronously,
          // then no async operation was in fact begun, and we don't
          // need to do anything.
          var reachedCallback = false;
          var reachedAfterCallback = false;
          startAsync((handleSleepReturnValue) => {
            if (ABORT) return;
            Asyncify.handleSleepReturnValue = handleSleepReturnValue || 0;
            reachedCallback = true;
            if (!reachedAfterCallback) {
              // We are happening synchronously, so no need for async.
              return;
            }
            Asyncify.state = Asyncify.State.Rewinding;
            runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
            if (typeof Browser != 'undefined' && Browser.mainLoop.func) {
              Browser.mainLoop.resume();
            }
            var asyncWasmReturnValue, isError = false;
            try {
              asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
            } catch (err) {
              asyncWasmReturnValue = err;
              isError = true;
            }
            // Track whether the return value was handled by any promise handlers.
            var handled = false;
            if (!Asyncify.currData) {
              // All asynchronous execution has finished.
              // `asyncWasmReturnValue` now contains the final
              // return value of the exported async WASM function.
              //
              // Note: `asyncWasmReturnValue` is distinct from
              // `Asyncify.handleSleepReturnValue`.
              // `Asyncify.handleSleepReturnValue` contains the return
              // value of the last C function to have executed
              // `Asyncify.handleSleep()`, where as `asyncWasmReturnValue`
              // contains the return value of the exported WASM function
              // that may have called C functions that
              // call `Asyncify.handleSleep()`.
              var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
              if (asyncPromiseHandlers) {
                Asyncify.asyncPromiseHandlers = null;
                (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                handled = true;
              }
            }
            if (isError && !handled) {
              // If there was an error and it was not handled by now, we have no choice but to
              // rethrow that error into the global scope where it can be caught only by
              // `onerror` or `onunhandledpromiserejection`.
              throw asyncWasmReturnValue;
            }
          });
          reachedAfterCallback = true;
          if (!reachedCallback) {
            // A true async operation was begun; start a sleep.
            Asyncify.state = Asyncify.State.Unwinding;
            // TODO: reuse, don't alloc/free every sleep
            Asyncify.currData = Asyncify.allocateData();
            if (typeof Browser != 'undefined' && Browser.mainLoop.func) {
              Browser.mainLoop.pause();
            }
            runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
          }
        } else if (Asyncify.state === Asyncify.State.Rewinding) {
          // Stop a resume.
          Asyncify.state = Asyncify.State.Normal;
          runAndAbortIfError(_asyncify_stop_rewind);
          _free(Asyncify.currData);
          Asyncify.currData = null;
          // Call all sleep callbacks now that the sleep-resume is all done.
          Asyncify.sleepCallbacks.forEach((func) => callUserCallback(func));
        } else {
          abort('invalid state: ' + Asyncify.state);
        }
        return Asyncify.handleSleepReturnValue;
      },handleAsync:function(startAsync) {
        return Asyncify.handleSleep((wakeUp) => {
          // TODO: add error handling as a second param when handleSleep implements it.
          startAsync().then(wakeUp);
        });
      }};
  function _siv3dGetClipboardText() {
          return Asyncify.handleSleep(siv3dGetClipboardTextImpl);
      }

  function _siv3dGetJoystickInfo(joystickId) {
          return GLFW.joys[joystickId].id;
      }

  var siv3dActiveTouches = [];
  
  function siv3dAdjustPoint(x, y) {
          const rect = Module["canvas"].getBoundingClientRect();
          const cw = Module["canvas"].width;
          const ch = Module["canvas"].height;
  
          const scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          const scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
  
          let adjustedX = x - (scrollX + rect.left);
          let adjustedY = y - (scrollY + rect.top);
  
          adjustedX = adjustedX * (cw / rect.width);
          adjustedY = adjustedY * (ch / rect.height);
  
          return { x: adjustedX, y: adjustedY };
      }
  function _siv3dGetPrimaryTouchPoint(pX, pY) {
          if (siv3dActiveTouches.length > 0) {
              const touch = siv3dActiveTouches[0];
              const adjusted = siv3dAdjustPoint(touch.pageX, touch.pageY);
              
              setValue(pX, adjusted.x, 'double');
              setValue(pY, adjusted.y, 'double');
              return 1;
          } else {
              return 0;
          }
      }

  var siv3dTextInputCompositionRange = null;
  function _siv3dGetTextInputCompositionRange(start, end) {
          if (siv3dTextInputCompositionRange) {
              setValue(start, siv3dTextInputCompositionRange.startOffset, 'i32');
              setValue(end, siv3dTextInputCompositionRange.endOffset, 'i32');
          } else {
              setValue(start, 0, 'i32');
              setValue(end, 0, 'i32');
          }
      }

  function _siv3dGetXMLHTTPRequestResponseHeaders(id) {
          const http = siv3dXMLHTTPRequestList[id];
          const responseHeaders = http.getAllResponseHeaders();
          return allocate(intArrayFromString(`HTTP/1.1 ${http.status} ${http.statusText}\r\n${responseHeaders}`), ALLOC_NORMAL);
      }

  var siv3dInputElement = null;
  
  var siv3dDialogFileReader = null;
  
  var siv3dDownloadLink = null;
  function _siv3dInitDialog() {
          siv3dInputElement = document.createElement("input");
          siv3dInputElement.type = "file";
  
          siv3dDialogFileReader = new FileReader();
          siv3dDownloadLink = document.createElement("a");
      }

  var siv3dTextInputElement = null;
  function _siv3dInitTextInput() {
          const textInput = document.createElement("div");
          textInput.id = "textinput";
          textInput.contentEditable = "plaintext-only";
          textInput.style.position = "absolute";
          textInput.style.width = "100px";
          textInput.style.zIndex = -2;
          textInput.style.whiteSpace = "pre-wrap";
          textInput.autocomplete = false;
  
          const maskDiv = document.createElement("div");
          maskDiv.style.background = "white";
          maskDiv.style.position = "absolute";
          maskDiv.style.width = "100%";
          maskDiv.style.height = "100%";
          maskDiv.style.zIndex = -1;
  
          /**
           * @type { HTMLCanvasElement }
           */
          const canvas = Module["canvas"];
  
          canvas.parentNode.prepend(textInput);
          canvas.parentNode.prepend(maskDiv);
  
          siv3dTextInputElement = textInput;
      }

  function _siv3dIsSpeakingTextToSpeechLanguages() {
          return window.speechSynthesis.speaking;
      }

  function _siv3dLaunchBrowser(url) {
          const urlString = UTF8ToString(url);
          
          siv3dRegisterUserAction(function () {
              window.open(urlString, '_blank')
          });
      }

  function _siv3dLocateFile() {
          if (Module["locateFile"]) {
              const origin = Module["locateFile"]("");
              return allocate(intArrayFromString(origin), ALLOC_NORMAL);
          } else {
              return 0;
          }
      }

  function _siv3dOpenXMLHTTPRequest(id, methodPtr, urlPtr) {
          const http = siv3dXMLHTTPRequestList[id];
          const method = UTF8ToString(methodPtr);
          const url = UTF8ToString(urlPtr);
          
          http.open(method, url, true);
          http.responseType = "arraybuffer";
      }

  function _siv3dPauseTextToSpeechLanguages() {
          window.speechSynthesis.pause();
      }

  function _siv3dQueryNotificationPermission() {
          const status = {
              "default": 0,
              "granted": 1,
              "denied": 2
          };
          return status[Notification.permission];
      }

  function siv3dRegisterDragDrop(callback) {
          Module["canvas"]["ondrop"] = function (e) {
              e.preventDefault();
  
              const items = e.dataTransfer.items;
              const adusted = siv3dAdjustPoint(e.pageX, e.pageY);
  
              if (items.length == 0) {
                  return;
              }
  
              if (items[0].kind === 'string') {
                  items[0].getAsString(function(str) {
                      const strPtr = allocate(intArrayFromString(str), ALLOC_NORMAL);
                      callback(strPtr, adusted.x, adusted.y);
                      Module["_free"](strPtr);
                  })            
              } else if (items[0].kind === 'file') {
                  const file = items[0].getAsFile();
  
                  if (!siv3dDragDropFileReader) {
                      siv3dDragDropFileReader = new FileReader();
                  }
  
                  const filePath = "/tmp/" + file.name;
  
                  siv3dDragDropFileReader.addEventListener("load", function onLoaded() {
                      FS.writeFile(filePath, new Uint8Array(siv3dDragDropFileReader.result));
  
                      const namePtr = allocate(intArrayFromString(filePath), ALLOC_NORMAL);
                      callback(namePtr, adusted.x, adusted.y);
  
                      siv3dDragDropFileReader.removeEventListener("load", onLoaded);
                  });
  
                  siv3dDragDropFileReader.readAsArrayBuffer(file);              
              }
          };
      }
  
  var siv3dDragDropFileReader = null;
  function _siv3dRegisterDragDrop(ptr) {
          siv3dRegisterDragDrop((function(a1, a2, a3) {  dynCall_viii.apply(null, [ptr, a1, a2, a3]); }));
      }

  function siv3dRegisterDragEnter(callback) {
          Module["canvas"]["ondragenter"] = function (e) {
              e.preventDefault();
  
              const types = e.dataTransfer.types;
  
              if (types.length > 0) {
                  const adusted = siv3dAdjustPoint(e.pageX, e.pageY);
                  callback(types[0] === 'Files' ? 1 : 0, adusted.x, adusted.y);
              }        
          };
      }
  function _siv3dRegisterDragEnter(ptr) {
          siv3dRegisterDragEnter((function(a1, a2, a3) {  dynCall_viii.apply(null, [ptr, a1, a2, a3]); }));
      }

  function siv3dRegisterDragExit(callback) {
          Module["canvas"]["ondragexit"] = function (e) {
              e.preventDefault();
              callback();
          };
      }
  function _siv3dRegisterDragExit(ptr) {
          siv3dRegisterDragExit((function() {  dynCall_v.call(null, ptr); }));
      }

  function siv3dRegisterDragUpdate(callback) {
          Module["canvas"]["ondragover"] = function (e) {
              e.preventDefault();
              const adusted = siv3dAdjustPoint(e.pageX, e.pageY);
              callback(adusted.x, adusted.y);
          };
      }
  function _siv3dRegisterDragUpdate(ptr) {
          siv3dRegisterDragUpdate((function(a1, a2) {  dynCall_vii.apply(null, [ptr, a1, a2]); }));
      }

  function _siv3dRegisterNotificationCallback(id, callback, callbackArg) {
          const notificattion = siv3dNotifications[id];
  
          notificattion.onclick = function() {
              (function(a1, a2, a3) {  dynCall_viii.apply(null, [callback, a1, a2, a3]); })(id, 1 /* ToastNotificationState.Activated */, callbackArg);
              _siv3dMaybeAwake();
          }
          notificattion.onshow = function() {
              (function(a1, a2, a3) {  dynCall_viii.apply(null, [callback, a1, a2, a3]); })(id, 2 /* ToastNotificationState.Shown */, callbackArg);
              _siv3dMaybeAwake();
          }
          notificattion.onclose = function() {
              (function(a1, a2, a3) {  dynCall_viii.apply(null, [callback, a1, a2, a3]); })(id, 5 /* ToastNotificationState.TimedOut */, callbackArg);
              _siv3dMaybeAwake();
          }
          notificattion.onerror = function() {
              (function(a1, a2, a3) {  dynCall_viii.apply(null, [callback, a1, a2, a3]); })(id, 6 /* ToastNotificationState.Error */, callbackArg);
              _siv3dMaybeAwake();
          }
      }

  function siv3dRegisterTextInputCallback(callbackFn) {
          let composing = false;
          let insertCompositionTextInvoked = false;
  
          siv3dTextInputElement.addEventListener('input', function (e) {
              if (e.isComposing || composing) {
                  return;
              }
  
              if (e.inputType == "insertText") {
                  if (e.data) {
                      for (const char of e.data) {
                          const codePoint = char.codePointAt(0);
                          callbackFn(codePoint);
                      }
                  }
              } else if (e.inputType == "insertFromPaste") {
                  if (e.data) {
                      for (const char of e.data) {
                          const codePoint = char.codePointAt(0);
                          callbackFn(codePoint);
                      }
                  } else {
                      navigator.clipboard.readText().then(
                          data => {
                              for (const char of data) {
                                  const codePoint = char.codePointAt(0);
                                  callbackFn(codePoint);
                              }
                          }
                      );
                  }
              } else if (e.inputType == "deleteContentBackward") {
                  callbackFn(8);
              } else if (e.inputType == "deleteContentForward") {
                  callbackFn(0x7F);
              }
          });
          siv3dTextInputElement.addEventListener('beforeinput', function (e) {
              if (e.inputType == "insertCompositionText" || (composing && e.inputType == "insertText")) {
                  siv3dTextInputCompositionRange = e.getTargetRanges()[0];
  
                  if (!insertCompositionTextInvoked && !!siv3dTextInputCompositionRange) {
                      const length = siv3dTextInputCompositionRange.endOffset - siv3dTextInputCompositionRange.startOffset;
                      for (var i = 0; i < length; i++) {
                          callbackFn(8);
                      }
                  }
                  insertCompositionTextInvoked = true;
              }
          });
          siv3dTextInputElement.addEventListener('compositionstart', function (e) {
              composing = true;
              insertCompositionTextInvoked = false;
          });
          siv3dTextInputElement.addEventListener('compositionend', function (e) {
              composing = false;
              siv3dTextInputCompositionRange = null;
              for (const char of e.data) {
                  const codePoint = char.codePointAt(0);
                  callbackFn(codePoint);
              }
          });
      }
  function _siv3dRegisterTextInputCallback(callback) {
          siv3dRegisterTextInputCallback((function(a1) {  dynCall_vi.apply(null, [callback, a1]); }));
      }

  function _siv3dRegisterTextInputMarkedCallback(callback) {
          siv3dTextInputElement.addEventListener('compositionupdate', function (e) {
              const strPtr = allocate(intArrayFromString(e.data), ALLOC_NORMAL);
              (function(a1) {  dynCall_vi.apply(null, [callback, a1]); })(strPtr);
              Module["_free"](strPtr);
          })
          siv3dTextInputElement.addEventListener('compositionend', function (e) {
              (function(a1) {  dynCall_vi.apply(null, [callback, a1]); })(0);
          });
      }

  function _siv3dRegisterTextToSpeechLanguagesUpdateHander(callback, callbackArg) {
          window.speechSynthesis.onvoiceschanged = function() {
              (function(a1) {  dynCall_vi.apply(null, [callback, a1]); })(callbackArg);
          };
      }

  function siv3dOnTouchMove(e) {
          siv3dActiveTouches = Array.from(e.touches);
          // e.stopPropagation();
      }
  
  function siv3dOnTouchStart(e) {
          siv3dActiveTouches = Array.from(e.touches);
          // e.preventDefault()
      }
  function _siv3dRegisterTouchCallback() {
          Module["canvas"].addEventListener("touchstart", siv3dOnTouchStart);
          Module["canvas"].addEventListener("touchmove", siv3dOnTouchMove);
      }

  function _siv3dRequestAnimationFrame() {
          Asyncify.handleSleep(function(wakeUp) {
              requestAnimationFrame(function() {
                  callUserCallback(wakeUp);
              });
          });
      }

  function _siv3dRequestFullscreen() {
          siv3dRegisterUserAction(function () {
              Browser.requestFullscreen();
          });
      }

  function _siv3dRequestTextInputFocus(isFocusRequired) {
          const isFocusRequiredBool = isFocusRequired != 0;
  
          if (isFocusRequiredBool) {
              if (document.activeElement != siv3dTextInputElement) {
                  siv3dRegisterUserAction(function () {
                      siv3dTextInputElement.focus();
                  });
              }
          } else {
              if (document.activeElement == siv3dTextInputElement) {
                  siv3dRegisterUserAction(function () {
                      siv3dTextInputElement.blur();
                  });
              }
          }
      }

  function _siv3dResumeTextToSpeechLanguages() {
          window.speechSynthesis.resume();
      }

  function _siv3dSendXMLHTTPRequest(id, dataPtr, dataSize) {
          runtimeKeepalivePush();
  
          siv3dXMLHTTPRequestList[id].addEventListener("load", function() {
              runtimeKeepalivePop();
          });
          siv3dXMLHTTPRequestList[id].addEventListener("error", function() {
              runtimeKeepalivePop();
          });
  
          const data = dataPtr ? new Uint8Array(HEAPU8.buffer, dataPtr, dataSize) : null;
          siv3dXMLHTTPRequestList[id].send(data);
      }

  function _siv3dSetClipboardText(ctext) {
          const text = UTF8ToString(ctext);
          
          siv3dRegisterUserAction(function () {
              navigator.clipboard.writeText(text);
          });
      }

  function _siv3dSetCursorStyle(style) {
          const styleText = UTF8ToString(style);
          Module["canvas"]["style"]["cursor"] = styleText;
      }

  function _siv3dSetXMLHTTPRequestCallback(id, fnPtr, userDataPtr) {
          siv3dXMLHTTPRequestList[id].addEventListener("load", function() {
              (function(a1, a2) {  dynCall_vii.apply(null, [fnPtr, a1, a2]); })(id, userDataPtr);
          });
      }

  function _siv3dSetXMLHTTPRequestErrorCallback(id, fnPtr, userDataPtr) {
          siv3dXMLHTTPRequestList[id].addEventListener("error", function() {
              (function(a1, a2) {  dynCall_vii.apply(null, [fnPtr, a1, a2]); })(id, userDataPtr);
          });
      }

  function _siv3dSetXMLHTTPRequestProgressCallback(id, fnPtr, userDataPtr) {
          siv3dXMLHTTPRequestList[id].addEventListener("progress", function(e) {
              (function(a1, a2, a3, a4) {  dynCall_viiii.apply(null, [fnPtr, a1, a2, a3, a4]); })(id, userDataPtr, e.total, e.loaded);
          });
      }

  function _siv3dSetXMLHTTPRequestRequestHeader(id, namePtr, dataPtr) {
          const name = UTF8ToString(namePtr);
          const data = UTF8ToString(dataPtr);
          siv3dXMLHTTPRequestList[id].setRequestHeader(name, data);
      }

  function _siv3dSetXMLHTTPRequestWriteBackFile(id, fileNamePtr) {
          const http = siv3dXMLHTTPRequestList[id];
          const _file = UTF8ToString(fileNamePtr);
  
          http.addEventListener("load", function() {
              const index = _file.lastIndexOf('/');
              const destinationDirectory = PATH.dirname(_file);
              
              if (http.status >= 200 && http.status < 300) {
                  // if a file exists there, we overwrite it
                  try {
                      FS.unlink(_file);
                  } catch (e) {}
                  // if the destination directory does not yet exist, create it
                  FS.mkdirTree(destinationDirectory);
                  FS.createDataFile( _file.substr(0, index), _file.substr(index + 1), new Uint8Array(/** @type{ArrayBuffer}*/(http.response)), true, true, false);
              }
          });
      }

  function _siv3dSleepUntilWaked() {
          Asyncify.handleSleep(function(wakeUp) {
              siv3dAwakeFunction = wakeUp;
          });
          return 0;
      }

  function _siv3dStartTextToSpeechLanguages(textPtr, rate, volume, languageCode) {
          const LanguageCodeToLanguageNameList = {
              1025: "ar-SA",
              2052: "zh-CN",
              3076: "zh-HK",
              1028: "zh-TW",
              3081: "en-AU",
              2057: "en-GB",
              1033: "en-US",
              1036: "fr-FR",
              1031: "de-DE",
              1081: "hi-IN",
              1040: "it-IT",
              1041: "ja-JP",
              1042: "ko-KR",
              1046: "pt-BR",
              1049: "ru-RU",
              1034: "es-ES"
          };
          const text = UTF8ToString(textPtr);
  
          const speechUtter = new SpeechSynthesisUtterance(text);
  
          speechUtter.lang = LanguageCodeToLanguageNameList[languageCode];
          speechUtter.rate = rate;
          speechUtter.volume = volume;
  
          window.speechSynthesis.speak(speechUtter);
      }

  var siv3dHasUserActionTriggered = false;
  
  function siv3dTriggerUserAction() {
          for (var i = 0; i < siv3dPendingUserActions.length; i++) {
              (siv3dPendingUserActions[i])();
          }
  
          siv3dPendingUserActions.splice(0);
          siv3dHasUserActionTriggered = false;
      }
  function siv3dUserActionHookCallBack() {
          if (!siv3dHasUserActionTriggered) {
              setTimeout(siv3dTriggerUserAction, 30);
              siv3dHasUserActionTriggered = true;
          }
      }
  
  function siv3dUserActionTouchEndCallBack(e) {
          siv3dTriggerUserAction();
          e.preventDefault();
      }
  function _siv3dStartUserActionHook() {
          Module["canvas"].addEventListener('touchend', siv3dUserActionTouchEndCallBack);
          Module["canvas"].addEventListener('mousedown', siv3dUserActionHookCallBack);
          window.addEventListener('keydown', siv3dUserActionHookCallBack);
      }

  function _siv3dStopUserActionHook() {
          Module["canvas"].removeEventListener('touchend', siv3dUserActionTouchEndCallBack);
          Module["canvas"].removeEventListener('mousedown', siv3dUserActionHookCallBack);
          window.removeEventListener('keydown', siv3dUserActionHookCallBack);
      }

  function _siv3dUnregisterTouchCallback() {
          Module["canvas"].removeEventListener("touchstart", siv3dOnTouchStart);
          Module["canvas"].removeEventListener("touchmove", siv3dOnTouchMove);
      }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          }
          return 'PM';
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && __isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }

  /** @type {function(...*):?} */
  function _tt_face_get_ps_name(
  ) {
  err('missing function: tt_face_get_ps_name'); abort(-1);
  }

  function _uuid_generate(out) {
      // void uuid_generate(uuid_t out);
      var uuid = null;
  
      if (ENVIRONMENT_IS_NODE) {
        // If Node.js try to use crypto.randomBytes
        try {
          var rb = require('crypto')['randomBytes'];
          uuid = rb(16);
        } catch(e) {}
      } else if (ENVIRONMENT_IS_WEB &&
                 typeof window.crypto != 'undefined' &&
                 typeof window.crypto.getRandomValues != 'undefined') {
        // If crypto.getRandomValues is available try to use it.
        uuid = new Uint8Array(16);
        window.crypto.getRandomValues(uuid);
      }
  
      // Fall back to Math.random if a higher quality random number generator is not available.
      if (!uuid) {
        uuid = new Array(16);
        var d = new Date().getTime();
        for (var i = 0; i < 16; i++) {
          var r = ((d + Math.random() * 256) % 256)|0;
          d = (d / 256)|0;
          uuid[i] = r;
        }
      }
  
      // Makes uuid compliant to RFC-4122
      uuid[6] = (uuid[6] & 0x0F) | 0x40; // uuid version
      uuid[8] = (uuid[8] & 0x3F) | 0x80; // uuid variant
      writeArrayToMemory(uuid, out);
    }


  function allocateUTF8OnStack(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }


  function uleb128Encode(n, target) {
      if (n < 128) {
        target.push(n);
      } else {
        target.push((n % 128) | 128, n >> 7);
      }
    }
  function convertJsFunctionToWasm(func, sig) {
  
      // If the type reflection proposal is available, use the new
      // "WebAssembly.Function" constructor.
      // Otherwise, construct a minimal wasm module importing the JS function and
      // re-exporting it.
      if (typeof WebAssembly.Function == "function") {
        return new WebAssembly.Function(sigToWasmTypes(sig), func);
      }
  
      // The module is static, with the exception of the type section, which is
      // generated based on the signature passed in.
      var typeSectionBody = [
        0x01, // count: 1
        0x60, // form: func
      ];
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = {
        'i': 0x7f, // i32
        'p': 0x7f, // i32
        'j': 0x7e, // i64
        'f': 0x7d, // f32
        'd': 0x7c, // f64
      };
  
      // Parameters, length + signatures
      uleb128Encode(sigParam.length, typeSectionBody);
      for (var i = 0; i < sigParam.length; ++i) {
        typeSectionBody.push(typeCodes[sigParam[i]]);
      }
  
      // Return values, length + signatures
      // With no multi-return in MVP, either 0 (void) or 1 (anything else)
      if (sigRet == 'v') {
        typeSectionBody.push(0x00);
      } else {
        typeSectionBody.push(0x01, typeCodes[sigRet]);
      }
  
      // Rest of the module is static
      var bytes = [
        0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
        0x01, 0x00, 0x00, 0x00, // version: 1
        0x01, // Type section code
      ];
      // Write the overall length of the type section followed by the body
      uleb128Encode(typeSectionBody.length, bytes);
      bytes.push.apply(bytes, typeSectionBody);
  
      // The rest of the module is static
      bytes.push(
        0x02, 0x07, // import section
          // (import "e" "f" (func 0 (type 0)))
          0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
        0x07, 0x05, // export section
          // (export "f" (func 0 (type 0)))
          0x01, 0x01, 0x66, 0x00, 0x00,
      );
  
      // We can compile this wasm module synchronously because it is very small.
      // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
      var module = new WebAssembly.Module(new Uint8Array(bytes));
      var instance = new WebAssembly.Instance(module, { 'e': { 'f': func } });
      var wrappedFunc = instance.exports['f'];
      return wrappedFunc;
    }
  
  function updateTableMap(offset, count) {
      if (functionsInTableMap) {
        for (var i = offset; i < offset + count; i++) {
          var item = getWasmTableEntry(i);
          // Ignore null values.
          if (item) {
            functionsInTableMap.set(item, i);
          }
        }
      }
    }
  
  var functionsInTableMap = undefined;
  
  var freeTableIndexes = [];
  function getEmptyTableSlot() {
      // Reuse a free index if there is one, otherwise grow.
      if (freeTableIndexes.length) {
        return freeTableIndexes.pop();
      }
      // Grow the table
      try {
        wasmTable.grow(1);
      } catch (err) {
        if (!(err instanceof RangeError)) {
          throw err;
        }
        throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
      }
      return wasmTable.length - 1;
    }
  
  function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func);
      // With ABORT_ON_WASM_EXCEPTIONS wasmTable.get is overriden to return wrapped
      // functions so we need to call it here to retrieve the potential wrapper correctly
      // instead of just storing 'func' directly into wasmTableMirror
      wasmTableMirror[idx] = wasmTable.get(idx);
    }
  /** @param {string=} sig */
  function addFunction(func, sig) {
  
      // Check if the function is already in the table, to ensure each function
      // gets a unique index. First, create the map if this is the first use.
      if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap();
        updateTableMap(0, wasmTable.length);
      }
      if (functionsInTableMap.has(func)) {
        return functionsInTableMap.get(func);
      }
  
      // It's not in the table, add it now.
  
      var ret = getEmptyTableSlot();
  
      // Set the new value.
      try {
        // Attempting to call this with JS function will cause of table.set() to fail
        setWasmTableEntry(ret, func);
      } catch (err) {
        if (!(err instanceof TypeError)) {
          throw err;
        }
        var wrapped = convertJsFunctionToWasm(func, sig);
        setWasmTableEntry(ret, wrapped);
      }
  
      functionsInTableMap.set(func, ret);
  
      return ret;
    }

  function removeFunction(index) {
      functionsInTableMap.delete(getWasmTableEntry(index));
      freeTableIndexes.push(index);
    }

  var ALLOC_NORMAL = 0;
  
  var ALLOC_STACK = 1;
  function allocate(slab, allocator) {
      var ret;
  
      if (allocator == ALLOC_STACK) {
        ret = stackAlloc(slab.length);
      } else {
        ret = _malloc(slab.length);
      }
  
      if (!slab.subarray && !slab.slice) {
        slab = new Uint8Array(slab);
      }
      HEAPU8.set(slab, ret);
      return ret;
    }



  function AsciiToString(ptr) {
      var str = '';
      while (1) {
        var ch = HEAPU8[((ptr++)>>0)];
        if (!ch) return str;
        str += String.fromCharCode(ch);
      }
    }

  function stringToAscii(str, outPtr) {
      return writeAsciiToMemory(str, outPtr, false);
    }

  var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;;
  function UTF16ToString(ptr, maxBytesToRead) {
      var endPtr = ptr;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
      // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
      endPtr = idx << 1;
  
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var str = '';
  
        // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
        // will always evaluate to true. The loop is then terminated on the first null char.
        for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
          var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
          if (codeUnit == 0) break;
          // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
          str += String.fromCharCode(codeUnit);
        }
  
        return str;
      }
    }

  function stringToUTF16(str, outPtr, maxBytesToWrite) {
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2; // Null terminator.
      var startPtr = outPtr;
      var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
        HEAP16[((outPtr)>>1)] = codeUnit;
        outPtr += 2;
      }
      // Null-terminate the pointer to the HEAP.
      HEAP16[((outPtr)>>1)] = 0;
      return outPtr - startPtr;
    }

  function lengthBytesUTF16(str) {
      return str.length*2;
    }

  function UTF32ToString(ptr, maxBytesToRead) {
      var i = 0;
  
      var str = '';
      // If maxBytesToRead is not passed explicitly, it will be undefined, and this
      // will always evaluate to true. This saves on code size.
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
        if (utf32 == 0) break;
        ++i;
        // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        if (utf32 >= 0x10000) {
          var ch = utf32 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        } else {
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    }

  function stringToUTF32(str, outPtr, maxBytesToWrite) {
      // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 0x7FFFFFFF;
      }
      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
        }
        HEAP32[((outPtr)>>2)] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }
      // Null-terminate the pointer to the HEAP.
      HEAP32[((outPtr)>>2)] = 0;
      return outPtr - startPtr;
    }

  function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
        len += 4;
      }
  
      return len;
    }



  /** @deprecated @param {boolean=} dontAddNull */
  function writeStringToMemory(string, buffer, dontAddNull) {
      warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');
  
      var /** @type {number} */ lastChar, /** @type {number} */ end;
      if (dontAddNull) {
        // stringToUTF8Array always appends null. If we don't want to do that, remember the
        // character that existed at the location where the null will be placed, and restore
        // that after the write (below).
        end = buffer + lengthBytesUTF8(string);
        lastChar = HEAP8[end];
      }
      stringToUTF8(string, buffer, Infinity);
      if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
    }




  function intArrayToString(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      var chr = array[i];
      if (chr > 0xFF) {
        if (ASSERTIONS) {
          assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
        }
        chr &= 0xFF;
      }
      ret.push(String.fromCharCode(chr));
    }
    return ret.join('');
  }


  function getCFunc(ident) {
      var func = Module['_' + ident]; // closure exported function
      return func;
    }
  
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
  function ccall(ident, returnType, argTypes, args, opts) {
      // For fast lookup of conversion functions
      var toC = {
        'string': (str) => {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) { // null string
            // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }
          return ret;
        },
        'array': (arr) => {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        }
      };
  
      function convertReturnValue(ret) {
        if (returnType === 'string') {
          
          return UTF8ToString(ret);
        }
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
  
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      // Data for a previous async operation that was in flight before us.
      var previousAsync = Asyncify.currData;
      var ret = func.apply(null, cArgs);
      function onDone(ret) {
        runtimeKeepalivePop();
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret);
      }
      // Keep the runtime alive through all calls. Note that this call might not be
      // async, but for simplicity we push and pop in all calls.
      runtimeKeepalivePush();
      var asyncMode = opts && opts.async;
      if (Asyncify.currData != previousAsync) {
        // This is a new async operation. The wasm is paused and has unwound its stack.
        // We need to return a Promise that resolves the return value
        // once the stack is rewound and execution finishes.
        return Asyncify.whenDone().then(onDone);
      }
  
      ret = onDone(ret);
      // If this is an async ccall, ensure we return a promise
      if (asyncMode) return Promise.resolve(ret);
      return ret;
    }

  
    /**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */
  function cwrap(ident, returnType, argTypes, opts) {
      argTypes = argTypes || [];
      // When the function takes numbers and returns a number, we can just return
      // the original function
      var numericArgs = argTypes.every((type) => type === 'number' || type === 'boolean');
      var numericRet = returnType !== 'string';
      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }
      return function() {
        return ccall(ident, returnType, argTypes, arguments, opts);
      }
    }




  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_unlink"] = FS.unlink;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;;
var GLctx;;

      // exports
      Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) { Browser.requestFullscreen(lockPointer, resizeCanvas) };
      Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
      Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
      Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
      Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
      Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() };
      Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) { return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes) };
      var preloadedImages = {};
      var preloadedAudios = {};;
var ASSERTIONS = false;

// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob == 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE == 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf = Buffer.from(s, 'base64');
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmLibraryArg = {
  "_ZN3s3d6System15DefaultLanguageEv": __ZN3s3d6System15DefaultLanguageEv,
  "_ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv": __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv,
  "__assert_fail": ___assert_fail,
  "__cxa_allocate_exception": ___cxa_allocate_exception,
  "__cxa_begin_catch": ___cxa_begin_catch,
  "__cxa_call_unexpected": ___cxa_call_unexpected,
  "__cxa_current_primary_exception": ___cxa_current_primary_exception,
  "__cxa_decrement_exception_refcount": ___cxa_decrement_exception_refcount,
  "__cxa_end_catch": ___cxa_end_catch,
  "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
  "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
  "__cxa_find_matching_catch_4": ___cxa_find_matching_catch_4,
  "__cxa_find_matching_catch_5": ___cxa_find_matching_catch_5,
  "__cxa_find_matching_catch_7": ___cxa_find_matching_catch_7,
  "__cxa_free_exception": ___cxa_free_exception,
  "__cxa_increment_exception_refcount": ___cxa_increment_exception_refcount,
  "__cxa_rethrow": ___cxa_rethrow,
  "__cxa_rethrow_primary_exception": ___cxa_rethrow_primary_exception,
  "__cxa_throw": ___cxa_throw,
  "__cxa_uncaught_exceptions": ___cxa_uncaught_exceptions,
  "__resumeException": ___resumeException,
  "__syscall_bind": ___syscall_bind,
  "__syscall_chdir": ___syscall_chdir,
  "__syscall_connect": ___syscall_connect,
  "__syscall_fcntl64": ___syscall_fcntl64,
  "__syscall_fstat64": ___syscall_fstat64,
  "__syscall_getcwd": ___syscall_getcwd,
  "__syscall_getdents64": ___syscall_getdents64,
  "__syscall_getsockname": ___syscall_getsockname,
  "__syscall_ioctl": ___syscall_ioctl,
  "__syscall_lstat64": ___syscall_lstat64,
  "__syscall_mkdirat": ___syscall_mkdirat,
  "__syscall_newfstatat": ___syscall_newfstatat,
  "__syscall_openat": ___syscall_openat,
  "__syscall_poll": ___syscall_poll,
  "__syscall_readlinkat": ___syscall_readlinkat,
  "__syscall_recvfrom": ___syscall_recvfrom,
  "__syscall_sendto": ___syscall_sendto,
  "__syscall_socket": ___syscall_socket,
  "__syscall_stat64": ___syscall_stat64,
  "__syscall_unlinkat": ___syscall_unlinkat,
  "_emscripten_date_now": __emscripten_date_now,
  "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
  "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
  "_localtime_js": __localtime_js,
  "_tzset_js": __tzset_js,
  "abort": _abort,
  "emscripten_asm_const_int": _emscripten_asm_const_int,
  "emscripten_asm_const_int_sync_on_main_thread": _emscripten_asm_const_int_sync_on_main_thread,
  "emscripten_get_heap_max": _emscripten_get_heap_max,
  "emscripten_get_now": _emscripten_get_now,
  "emscripten_memcpy_big": _emscripten_memcpy_big,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "emscripten_set_timeout": _emscripten_set_timeout,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "exit": _exit,
  "fd_close": _fd_close,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "getaddrinfo": _getaddrinfo,
  "getentropy": _getentropy,
  "glActiveTexture": _glActiveTexture,
  "glAttachShader": _glAttachShader,
  "glBindBuffer": _glBindBuffer,
  "glBindBufferBase": _glBindBufferBase,
  "glBindFramebuffer": _glBindFramebuffer,
  "glBindRenderbuffer": _glBindRenderbuffer,
  "glBindSampler": _glBindSampler,
  "glBindTexture": _glBindTexture,
  "glBindVertexArray": _glBindVertexArray,
  "glBlendEquationSeparate": _glBlendEquationSeparate,
  "glBlendFuncSeparate": _glBlendFuncSeparate,
  "glBlitFramebuffer": _glBlitFramebuffer,
  "glBufferData": _glBufferData,
  "glBufferSubData": _glBufferSubData,
  "glCheckFramebufferStatus": _glCheckFramebufferStatus,
  "glClear": _glClear,
  "glClearColor": _glClearColor,
  "glClearDepthf": _glClearDepthf,
  "glColorMask": _glColorMask,
  "glCompileShader": _glCompileShader,
  "glCreateProgram": _glCreateProgram,
  "glCreateShader": _glCreateShader,
  "glCullFace": _glCullFace,
  "glDeleteBuffers": _glDeleteBuffers,
  "glDeleteFramebuffers": _glDeleteFramebuffers,
  "glDeleteProgram": _glDeleteProgram,
  "glDeleteRenderbuffers": _glDeleteRenderbuffers,
  "glDeleteSamplers": _glDeleteSamplers,
  "glDeleteShader": _glDeleteShader,
  "glDeleteTextures": _glDeleteTextures,
  "glDeleteVertexArrays": _glDeleteVertexArrays,
  "glDepthFunc": _glDepthFunc,
  "glDepthMask": _glDepthMask,
  "glDetachShader": _glDetachShader,
  "glDisable": _glDisable,
  "glDrawArrays": _glDrawArrays,
  "glDrawElements": _glDrawElements,
  "glEnable": _glEnable,
  "glEnableVertexAttribArray": _glEnableVertexAttribArray,
  "glFramebufferRenderbuffer": _glFramebufferRenderbuffer,
  "glFramebufferTexture2D": _glFramebufferTexture2D,
  "glFrontFace": _glFrontFace,
  "glGenBuffers": _glGenBuffers,
  "glGenFramebuffers": _glGenFramebuffers,
  "glGenRenderbuffers": _glGenRenderbuffers,
  "glGenSamplers": _glGenSamplers,
  "glGenTextures": _glGenTextures,
  "glGenVertexArrays": _glGenVertexArrays,
  "glGetIntegerv": _glGetIntegerv,
  "glGetShaderInfoLog": _glGetShaderInfoLog,
  "glGetShaderiv": _glGetShaderiv,
  "glGetString": _glGetString,
  "glGetUniformBlockIndex": _glGetUniformBlockIndex,
  "glGetUniformLocation": _glGetUniformLocation,
  "glLinkProgram": _glLinkProgram,
  "glMapBufferRange": _glMapBufferRange,
  "glPolygonOffset": _glPolygonOffset,
  "glReadPixels": _glReadPixels,
  "glRenderbufferStorageMultisample": _glRenderbufferStorageMultisample,
  "glSamplerParameterf": _glSamplerParameterf,
  "glSamplerParameterfv": _glSamplerParameterfv,
  "glSamplerParameteri": _glSamplerParameteri,
  "glScissor": _glScissor,
  "glShaderSource": _glShaderSource,
  "glTexImage2D": _glTexImage2D,
  "glTexParameteri": _glTexParameteri,
  "glTexSubImage2D": _glTexSubImage2D,
  "glUniform1i": _glUniform1i,
  "glUniformBlockBinding": _glUniformBlockBinding,
  "glUnmapBuffer": _glUnmapBuffer,
  "glUseProgram": _glUseProgram,
  "glVertexAttribPointer": _glVertexAttribPointer,
  "glViewport": _glViewport,
  "glewInit": _glewInit,
  "glfwCreateCursor": _glfwCreateCursor,
  "glfwCreateWindow": _glfwCreateWindow,
  "glfwDestroyCursor": _glfwDestroyCursor,
  "glfwGetCursorPos": _glfwGetCursorPos,
  "glfwGetFramebufferSize": _glfwGetFramebufferSize,
  "glfwGetJoystickAxes": _glfwGetJoystickAxes,
  "glfwGetJoystickButtons": _glfwGetJoystickButtons,
  "glfwGetJoystickHats": _glfwGetJoystickHats,
  "glfwGetKeysSiv3D": _glfwGetKeysSiv3D,
  "glfwGetMonitorContentScale": _glfwGetMonitorContentScale,
  "glfwGetMonitorInfo_Siv3D": _glfwGetMonitorInfo_Siv3D,
  "glfwGetMonitorName": _glfwGetMonitorName,
  "glfwGetMonitorPhysicalSize": _glfwGetMonitorPhysicalSize,
  "glfwGetMonitorWorkarea": _glfwGetMonitorWorkarea,
  "glfwGetMonitors": _glfwGetMonitors,
  "glfwGetVideoMode": _glfwGetVideoMode,
  "glfwGetWindowAttrib": _glfwGetWindowAttrib,
  "glfwGetWindowPos": _glfwGetWindowPos,
  "glfwGetWindowSize": _glfwGetWindowSize,
  "glfwGetWindowUserPointer": _glfwGetWindowUserPointer,
  "glfwIconifyWindow": _glfwIconifyWindow,
  "glfwInit": _glfwInit,
  "glfwJoystickPresent": _glfwJoystickPresent,
  "glfwMakeContextCurrent": _glfwMakeContextCurrent,
  "glfwMaximizeWindow": _glfwMaximizeWindow,
  "glfwPollEvents": _glfwPollEvents,
  "glfwRestoreWindow": _glfwRestoreWindow,
  "glfwSetCursorPos": _glfwSetCursorPos,
  "glfwSetErrorCallback": _glfwSetErrorCallback,
  "glfwSetFramebufferSizeCallback": _glfwSetFramebufferSizeCallback,
  "glfwSetMouseButtonCallback": _glfwSetMouseButtonCallback,
  "glfwSetScrollCallback": _glfwSetScrollCallback,
  "glfwSetWindowFocusCallback": _glfwSetWindowFocusCallback,
  "glfwSetWindowIconifyCallback": _glfwSetWindowIconifyCallback,
  "glfwSetWindowPos": _glfwSetWindowPos,
  "glfwSetWindowPosCallback": _glfwSetWindowPosCallback,
  "glfwSetWindowShouldClose": _glfwSetWindowShouldClose,
  "glfwSetWindowSize": _glfwSetWindowSize,
  "glfwSetWindowSizeCallback": _glfwSetWindowSizeCallback,
  "glfwSetWindowSizeLimits": _glfwSetWindowSizeLimits,
  "glfwSetWindowTitle": _glfwSetWindowTitle,
  "glfwSetWindowUserPointer": _glfwSetWindowUserPointer,
  "glfwSwapBuffers": _glfwSwapBuffers,
  "glfwTerminate": _glfwTerminate,
  "glfwWindowHint": _glfwWindowHint,
  "glfwWindowShouldClose": _glfwWindowShouldClose,
  "invoke_dddddi": invoke_dddddi,
  "invoke_dddidid": invoke_dddidid,
  "invoke_di": invoke_di,
  "invoke_did": invoke_did,
  "invoke_dii": invoke_dii,
  "invoke_diii": invoke_diii,
  "invoke_diiid": invoke_diiid,
  "invoke_diiii": invoke_diiii,
  "invoke_fiii": invoke_fiii,
  "invoke_i": invoke_i,
  "invoke_idiii": invoke_idiii,
  "invoke_ii": invoke_ii,
  "invoke_iid": invoke_iid,
  "invoke_iidd": invoke_iidd,
  "invoke_iiddi": invoke_iiddi,
  "invoke_iidi": invoke_iidi,
  "invoke_iidii": invoke_iidii,
  "invoke_iiff": invoke_iiff,
  "invoke_iifff": invoke_iifff,
  "invoke_iiffff": invoke_iiffff,
  "invoke_iifffff": invoke_iifffff,
  "invoke_iiffffff": invoke_iiffffff,
  "invoke_iifii": invoke_iifii,
  "invoke_iifiiii": invoke_iifiiii,
  "invoke_iii": invoke_iii,
  "invoke_iiiddii": invoke_iiiddii,
  "invoke_iiif": invoke_iiif,
  "invoke_iiiff": invoke_iiiff,
  "invoke_iiiffi": invoke_iiiffi,
  "invoke_iiiffii": invoke_iiiffii,
  "invoke_iiii": invoke_iiii,
  "invoke_iiiid": invoke_iiiid,
  "invoke_iiiidiidiiiidiiii": invoke_iiiidiidiiiidiiii,
  "invoke_iiiifiii": invoke_iiiifiii,
  "invoke_iiiii": invoke_iiiii,
  "invoke_iiiiiddd": invoke_iiiiiddd,
  "invoke_iiiiiddddi": invoke_iiiiiddddi,
  "invoke_iiiiidi": invoke_iiiiidi,
  "invoke_iiiiii": invoke_iiiiii,
  "invoke_iiiiiid": invoke_iiiiiid,
  "invoke_iiiiiidiid": invoke_iiiiiidiid,
  "invoke_iiiiiii": invoke_iiiiiii,
  "invoke_iiiiiiii": invoke_iiiiiiii,
  "invoke_iiiiiiiii": invoke_iiiiiiiii,
  "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
  "invoke_iiiiiiiiiii": invoke_iiiiiiiiiii,
  "invoke_iiiiiiiiiiii": invoke_iiiiiiiiiiii,
  "invoke_iiiiiiiiiiiii": invoke_iiiiiiiiiiiii,
  "invoke_iiiiiiiiiiiiiii": invoke_iiiiiiiiiiiiiii,
  "invoke_iiiiiiiiiiiiiiii": invoke_iiiiiiiiiiiiiiii,
  "invoke_iiiiiiiiiiiiiiiiii": invoke_iiiiiiiiiiiiiiiiii,
  "invoke_iiiiiiiiiiiiiiiiiii": invoke_iiiiiiiiiiiiiiiiiii,
  "invoke_iiiiijjii": invoke_iiiiijjii,
  "invoke_iiiij": invoke_iiiij,
  "invoke_iij": invoke_iij,
  "invoke_iijiii": invoke_iijiii,
  "invoke_iijiiii": invoke_iijiiii,
  "invoke_iijj": invoke_iijj,
  "invoke_ij": invoke_ij,
  "invoke_ijjiii": invoke_ijjiii,
  "invoke_j": invoke_j,
  "invoke_ji": invoke_ji,
  "invoke_jii": invoke_jii,
  "invoke_jiii": invoke_jiii,
  "invoke_jiiii": invoke_jiiii,
  "invoke_jiij": invoke_jiij,
  "invoke_jjj": invoke_jjj,
  "invoke_v": invoke_v,
  "invoke_vdiii": invoke_vdiii,
  "invoke_vffff": invoke_vffff,
  "invoke_vi": invoke_vi,
  "invoke_vid": invoke_vid,
  "invoke_vidd": invoke_vidd,
  "invoke_vidddd": invoke_vidddd,
  "invoke_vidddddd": invoke_vidddddd,
  "invoke_vidddddddd": invoke_vidddddddd,
  "invoke_vidddddiidd": invoke_vidddddiidd,
  "invoke_vidddi": invoke_vidddi,
  "invoke_viddi": invoke_viddi,
  "invoke_vidi": invoke_vidi,
  "invoke_vidiii": invoke_vidiii,
  "invoke_vidj": invoke_vidj,
  "invoke_vif": invoke_vif,
  "invoke_vii": invoke_vii,
  "invoke_viid": invoke_viid,
  "invoke_viidd": invoke_viidd,
  "invoke_viidddd": invoke_viidddd,
  "invoke_viiddi": invoke_viiddi,
  "invoke_viidi": invoke_viidi,
  "invoke_viidii": invoke_viidii,
  "invoke_viidiii": invoke_viidiii,
  "invoke_viif": invoke_viif,
  "invoke_viifd": invoke_viifd,
  "invoke_viiffi": invoke_viiffi,
  "invoke_viii": invoke_viii,
  "invoke_viiid": invoke_viiid,
  "invoke_viiidd": invoke_viiidd,
  "invoke_viiiddi": invoke_viiiddi,
  "invoke_viiidi": invoke_viiidi,
  "invoke_viiidii": invoke_viiidii,
  "invoke_viiidiidiid": invoke_viiidiidiid,
  "invoke_viiidiiiiii": invoke_viiidiiiiii,
  "invoke_viiif": invoke_viiif,
  "invoke_viiii": invoke_viiii,
  "invoke_viiiidi": invoke_viiiidi,
  "invoke_viiiidii": invoke_viiiidii,
  "invoke_viiiii": invoke_viiiii,
  "invoke_viiiiid": invoke_viiiiid,
  "invoke_viiiiidd": invoke_viiiiidd,
  "invoke_viiiiidi": invoke_viiiiidi,
  "invoke_viiiiidii": invoke_viiiiidii,
  "invoke_viiiiidiid": invoke_viiiiidiid,
  "invoke_viiiiidiii": invoke_viiiiidiii,
  "invoke_viiiiii": invoke_viiiiii,
  "invoke_viiiiiid": invoke_viiiiiid,
  "invoke_viiiiiidd": invoke_viiiiiidd,
  "invoke_viiiiiidi": invoke_viiiiiidi,
  "invoke_viiiiiidid": invoke_viiiiiidid,
  "invoke_viiiiiii": invoke_viiiiiii,
  "invoke_viiiiiiidiid": invoke_viiiiiiidiid,
  "invoke_viiiiiiii": invoke_viiiiiiii,
  "invoke_viiiiiiiii": invoke_viiiiiiiii,
  "invoke_viiiiiiiiii": invoke_viiiiiiiiii,
  "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiii,
  "invoke_viiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiii,
  "invoke_viiiiijj": invoke_viiiiijj,
  "invoke_viiij": invoke_viiij,
  "invoke_viiiji": invoke_viiiji,
  "invoke_viij": invoke_viij,
  "invoke_viijii": invoke_viijii,
  "invoke_vij": invoke_vij,
  "invoke_vjjiii": invoke_vjjiii,
  "llvm_eh_typeid_for": _llvm_eh_typeid_for,
  "siv3dAbortXMLHTTPRequest": _siv3dAbortXMLHTTPRequest,
  "siv3dCallOnAlert": _siv3dCallOnAlert,
  "siv3dCloseNotification": _siv3dCloseNotification,
  "siv3dCreateNotification": _siv3dCreateNotification,
  "siv3dCreateXMLHTTPRequest": _siv3dCreateXMLHTTPRequest,
  "siv3dDecodeAudioFromFileAsync": _siv3dDecodeAudioFromFileAsync,
  "siv3dDeleteXMLHTTPRequest": _siv3dDeleteXMLHTTPRequest,
  "siv3dDownloadFile": _siv3dDownloadFile,
  "siv3dEnumerateAvailableTextToSpeechLanguages": _siv3dEnumerateAvailableTextToSpeechLanguages,
  "siv3dExitFullscreen": _siv3dExitFullscreen,
  "siv3dGetClipboardText": _siv3dGetClipboardText,
  "siv3dGetJoystickInfo": _siv3dGetJoystickInfo,
  "siv3dGetPrimaryTouchPoint": _siv3dGetPrimaryTouchPoint,
  "siv3dGetTextInputCompositionRange": _siv3dGetTextInputCompositionRange,
  "siv3dGetXMLHTTPRequestResponseHeaders": _siv3dGetXMLHTTPRequestResponseHeaders,
  "siv3dInitDialog": _siv3dInitDialog,
  "siv3dInitTextInput": _siv3dInitTextInput,
  "siv3dIsSpeakingTextToSpeechLanguages": _siv3dIsSpeakingTextToSpeechLanguages,
  "siv3dLaunchBrowser": _siv3dLaunchBrowser,
  "siv3dLocateFile": _siv3dLocateFile,
  "siv3dOpenXMLHTTPRequest": _siv3dOpenXMLHTTPRequest,
  "siv3dPauseTextToSpeechLanguages": _siv3dPauseTextToSpeechLanguages,
  "siv3dQueryNotificationPermission": _siv3dQueryNotificationPermission,
  "siv3dRegisterDragDrop": _siv3dRegisterDragDrop,
  "siv3dRegisterDragEnter": _siv3dRegisterDragEnter,
  "siv3dRegisterDragExit": _siv3dRegisterDragExit,
  "siv3dRegisterDragUpdate": _siv3dRegisterDragUpdate,
  "siv3dRegisterNotificationCallback": _siv3dRegisterNotificationCallback,
  "siv3dRegisterTextInputCallback": _siv3dRegisterTextInputCallback,
  "siv3dRegisterTextInputMarkedCallback": _siv3dRegisterTextInputMarkedCallback,
  "siv3dRegisterTextToSpeechLanguagesUpdateHander": _siv3dRegisterTextToSpeechLanguagesUpdateHander,
  "siv3dRegisterTouchCallback": _siv3dRegisterTouchCallback,
  "siv3dRequestAnimationFrame": _siv3dRequestAnimationFrame,
  "siv3dRequestFullscreen": _siv3dRequestFullscreen,
  "siv3dRequestTextInputFocus": _siv3dRequestTextInputFocus,
  "siv3dResumeTextToSpeechLanguages": _siv3dResumeTextToSpeechLanguages,
  "siv3dSendXMLHTTPRequest": _siv3dSendXMLHTTPRequest,
  "siv3dSetClipboardText": _siv3dSetClipboardText,
  "siv3dSetCursorStyle": _siv3dSetCursorStyle,
  "siv3dSetXMLHTTPRequestCallback": _siv3dSetXMLHTTPRequestCallback,
  "siv3dSetXMLHTTPRequestErrorCallback": _siv3dSetXMLHTTPRequestErrorCallback,
  "siv3dSetXMLHTTPRequestProgressCallback": _siv3dSetXMLHTTPRequestProgressCallback,
  "siv3dSetXMLHTTPRequestRequestHeader": _siv3dSetXMLHTTPRequestRequestHeader,
  "siv3dSetXMLHTTPRequestWriteBackFile": _siv3dSetXMLHTTPRequestWriteBackFile,
  "siv3dSleepUntilWaked": _siv3dSleepUntilWaked,
  "siv3dStartTextToSpeechLanguages": _siv3dStartTextToSpeechLanguages,
  "siv3dStartUserActionHook": _siv3dStartUserActionHook,
  "siv3dStopUserActionHook": _siv3dStopUserActionHook,
  "siv3dUnregisterTouchCallback": _siv3dUnregisterTouchCallback,
  "strftime": _strftime,
  "strftime_l": _strftime_l,
  "tt_face_get_ps_name": _tt_face_get_ps_name,
  "uuid_generate": _uuid_generate
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var getTempRet0 = Module["getTempRet0"] = function() {
  return (getTempRet0 = Module["getTempRet0"] = Module["asm"]["getTempRet0"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _memcpy = Module["_memcpy"] = function() {
  return (_memcpy = Module["_memcpy"] = Module["asm"]["memcpy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = function() {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = Module["_htons"] = function() {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = function() {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["__main_argc_argv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _siv3dThrowException = Module["_siv3dThrowException"] = function() {
  return (_siv3dThrowException = Module["_siv3dThrowException"] = Module["asm"]["siv3dThrowException"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = function() {
  return (_fflush = Module["_fflush"] = Module["asm"]["fflush"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _saveSetjmp = Module["_saveSetjmp"] = function() {
  return (_saveSetjmp = Module["_saveSetjmp"] = Module["asm"]["saveSetjmp"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var setTempRet0 = Module["setTempRet0"] = function() {
  return (setTempRet0 = Module["setTempRet0"] = Module["asm"]["setTempRet0"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___funcs_on_exit = Module["___funcs_on_exit"] = function() {
  return (___funcs_on_exit = Module["___funcs_on_exit"] = Module["asm"]["__funcs_on_exit"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___dl_seterr = Module["___dl_seterr"] = function() {
  return (___dl_seterr = Module["___dl_seterr"] = Module["asm"]["__dl_seterr"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function() {
  return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["emscripten_builtin_memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
  return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
  return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___cxa_can_catch = Module["___cxa_can_catch"] = function() {
  return (___cxa_can_catch = Module["___cxa_can_catch"] = Module["asm"]["__cxa_can_catch"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function() {
  return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["__cxa_is_pointer_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_di = Module["dynCall_di"] = function() {
  return (dynCall_di = Module["dynCall_di"] = Module["asm"]["dynCall_di"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vjjiii = Module["dynCall_vjjiii"] = function() {
  return (dynCall_vjjiii = Module["dynCall_vjjiii"] = Module["asm"]["dynCall_vjjiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ijjiii = Module["dynCall_ijjiii"] = function() {
  return (dynCall_ijjiii = Module["dynCall_ijjiii"] = Module["asm"]["dynCall_ijjiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
  return (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = Module["asm"]["dynCall_viiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijiii = Module["dynCall_iijiii"] = function() {
  return (dynCall_iijiii = Module["dynCall_iijiii"] = Module["asm"]["dynCall_iijiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijj = Module["dynCall_iijj"] = function() {
  return (dynCall_iijj = Module["dynCall_iijj"] = Module["asm"]["dynCall_iijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vdiii = Module["dynCall_vdiii"] = function() {
  return (dynCall_vdiii = Module["dynCall_vdiii"] = Module["asm"]["dynCall_vdiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_idiii = Module["dynCall_idiii"] = function() {
  return (dynCall_idiii = Module["dynCall_idiii"] = Module["asm"]["dynCall_idiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiij = Module["dynCall_viiij"] = function() {
  return (dynCall_viiij = Module["dynCall_viiij"] = Module["asm"]["dynCall_viiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiif = Module["dynCall_viiif"] = function() {
  return (dynCall_viiif = Module["dynCall_viiif"] = Module["asm"]["dynCall_viiif"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiid = Module["dynCall_viiid"] = function() {
  return (dynCall_viiid = Module["dynCall_viiid"] = Module["asm"]["dynCall_viiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vij = Module["dynCall_vij"] = function() {
  return (dynCall_vij = Module["dynCall_vij"] = Module["asm"]["dynCall_vij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
  return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["dynCall_jiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viij = Module["dynCall_viij"] = function() {
  return (dynCall_viij = Module["dynCall_viij"] = Module["asm"]["dynCall_viij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
  return (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iij = Module["dynCall_iij"] = function() {
  return (dynCall_iij = Module["dynCall_iij"] = Module["asm"]["dynCall_iij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiddi = Module["dynCall_viiddi"] = function() {
  return (dynCall_viiddi = Module["dynCall_viiddi"] = Module["asm"]["dynCall_viiddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ji = Module["dynCall_ji"] = function() {
  return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["dynCall_ji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iid = Module["dynCall_iid"] = function() {
  return (dynCall_iid = Module["dynCall_iid"] = Module["asm"]["dynCall_iid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_diii = Module["dynCall_diii"] = function() {
  return (dynCall_diii = Module["dynCall_diii"] = Module["asm"]["dynCall_diii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = function() {
  return (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = Module["asm"]["dynCall_viiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vid = Module["dynCall_vid"] = function() {
  return (dynCall_vid = Module["dynCall_vid"] = Module["asm"]["dynCall_vid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiid = Module["dynCall_iiiiiid"] = function() {
  return (dynCall_iiiiiid = Module["dynCall_iiiiiid"] = Module["asm"]["dynCall_iiiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiidii = Module["dynCall_viiidii"] = function() {
  return (dynCall_viiidii = Module["dynCall_viiidii"] = Module["asm"]["dynCall_viiidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = function() {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiji = Module["dynCall_viiiji"] = function() {
  return (dynCall_viiiji = Module["dynCall_viiiji"] = Module["asm"]["dynCall_viiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_i = Module["dynCall_i"] = function() {
  return (dynCall_i = Module["dynCall_i"] = Module["asm"]["dynCall_i"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiidd = Module["dynCall_viiiiiidd"] = function() {
  return (dynCall_viiiiiidd = Module["dynCall_viiiiiidd"] = Module["asm"]["dynCall_viiiiiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiidi = Module["dynCall_viiiiidi"] = function() {
  return (dynCall_viiiiidi = Module["dynCall_viiiiidi"] = Module["asm"]["dynCall_viiiiidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiidiii = Module["dynCall_viiiiidiii"] = function() {
  return (dynCall_viiiiidiii = Module["dynCall_viiiiidiii"] = Module["asm"]["dynCall_viiiiidiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiid = Module["dynCall_viiiiiid"] = function() {
  return (dynCall_viiiiiid = Module["dynCall_viiiiiid"] = Module["asm"]["dynCall_viiiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidi = Module["dynCall_viidi"] = function() {
  return (dynCall_viidi = Module["dynCall_viidi"] = Module["asm"]["dynCall_viidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiddd = Module["dynCall_iiiiiddd"] = function() {
  return (dynCall_iiiiiddd = Module["dynCall_iiiiiddd"] = Module["asm"]["dynCall_iiiiiddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ij = Module["dynCall_ij"] = function() {
  return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["dynCall_ij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiii = Module["dynCall_jiii"] = function() {
  return (dynCall_jiii = Module["dynCall_jiii"] = Module["asm"]["dynCall_jiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiidiidiiiidiiii = Module["dynCall_iiiidiidiiiidiiii"] = function() {
  return (dynCall_iiiidiidiiiidiiii = Module["dynCall_iiiidiidiiiidiiii"] = Module["asm"]["dynCall_iiiidiidiiiidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidi = Module["dynCall_iidi"] = function() {
  return (dynCall_iidi = Module["dynCall_iidi"] = Module["asm"]["dynCall_iidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiidii = Module["dynCall_viiiiidii"] = function() {
  return (dynCall_viiiiidii = Module["dynCall_viiiiidii"] = Module["asm"]["dynCall_viiiiidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jjj = Module["dynCall_jjj"] = function() {
  return (dynCall_jjj = Module["dynCall_jjj"] = Module["asm"]["dynCall_jjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijjii = Module["dynCall_iiiiijjii"] = function() {
  return (dynCall_iiiiijjii = Module["dynCall_iiiiijjii"] = Module["asm"]["dynCall_iiiiijjii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viid = Module["dynCall_viid"] = function() {
  return (dynCall_viid = Module["dynCall_viid"] = Module["asm"]["dynCall_viid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiij = Module["dynCall_jiij"] = function() {
  return (dynCall_jiij = Module["dynCall_jiij"] = Module["asm"]["dynCall_jiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
  return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["dynCall_iiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiidii = Module["dynCall_viiiidii"] = function() {
  return (dynCall_viiiidii = Module["dynCall_viiiidii"] = Module["asm"]["dynCall_viiiidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_did = Module["dynCall_did"] = function() {
  return (dynCall_did = Module["dynCall_did"] = Module["asm"]["dynCall_did"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiidi = Module["dynCall_viiiidi"] = function() {
  return (dynCall_viiiidi = Module["dynCall_viiiidi"] = Module["asm"]["dynCall_viiiidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_j = Module["dynCall_j"] = function() {
  return (dynCall_j = Module["dynCall_j"] = Module["asm"]["dynCall_j"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vif = Module["dynCall_vif"] = function() {
  return (dynCall_vif = Module["dynCall_vif"] = Module["asm"]["dynCall_vif"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiijj = Module["dynCall_viiiiijj"] = function() {
  return (dynCall_viiiiijj = Module["dynCall_viiiiijj"] = Module["asm"]["dynCall_viiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiid = Module["dynCall_iiiid"] = function() {
  return (dynCall_iiiid = Module["dynCall_iiiid"] = Module["asm"]["dynCall_iiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiddii = Module["dynCall_iiiddii"] = function() {
  return (dynCall_iiiddii = Module["dynCall_iiiddii"] = Module["asm"]["dynCall_iiiddii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidii = Module["dynCall_viidii"] = function() {
  return (dynCall_viidii = Module["dynCall_viidii"] = Module["asm"]["dynCall_viidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidd = Module["dynCall_viidd"] = function() {
  return (dynCall_viidd = Module["dynCall_viidd"] = Module["asm"]["dynCall_viidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiidiiiiii = Module["dynCall_viiidiiiiii"] = function() {
  return (dynCall_viiidiiiiii = Module["dynCall_viiidiiiiii"] = Module["asm"]["dynCall_viiidiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidiii = Module["dynCall_viidiii"] = function() {
  return (dynCall_viidiii = Module["dynCall_viidiii"] = Module["asm"]["dynCall_viidiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidiii = Module["dynCall_vidiii"] = function() {
  return (dynCall_vidiii = Module["dynCall_vidiii"] = Module["asm"]["dynCall_vidiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidddi = Module["dynCall_vidddi"] = function() {
  return (dynCall_vidddi = Module["dynCall_vidddi"] = Module["asm"]["dynCall_vidddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iijiiii = Module["dynCall_iijiiii"] = function() {
  return (dynCall_iijiiii = Module["dynCall_iijiiii"] = Module["asm"]["dynCall_iijiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_dddidid = Module["dynCall_dddidid"] = function() {
  return (dynCall_dddidid = Module["dynCall_dddidid"] = Module["asm"]["dynCall_dddidid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiddi = Module["dynCall_iiddi"] = function() {
  return (dynCall_iiddi = Module["dynCall_iiddi"] = Module["asm"]["dynCall_iiddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = function() {
  return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["dynCall_jii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jij = Module["dynCall_jij"] = function() {
  return (dynCall_jij = Module["dynCall_jij"] = Module["asm"]["dynCall_jij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiijj = Module["dynCall_jiijj"] = function() {
  return (dynCall_jiijj = Module["dynCall_jiijj"] = Module["asm"]["dynCall_jiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiji = Module["dynCall_iiji"] = function() {
  return (dynCall_iiji = Module["dynCall_iiji"] = Module["asm"]["dynCall_iiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidii = Module["dynCall_iidii"] = function() {
  return (dynCall_iidii = Module["dynCall_iidii"] = Module["asm"]["dynCall_iidii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_fii = Module["dynCall_fii"] = function() {
  return (dynCall_fii = Module["dynCall_fii"] = Module["asm"]["dynCall_fii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiffii = Module["dynCall_iiiffii"] = function() {
  return (dynCall_iiiffii = Module["dynCall_iiiffii"] = Module["asm"]["dynCall_iiiffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiff = Module["dynCall_iiiff"] = function() {
  return (dynCall_iiiff = Module["dynCall_iiiff"] = Module["asm"]["dynCall_iiiff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iifff = Module["dynCall_iifff"] = function() {
  return (dynCall_iifff = Module["dynCall_iifff"] = Module["asm"]["dynCall_iifff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiffff = Module["dynCall_iiffff"] = function() {
  return (dynCall_iiffff = Module["dynCall_iiffff"] = Module["asm"]["dynCall_iiffff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiifd = Module["dynCall_viiiiifd"] = function() {
  return (dynCall_viiiiifd = Module["dynCall_viiiiifd"] = Module["asm"]["dynCall_viiiiifd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiifdii = Module["dynCall_viiifdii"] = function() {
  return (dynCall_viiifdii = Module["dynCall_viiifdii"] = Module["asm"]["dynCall_viiifdii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viif = Module["dynCall_viif"] = function() {
  return (dynCall_viif = Module["dynCall_viif"] = Module["asm"]["dynCall_viif"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifdd = Module["dynCall_viifdd"] = function() {
  return (dynCall_viifdd = Module["dynCall_viifdd"] = Module["asm"]["dynCall_viifdd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiffdd = Module["dynCall_viiffdd"] = function() {
  return (dynCall_viiffdd = Module["dynCall_viiffdd"] = Module["asm"]["dynCall_viiffdd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiifiii = Module["dynCall_iiiifiii"] = function() {
  return (dynCall_iiiifiii = Module["dynCall_iiiifiii"] = Module["asm"]["dynCall_iiiifiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiffi = Module["dynCall_iiiffi"] = function() {
  return (dynCall_iiiffi = Module["dynCall_iiiffi"] = Module["asm"]["dynCall_iiiffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
  return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["dynCall_iiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiij = Module["dynCall_iiij"] = function() {
  return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["dynCall_iiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiddd = Module["dynCall_viiiddd"] = function() {
  return (dynCall_viiiddd = Module["dynCall_viiiddd"] = Module["asm"]["dynCall_viiiddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_dii = Module["dynCall_dii"] = function() {
  return (dynCall_dii = Module["dynCall_dii"] = Module["asm"]["dynCall_dii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidi = Module["dynCall_vidi"] = function() {
  return (dynCall_vidi = Module["dynCall_vidi"] = Module["asm"]["dynCall_vidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiidddd = Module["dynCall_viiiidddd"] = function() {
  return (dynCall_viiiidddd = Module["dynCall_viiiidddd"] = Module["asm"]["dynCall_viiiidddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiifi = Module["dynCall_viiiifi"] = function() {
  return (dynCall_viiiifi = Module["dynCall_viiiifi"] = Module["asm"]["dynCall_viiiifi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifii = Module["dynCall_viifii"] = function() {
  return (dynCall_viifii = Module["dynCall_viifii"] = Module["asm"]["dynCall_viifii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiffii = Module["dynCall_viiffii"] = function() {
  return (dynCall_viiffii = Module["dynCall_viiffii"] = Module["asm"]["dynCall_viiffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifffii = Module["dynCall_viifffii"] = function() {
  return (dynCall_viifffii = Module["dynCall_viifffii"] = Module["asm"]["dynCall_viifffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiffffii = Module["dynCall_viiiffffii"] = function() {
  return (dynCall_viiiffffii = Module["dynCall_viiiffffii"] = Module["asm"]["dynCall_viiiffffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifffi = Module["dynCall_viifffi"] = function() {
  return (dynCall_viifffi = Module["dynCall_viifffi"] = Module["asm"]["dynCall_viifffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiifiii = Module["dynCall_viiiiifiii"] = function() {
  return (dynCall_viiiiifiii = Module["dynCall_viiiiifiii"] = Module["asm"]["dynCall_viiiiifiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiifii = Module["dynCall_viiiiifii"] = function() {
  return (dynCall_viiiiifii = Module["dynCall_viiiiifii"] = Module["asm"]["dynCall_viiiiifii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiffii = Module["dynCall_viiiffii"] = function() {
  return (dynCall_viiiffii = Module["dynCall_viiiffii"] = Module["asm"]["dynCall_viiiffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiifi = Module["dynCall_viiifi"] = function() {
  return (dynCall_viiifi = Module["dynCall_viiifi"] = Module["asm"]["dynCall_viiifi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiifffii = Module["dynCall_viiifffii"] = function() {
  return (dynCall_viiifffii = Module["dynCall_viiifffii"] = Module["asm"]["dynCall_viiifffii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifi = Module["dynCall_viifi"] = function() {
  return (dynCall_viifi = Module["dynCall_viifi"] = Module["asm"]["dynCall_viifi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_fi = Module["dynCall_fi"] = function() {
  return (dynCall_fi = Module["dynCall_fi"] = Module["asm"]["dynCall_fi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vffff = Module["dynCall_vffff"] = function() {
  return (dynCall_vffff = Module["dynCall_vffff"] = Module["asm"]["dynCall_vffff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_dddddi = Module["dynCall_dddddi"] = function() {
  return (dynCall_dddddi = Module["dynCall_dddddi"] = Module["asm"]["dynCall_dddddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidddd = Module["dynCall_viidddd"] = function() {
  return (dynCall_viidddd = Module["dynCall_viidddd"] = Module["asm"]["dynCall_viidddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiidiid = Module["dynCall_viiiiiiidiid"] = function() {
  return (dynCall_viiiiiiidiid = Module["dynCall_viiiiiiidiid"] = Module["asm"]["dynCall_viiiiiiidiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiidd = Module["dynCall_iiiiiidd"] = function() {
  return (dynCall_iiiiiidd = Module["dynCall_iiiiiidd"] = Module["asm"]["dynCall_iiiiiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiidiid = Module["dynCall_iiiiiidiid"] = function() {
  return (dynCall_iiiiiidiid = Module["dynCall_iiiiiidiid"] = Module["asm"]["dynCall_iiiiiidiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiidid = Module["dynCall_viiiiiidid"] = function() {
  return (dynCall_viiiiiidid = Module["dynCall_viiiiiidid"] = Module["asm"]["dynCall_viiiiiidid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiid = Module["dynCall_viiiiid"] = function() {
  return (dynCall_viiiiid = Module["dynCall_viiiiid"] = Module["asm"]["dynCall_viiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_diiid = Module["dynCall_diiid"] = function() {
  return (dynCall_diiid = Module["dynCall_diiid"] = Module["asm"]["dynCall_diiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiidd = Module["dynCall_viiiiiiidd"] = function() {
  return (dynCall_viiiiiiidd = Module["dynCall_viiiiiiidd"] = Module["asm"]["dynCall_viiiiiiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidddddd = Module["dynCall_vidddddd"] = function() {
  return (dynCall_vidddddd = Module["dynCall_vidddddd"] = Module["asm"]["dynCall_vidddddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidddddddd = Module["dynCall_vidddddddd"] = function() {
  return (dynCall_vidddddddd = Module["dynCall_vidddddddd"] = Module["asm"]["dynCall_vidddddddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidj = Module["dynCall_vidj"] = function() {
  return (dynCall_vidj = Module["dynCall_vidj"] = Module["asm"]["dynCall_vidj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidd = Module["dynCall_iidd"] = function() {
  return (dynCall_iidd = Module["dynCall_iidd"] = Module["asm"]["dynCall_iidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiidi = Module["dynCall_viiidi"] = function() {
  return (dynCall_viiidi = Module["dynCall_viiidi"] = Module["asm"]["dynCall_viiidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiidiid = Module["dynCall_viiiiiidiid"] = function() {
  return (dynCall_viiiiiidiid = Module["dynCall_viiiiiidiid"] = Module["asm"]["dynCall_viiiiiidiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiidiid = Module["dynCall_viiiiidiid"] = function() {
  return (dynCall_viiiiidiid = Module["dynCall_viiiiidiid"] = Module["asm"]["dynCall_viiiiidiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiidd = Module["dynCall_viiiiidd"] = function() {
  return (dynCall_viiiiidd = Module["dynCall_viiiiidd"] = Module["asm"]["dynCall_viiiiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = function() {
  return (dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_diiii = Module["dynCall_diiii"] = function() {
  return (dynCall_diiii = Module["dynCall_diiii"] = Module["asm"]["dynCall_diiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiddi = Module["dynCall_viiiddi"] = function() {
  return (dynCall_viiiddi = Module["dynCall_viiiddi"] = Module["asm"]["dynCall_viiiddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidd = Module["dynCall_vidd"] = function() {
  return (dynCall_vidd = Module["dynCall_vidd"] = Module["asm"]["dynCall_vidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiidi = Module["dynCall_iiiiidi"] = function() {
  return (dynCall_iiiiidi = Module["dynCall_iiiiidi"] = Module["asm"]["dynCall_iiiiidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiidi = Module["dynCall_viiiiiidi"] = function() {
  return (dynCall_viiiiiidi = Module["dynCall_viiiiiidi"] = Module["asm"]["dynCall_viiiiiidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viddi = Module["dynCall_viddi"] = function() {
  return (dynCall_viddi = Module["dynCall_viddi"] = Module["asm"]["dynCall_viddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidddd = Module["dynCall_vidddd"] = function() {
  return (dynCall_vidddd = Module["dynCall_vidddd"] = Module["asm"]["dynCall_vidddd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiidiidiid = Module["dynCall_viiidiidiid"] = function() {
  return (dynCall_viiidiidiid = Module["dynCall_viiidiidiid"] = Module["asm"]["dynCall_viiidiidiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiidd = Module["dynCall_viiidd"] = function() {
  return (dynCall_viiidd = Module["dynCall_viiidd"] = Module["asm"]["dynCall_viiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vidddddiidd = Module["dynCall_vidddddiidd"] = function() {
  return (dynCall_vidddddiidd = Module["dynCall_vidddddiidd"] = Module["asm"]["dynCall_vidddddiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iifii = Module["dynCall_iifii"] = function() {
  return (dynCall_iifii = Module["dynCall_iifii"] = Module["asm"]["dynCall_iifii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iifiiii = Module["dynCall_iifiiii"] = function() {
  return (dynCall_iifiiii = Module["dynCall_iifiiii"] = Module["asm"]["dynCall_iifiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiif = Module["dynCall_iiif"] = function() {
  return (dynCall_iiif = Module["dynCall_iiif"] = Module["asm"]["dynCall_iiif"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiff = Module["dynCall_iiff"] = function() {
  return (dynCall_iiff = Module["dynCall_iiff"] = Module["asm"]["dynCall_iiff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iifffff = Module["dynCall_iifffff"] = function() {
  return (dynCall_iifffff = Module["dynCall_iifffff"] = Module["asm"]["dynCall_iifffff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiffffff = Module["dynCall_iiffffff"] = function() {
  return (dynCall_iiffffff = Module["dynCall_iiffffff"] = Module["asm"]["dynCall_iiffffff"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiddddi = Module["dynCall_iiiiiddddi"] = function() {
  return (dynCall_iiiiiddddi = Module["dynCall_iiiiiddddi"] = Module["asm"]["dynCall_iiiiiddddi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vifii = Module["dynCall_vifii"] = function() {
  return (dynCall_vifii = Module["dynCall_vifii"] = Module["asm"]["dynCall_vifii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifd = Module["dynCall_viifd"] = function() {
  return (dynCall_viifd = Module["dynCall_viifd"] = Module["asm"]["dynCall_viifd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiffi = Module["dynCall_iiffi"] = function() {
  return (dynCall_iiffi = Module["dynCall_iiffi"] = Module["asm"]["dynCall_iiffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiffi = Module["dynCall_viiffi"] = function() {
  return (dynCall_viiffi = Module["dynCall_viiffi"] = Module["asm"]["dynCall_viiffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiffi = Module["dynCall_viiiffi"] = function() {
  return (dynCall_viiiffi = Module["dynCall_viiiffi"] = Module["asm"]["dynCall_viiiffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiffffi = Module["dynCall_viiiffffi"] = function() {
  return (dynCall_viiiffffi = Module["dynCall_viiiffffi"] = Module["asm"]["dynCall_viiiffffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiffffffi = Module["dynCall_viiiffffffi"] = function() {
  return (dynCall_viiiffffffi = Module["dynCall_viiiffffffi"] = Module["asm"]["dynCall_viiiffffffi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiidd = Module["dynCall_viiiiiiiiidd"] = function() {
  return (dynCall_viiiiiiiiidd = Module["dynCall_viiiiiiiiidd"] = Module["asm"]["dynCall_viiiiiiiiidd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiji = Module["dynCall_iiiji"] = function() {
  return (dynCall_iiiji = Module["dynCall_iiiji"] = Module["asm"]["dynCall_iiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_diiiiiiii = Module["dynCall_diiiiiiii"] = function() {
  return (dynCall_diiiiiiii = Module["dynCall_diiiiiiii"] = Module["asm"]["dynCall_diiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_fiii = Module["dynCall_fiii"] = function() {
  return (dynCall_fiii = Module["dynCall_fiii"] = Module["asm"]["dynCall_fiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
  return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
  return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiid = Module["dynCall_iiiiid"] = function() {
  return (dynCall_iiiiid = Module["dynCall_iiiiid"] = Module["asm"]["dynCall_iiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
  return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
  return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_start_unwind = Module["_asyncify_start_unwind"] = function() {
  return (_asyncify_start_unwind = Module["_asyncify_start_unwind"] = Module["asm"]["asyncify_start_unwind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = function() {
  return (_asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = Module["asm"]["asyncify_stop_unwind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_start_rewind = Module["_asyncify_start_rewind"] = function() {
  return (_asyncify_start_rewind = Module["_asyncify_start_rewind"] = Module["asm"]["asyncify_start_rewind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = function() {
  return (_asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = Module["asm"]["asyncify_stop_rewind"]).apply(null, arguments);
};


function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_viii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    dynCall_vii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_iii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_ii(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_di(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_di(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    dynCall_vi(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    dynCall_v(index);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiiii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vdiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_vdiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_idiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_idiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiiii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiddi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiddi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iid(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_iid(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_diii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vid(index,a1,a2) {
  var sp = stackSave();
  try {
    dynCall_vid(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiid(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiid(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return dynCall_i(index);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiidd(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiiidd(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiidi(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiidi(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiidiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiidiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiid(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiiid(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiid(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viiid(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidi(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viidi(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiddd(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiddd(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiidiidiiiidiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16) {
  var sp = stackSave();
  try {
    return dynCall_iiiidiidiiiidiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iidi(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iidi(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiidii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiidii(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viid(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_viid(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiidii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiidii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_did(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_did(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiidi(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiidi(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vif(index,a1,a2) {
  var sp = stackSave();
  try {
    dynCall_vif(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiif(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viiif(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiid(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiid(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiddii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiddii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viidii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidd(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viidd(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiidiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    dynCall_viiidiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viidiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_vidiii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidddi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_vidddi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiidii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiidii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_dddidid(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_dddidid(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiddi(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiddi(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiifiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiifiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiffi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiffi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiffii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiffii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiff(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiiff(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iifff(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iifff(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiffff(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_iiffff(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vffff(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_vffff(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viif(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_viif(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_dddddi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_dddddi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiidd(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiidd(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viidddd(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viidddd(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diiid(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_diiid(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidddddd(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_vidddddd(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_vidddddddd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iidd(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iidd(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiidi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiidid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiiidid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iidii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iidii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidd(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_vidd(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidddd(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_vidddd(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_diiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiidd(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiidd(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_dii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_dii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiddi(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiddi(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiidi(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiidi(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidi(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_vidi(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15) {
  var sp = stackSave();
  try {
    dynCall_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viddi(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viddi(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiidi(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    dynCall_viiiiiidi(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiid(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiiid(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiidiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    dynCall_viiidiidiid(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidddddiidd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    dynCall_vidddddiidd(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iifii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iifii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iifiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iifiiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiif(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iiif(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiff(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iiff(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iifffff(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iifffff(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiffffff(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iiffffff(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiddddi(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viifd(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viifd(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiffi(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiffi(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_fiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_fiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iijiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iijiii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vjjiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_vjjiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ijjiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_ijjiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iijj(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_iijj(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vij(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_vij(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iij(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iij(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ji(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viij(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viij(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiji(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiji(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ij(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_ij(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_jiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jjj(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jjj(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    return dynCall_iiiiijjii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viiiiijj(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiij(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiij(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_j(index) {
  var sp = stackSave();
  try {
    return dynCall_j(index);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiij(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiij(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iijiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iijiiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_jii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiij(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_iiiij(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vidj(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_vidj(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viijii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viijii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}




// === Auto-generated postamble setup entry stuff ===

Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;


var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];

  args = args || [];
  args.unshift(thisProgram);

  var argc = args.length;
  var argv = stackAlloc((argc + 1) * 4);
  var argv_ptr = argv >> 2;
  args.forEach((arg) => {
    HEAP32[argv_ptr++] = allocateUTF8OnStack(arg);
  });
  HEAP32[argv_ptr] = 0;

  try {

    var ret = entryFunction(argc, argv);

    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as
    // execution is asynchronously handed off to a pthread.
    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  }
  catch (e) {
    return handleException(e);
  }
}

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;

run();





(function () {
    const dependencyName = "WebGPU";

    addRunDependency(dependencyName);

    (async function() {
        try {
            const adapter = await navigator.gpu.requestAdapter();
            const device = await adapter.requestDevice();
    
            Module["preinitializedWebGPUDevice"] = device;
        } catch(_) {
            // ignore
        } finally {
            removeRunDependency(dependencyName);
        }
    })();

    if (Module["_emscripten_clear_interval"]) {
        Module["_emscripten_clear_interval"].sig = "vi";
    }

    siv3dRegisterUserAction(() => {
        const ctx = Module["getCurrentAudioContext"]();
        if (ctx.state === "suspended") {
            ctx.resume();
        }
    });
})();

__ATEXIT__.push(function() {
    if (Module["onRuntimeExit"]) {
        Module["onRuntimeExit"](EXITSTATUS || 0);
    }
});

Module["getCurrentAudioContext"] = function() {
    return Module["SDL2"].audioContext;
};
  
Module["getCurrentAudioSource"] = function() {
    return Module["SDL2"].audio.scriptProcessorNode;
};
  
// TODO: fix emscripten side
Module["setFramebufferSize"] = function(width, height) {
    if (!GLFW.active) return;
    let resizeNeeded = true;
  
    if (GLFW.active.width != width || GLFW.active.height != height) {
      GLFW.active.width = width;
      GLFW.active.height = height;
    } else {
      resizeNeeded = false;
    }
  
    if (resizeNeeded) {
      const canvas = Module['canvas'];
      canvas.width = GLFW.active.width;
      canvas.height = GLFW.active.height;
  
      GLFW.onWindowSizeChanged();
      GLFW.onFramebufferSizeChanged();
    }
};
  
/**
 * @license
 * Copyright 2013 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 *
 * This file gets implicatly injected as a `--post-js` file when
 * emcc is run with `--emrun`
 */

if (typeof window == "object" && (typeof ENVIRONMENT_IS_PTHREAD == 'undefined' || !ENVIRONMENT_IS_PTHREAD)) {
  var emrun_register_handlers = () => {
    // When C code exit()s, we may still have remaining stdout and stderr
    // messages in flight. In that case, we can't close the browser until all
    // those XHRs have finished, so the following state variables track that all
    // communication is done, after which we can close.
    var emrun_num_post_messages_in_flight = 0;
    var emrun_should_close_itself = false;
    var postExit = (msg) => {
      var http = new XMLHttpRequest();
      // Don't do this immediately, this may race with the notification about
      // the return code reaching the server. Send a *sync* xhr so that we know
      // for sure that the server has gotten the return code before we continue.
      http.open("POST", "stdio.html", false);
      http.send(msg);
      try {
        // Try closing the current browser window, since it exit()ed itself.
        // This can shut down the browser process and then emrun does not need
        // to kill the whole browser process.
        window.close();
      } catch(e) {}
    };
    var post = (msg) => {
      var http = new XMLHttpRequest();
      ++emrun_num_post_messages_in_flight;
      http.onreadystatechange = () => {
        if (http.readyState == 4 /*DONE*/) {
          if (--emrun_num_post_messages_in_flight == 0 && emrun_should_close_itself) {
            postExit('^exit^'+EXITSTATUS);
          }
        }
      }
      http.open("POST", "stdio.html", true);
      http.send(msg);
    };
    // If the address contains localhost, or we are running the page from port
    // 6931, we can assume we're running the test runner and should post stdout
    // logs.
    if (document.URL.search("localhost") != -1 || document.URL.search(":6931/") != -1) {
      var emrun_http_sequence_number = 1;
      var prevPrint = out;
      var prevErr = err;
      addOnExit(() => {
        if (emrun_num_post_messages_in_flight == 0) {
          postExit('^exit^'+EXITSTATUS);
        } else {
          emrun_should_close_itself = true;
        }
      });
      out = (text) => {
        post('^out^'+(emrun_http_sequence_number++)+'^'+encodeURIComponent(text));
        prevPrint(text);
      };
      err = (text) => {
        post('^err^'+(emrun_http_sequence_number++)+'^'+encodeURIComponent(text));
        prevErr(text);
      };

      // Notify emrun web server that this browser has successfully launched the
      // page. Note that we may need to wait for the server to be ready.
      var tryToSendPageload = () => {
        try {
          post('^pageload^');
        } catch (e) {
          setTimeout(tryToSendPageload, 50);
        }
      };
      tryToSendPageload();
    }
  };

  // POSTs the given binary data represented as a (typed) array data back to the
  // emrun-based web server.
  // To use from C code, call e.g:
  //   EM_ASM({emrun_file_dump("file.dat", HEAPU8.subarray($0, $0 + $1));}, my_data_pointer, my_data_pointer_byte_length);
  var emrun_file_dump = (filename, data) => {
    var http = new XMLHttpRequest();
    out('Dumping out file "' + filename + '" with ' + data.length + ' bytes of data.');
    http.open("POST", "stdio.html?file=" + filename, true);
    http.send(data); // XXX  this does not work in workers, for some odd reason (issue #2681)
  };

  if (typeof Module != 'undefined' && typeof document != 'undefined') {
    emrun_register_handlers();
  }
}


  return Runtime.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Runtime;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Runtime; });
else if (typeof exports === 'object')
  exports["Runtime"] = Runtime;
