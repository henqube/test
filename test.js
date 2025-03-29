(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1A2IAAhrIBrAAIAABrg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-5.4,-5.3,10.8,10.7), null);


(lib.enemy_bullet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheBfIAAi9IC9AAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enemy_bullet, new cjs.Rectangle(-9.5,-9.5,19,19), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2,0,3).p("AmFmFIMLAAIAAMLIsLAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmFGGIAAsLIMLAAIAAMLg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-41.5,-41.5,83.1,83.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.gun_point = new lib.Symbol6();
	this.gun_point.name = "gun_point";
	this.gun_point.setTransform(-48.35,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ak6IrIAAxVIJ1AAIAARVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.gun_point}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-53.7,-55.5,85.2,111), null);


(lib.enemy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {appear:0,idle:1,attack:2,death:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.appear = new lib.Symbol4();
	this.appear.name = "appear";
	var appearFilter_1 = new cjs.ColorFilter(0,0,0,1,0,255,0,0);
	this.appear.filters = [appearFilter_1];
	this.appear.cache(-56,-57,89,115);

	this.idle = new lib.Symbol4();
	this.idle.name = "idle";

	this.attack = new lib.Symbol4();
	this.attack.name = "attack";
	this.attack.setTransform(0,0,1.7302,0.7117);

	this.death = new lib.Symbol4();
	this.death.name = "death";
	this.death.setTransform(0,0,0.3652,0.243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.appear}]}).to({state:[{t:this.idle}]},1).to({state:[{t:this.attack}]},1).to({state:[{t:this.death}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(appearFilter_1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-55.5,147.5,111);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"idle":0,run:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.idle = new lib.Symbol2();
	this.idle.name = "idle";

	this.run = new lib.Symbol2();
	this.run.name = "run";
	var runFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.run.filters = [runFilter_1];
	this.run.cache(-43,-43,87,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.idle}]}).to({state:[{t:this.run}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(runFilter_1).wait(1).to(new cjs.ColorFilter(0,0,0,1,255,0,0,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.run, startFrame:1, endFrame:1, x:-43, y:-43, w:87, h:87});
	this.filterCacheList.push({instance: this.run, startFrame:0, endFrame:0, x:-43, y:-43, w:87, h:87});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-42.3,84.69999999999999,84.69999999999999);


// stage content:
(lib.test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		const stage = this.stage;
		const enemyContainer = new createjs.Container();
		const bulletPool = []; // 총알 재사용을 위한 풀
		stage.addChild(enemyContainer);
		
		function createEnemy() {
		    let enemy = new lib.enemy(); // enemy 생성 (linkage 사용)
		    enemy.x = Math.random() * stage.canvas.width; // 랜덤 위치
		    enemy.y = 100; // 기본 위치
		    enemy.gotoAndStop("appear");
		
		    enemyContainer.addChild(enemy);
		
		    // appear 애니메이션 종료 후 idle 상태로 변경
		    setTimeout(() => {
		        enemy.gotoAndStop("idle");
		        startShootingLoop(enemy);
		    }, 1000); // 1초 후 idle 상태로 변경
		
		    return enemy;
		}
		
		function startShootingLoop(enemy) {
		    function shoot() {
		        if (!stage.contains(enemy)) return; // 적이 사라지면 중단
		        
		        enemy.gotoAndStop("attack"); // 공격 애니메이션 실행
		        
		        setTimeout(() => {
		            let bullet = getBullet();
		            let gunPoint = enemy.gun_point.localToGlobal(0, 0); // gun_point 위치 가져오기
		
		            bullet.x = gunPoint.x;
		            bullet.y = gunPoint.y;
		            bullet.visible = true;
		
		            let dx = player.x - bullet.x;
		            let dy = player.y - bullet.y;
		            let angle = Math.atan2(dy, dx);
		            let speed = 10;
		
		            function moveBullet() {
		                bullet.x += Math.cos(angle) * speed;
		                bullet.y += Math.sin(angle) * speed;
		                
		                if (
		                    bullet.x < -50 || bullet.x > stage.canvas.width + 50 ||
		                    bullet.y < -50 || bullet.y > stage.canvas.height + 50
		                ) {
		                    bullet.visible = false;
		                    bulletPool.push(bullet); // 화면 밖에서 재사용
		                    createjs.Ticker.removeEventListener("tick", moveBullet);
		                }
		            }
		
		            createjs.Ticker.addEventListener("tick", moveBullet);
		
		            // 0.5초 후 idle 상태로 복귀
		            setTimeout(() => {
		                enemy.gotoAndStop("idle");
		            }, 500);
		        }, 500); // 0.5초 후 총알 발사
		
		        setTimeout(shoot, 3000); // 3초 후 다시 발사
		    }
		
		    shoot();
		}
		
		// 총알 가져오기 (재사용)
		function getBullet() {
		    let bullet;
		    if (bulletPool.length > 0) {
		        bullet = bulletPool.pop(); // 기존 총알 재사용
		    } else {
		        bullet = new lib.enemy_bullet(); // 새로운 총알 생성
		        stage.addChild(bullet);
		    }
		    bullet.visible = true;
		    return bullet;
		}
		
		// 2초마다 enemy 생성
		setInterval(createEnemy, 2000);
		this.player.stop(); // 초기 상태 멈춤
		this.player.gotoAndStop("idle"); // idle 애니메이션 시작
		
		this.stage.on("stagemousedown", (evt) => {
		    let player = this.player;
		    
		    // 목표 위치 설정
		    let targetX = evt.stageX;
		    let targetY = evt.stageY;
		    
		    // 이동 방향 설정
		    if (targetX > player.x) {
		        player.scaleX = 1; // 오른쪽 보기
		    } else {
		        player.scaleX = -1; // 왼쪽 보기
		    }
		
		    // "run" 애니메이션 시작
		    player.gotoAndStop("run");
		
		    // 트윈을 이용한 부드러운 이동
		    createjs.Tween.get(player)
		        .to({ x: targetX, y: targetY }, 500, createjs.Ease.quadOut) // 0.5초 동안 이동
		        .call(() => {
		            player.gotoAndStop("idle"); // 이동 완료 후 "idle" 애니메이션
		        });
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.player = new lib.Symbol1();
	this.player.name = "player";
	this.player.setTransform(461.15,253.05);

	this.timeline.addTween(cjs.Tween.get(this.player).wait(1));
	this.player.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1058.9,570.8,-555.4000000000001,-275.4);
// library properties:
lib.properties = {
	id: '308F22033337D44796CAB430F6FF0169',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#986373",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['308F22033337D44796CAB430F6FF0169'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;