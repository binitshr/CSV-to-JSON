// Generated from expeditions.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0019\u0129\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0005\u0014",
    "\u0106\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0005\u0015\u010b",
    "\n\u0015\u0003\u0015\u0006\u0015\u010e\n\u0015\r\u0015\u000e\u0015\u010f",
    "\u0003\u0016\u0006\u0016\u0113\n\u0016\r\u0016\u000e\u0016\u0114\u0003",
    "\u0017\u0006\u0017\u0118\n\u0017\r\u0017\u000e\u0017\u0119\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0007\u0018\u0123\n\u0018\f\u0018\u000e\u0018\u0126\u000b\u0018\u0003",
    "\u0018\u0003\u0018\u0002\u0002\u0019\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u0019\u0003\u0002\u0005\u0003\u00022",
    ";\u0006\u0002\f\f\u000f\u000f$$..\u0003\u0002$$\u0002\u012f\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00031\u0003\u0002\u0002\u0002\u0005?\u0003\u0002\u0002\u0002\u0007",
    "G\u0003\u0002\u0002\u0002\tQ\u0003\u0002\u0002\u0002\u000bV\u0003\u0002",
    "\u0002\u0002\r]\u0003\u0002\u0002\u0002\u000fk\u0003\u0002\u0002\u0002",
    "\u0011z\u0003\u0002\u0002\u0002\u0013\u008b\u0003\u0002\u0002\u0002",
    "\u0015\u009e\u0003\u0002\u0002\u0002\u0017\u00af\u0003\u0002\u0002\u0002",
    "\u0019\u00b7\u0003\u0002\u0002\u0002\u001b\u00c5\u0003\u0002\u0002\u0002",
    "\u001d\u00d1\u0003\u0002\u0002\u0002\u001f\u00e4\u0003\u0002\u0002\u0002",
    "!\u00f0\u0003\u0002\u0002\u0002#\u0100\u0003\u0002\u0002\u0002%\u0102",
    "\u0003\u0002\u0002\u0002\'\u0105\u0003\u0002\u0002\u0002)\u010a\u0003",
    "\u0002\u0002\u0002+\u0112\u0003\u0002\u0002\u0002-\u0117\u0003\u0002",
    "\u0002\u0002/\u011e\u0003\u0002\u0002\u000212\u0007g\u0002\u000223\u0007",
    "z\u0002\u000234\u0007r\u0002\u000245\u0007g\u0002\u000256\u0007f\u0002",
    "\u000267\u0007k\u0002\u000278\u0007v\u0002\u000289\u0007k\u0002\u0002",
    "9:\u0007q\u0002\u0002:;\u0007p\u0002\u0002;<\u0007a\u0002\u0002<=\u0007",
    "k\u0002\u0002=>\u0007f\u0002\u0002>\u0004\u0003\u0002\u0002\u0002?@",
    "\u0007r\u0002\u0002@A\u0007g\u0002\u0002AB\u0007c\u0002\u0002BC\u0007",
    "m\u0002\u0002CD\u0007a\u0002\u0002DE\u0007k\u0002\u0002EF\u0007f\u0002",
    "\u0002F\u0006\u0003\u0002\u0002\u0002GH\u0007r\u0002\u0002HI\u0007g",
    "\u0002\u0002IJ\u0007c\u0002\u0002JK\u0007m\u0002\u0002KL\u0007a\u0002",
    "\u0002LM\u0007p\u0002\u0002MN\u0007c\u0002\u0002NO\u0007o\u0002\u0002",
    "OP\u0007g\u0002\u0002P\b\u0003\u0002\u0002\u0002QR\u0007{\u0002\u0002",
    "RS\u0007g\u0002\u0002ST\u0007c\u0002\u0002TU\u0007t\u0002\u0002U\n\u0003",
    "\u0002\u0002\u0002VW\u0007u\u0002\u0002WX\u0007g\u0002\u0002XY\u0007",
    "c\u0002\u0002YZ\u0007u\u0002\u0002Z[\u0007q\u0002\u0002[\\\u0007p\u0002",
    "\u0002\\\f\u0003\u0002\u0002\u0002]^\u0007d\u0002\u0002^_\u0007c\u0002",
    "\u0002_`\u0007u\u0002\u0002`a\u0007g\u0002\u0002ab\u0007e\u0002\u0002",
    "bc\u0007c\u0002\u0002cd\u0007o\u0002\u0002de\u0007r\u0002\u0002ef\u0007",
    "a\u0002\u0002fg\u0007f\u0002\u0002gh\u0007c\u0002\u0002hi\u0007v\u0002",
    "\u0002ij\u0007g\u0002\u0002j\u000e\u0003\u0002\u0002\u0002kl\u0007j",
    "\u0002\u0002lm\u0007k\u0002\u0002mn\u0007i\u0002\u0002no\u0007j\u0002",
    "\u0002op\u0007r\u0002\u0002pq\u0007q\u0002\u0002qr\u0007k\u0002\u0002",
    "rs\u0007p\u0002\u0002st\u0007v\u0002\u0002tu\u0007a\u0002\u0002uv\u0007",
    "f\u0002\u0002vw\u0007c\u0002\u0002wx\u0007v\u0002\u0002xy\u0007g\u0002",
    "\u0002y\u0010\u0003\u0002\u0002\u0002z{\u0007v\u0002\u0002{|\u0007g",
    "\u0002\u0002|}\u0007t\u0002\u0002}~\u0007o\u0002\u0002~\u007f\u0007",
    "k\u0002\u0002\u007f\u0080\u0007p\u0002\u0002\u0080\u0081\u0007c\u0002",
    "\u0002\u0081\u0082\u0007v\u0002\u0002\u0082\u0083\u0007k\u0002\u0002",
    "\u0083\u0084\u0007q\u0002\u0002\u0084\u0085\u0007p\u0002\u0002\u0085",
    "\u0086\u0007a\u0002\u0002\u0086\u0087\u0007f\u0002\u0002\u0087\u0088",
    "\u0007c\u0002\u0002\u0088\u0089\u0007v\u0002\u0002\u0089\u008a\u0007",
    "g\u0002\u0002\u008a\u0012\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    "v\u0002\u0002\u008c\u008d\u0007g\u0002\u0002\u008d\u008e\u0007t\u0002",
    "\u0002\u008e\u008f\u0007o\u0002\u0002\u008f\u0090\u0007k\u0002\u0002",
    "\u0090\u0091\u0007p\u0002\u0002\u0091\u0092\u0007c\u0002\u0002\u0092",
    "\u0093\u0007v\u0002\u0002\u0093\u0094\u0007k\u0002\u0002\u0094\u0095",
    "\u0007q\u0002\u0002\u0095\u0096\u0007p\u0002\u0002\u0096\u0097\u0007",
    "a\u0002\u0002\u0097\u0098\u0007t\u0002\u0002\u0098\u0099\u0007g\u0002",
    "\u0002\u0099\u009a\u0007c\u0002\u0002\u009a\u009b\u0007u\u0002\u0002",
    "\u009b\u009c\u0007q\u0002\u0002\u009c\u009d\u0007p\u0002\u0002\u009d",
    "\u0014\u0003\u0002\u0002\u0002\u009e\u009f\u0007j\u0002\u0002\u009f",
    "\u00a0\u0007k\u0002\u0002\u00a0\u00a1\u0007i\u0002\u0002\u00a1\u00a2",
    "\u0007j\u0002\u0002\u00a2\u00a3\u0007r\u0002\u0002\u00a3\u00a4\u0007",
    "q\u0002\u0002\u00a4\u00a5\u0007k\u0002\u0002\u00a5\u00a6\u0007p\u0002",
    "\u0002\u00a6\u00a7\u0007v\u0002\u0002\u00a7\u00a8\u0007a\u0002\u0002",
    "\u00a8\u00a9\u0007o\u0002\u0002\u00a9\u00aa\u0007g\u0002\u0002\u00aa",
    "\u00ab\u0007v\u0002\u0002\u00ab\u00ac\u0007g\u0002\u0002\u00ac\u00ad",
    "\u0007t\u0002\u0002\u00ad\u00ae\u0007u\u0002\u0002\u00ae\u0016\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0007o\u0002\u0002\u00b0\u00b1\u0007",
    "g\u0002\u0002\u00b1\u00b2\u0007o\u0002\u0002\u00b2\u00b3\u0007d\u0002",
    "\u0002\u00b3\u00b4\u0007g\u0002\u0002\u00b4\u00b5\u0007t\u0002\u0002",
    "\u00b5\u00b6\u0007u\u0002\u0002\u00b6\u0018\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0007o\u0002\u0002\u00b8\u00b9\u0007g\u0002\u0002\u00b9",
    "\u00ba\u0007o\u0002\u0002\u00ba\u00bb\u0007d\u0002\u0002\u00bb\u00bc",
    "\u0007g\u0002\u0002\u00bc\u00bd\u0007t\u0002\u0002\u00bd\u00be\u0007",
    "a\u0002\u0002\u00be\u00bf\u0007f\u0002\u0002\u00bf\u00c0\u0007g\u0002",
    "\u0002\u00c0\u00c1\u0007c\u0002\u0002\u00c1\u00c2\u0007v\u0002\u0002",
    "\u00c2\u00c3\u0007j\u0002\u0002\u00c3\u00c4\u0007u\u0002\u0002\u00c4",
    "\u001a\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007j\u0002\u0002\u00c6",
    "\u00c7\u0007k\u0002\u0002\u00c7\u00c8\u0007t\u0002\u0002\u00c8\u00c9",
    "\u0007g\u0002\u0002\u00c9\u00ca\u0007f\u0002\u0002\u00ca\u00cb\u0007",
    "a\u0002\u0002\u00cb\u00cc\u0007u\u0002\u0002\u00cc\u00cd\u0007v\u0002",
    "\u0002\u00cd\u00ce\u0007c\u0002\u0002\u00ce\u00cf\u0007h\u0002\u0002",
    "\u00cf\u00d0\u0007h\u0002\u0002\u00d0\u001c\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0007j\u0002\u0002\u00d2\u00d3\u0007k\u0002\u0002\u00d3",
    "\u00d4\u0007t\u0002\u0002\u00d4\u00d5\u0007g\u0002\u0002\u00d5\u00d6",
    "\u0007f\u0002\u0002\u00d6\u00d7\u0007a\u0002\u0002\u00d7\u00d8\u0007",
    "u\u0002\u0002\u00d8\u00d9\u0007v\u0002\u0002\u00d9\u00da\u0007c\u0002",
    "\u0002\u00da\u00db\u0007h\u0002\u0002\u00db\u00dc\u0007h\u0002\u0002",
    "\u00dc\u00dd\u0007a\u0002\u0002\u00dd\u00de\u0007f\u0002\u0002\u00de",
    "\u00df\u0007g\u0002\u0002\u00df\u00e0\u0007c\u0002\u0002\u00e0\u00e1",
    "\u0007v\u0002\u0002\u00e1\u00e2\u0007j\u0002\u0002\u00e2\u00e3\u0007",
    "u\u0002\u0002\u00e3\u001e\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007",
    "q\u0002\u0002\u00e5\u00e6\u0007z\u0002\u0002\u00e6\u00e7\u0007{\u0002",
    "\u0002\u00e7\u00e8\u0007i\u0002\u0002\u00e8\u00e9\u0007g\u0002\u0002",
    "\u00e9\u00ea\u0007p\u0002\u0002\u00ea\u00eb\u0007a\u0002\u0002\u00eb",
    "\u00ec\u0007w\u0002\u0002\u00ec\u00ed\u0007u\u0002\u0002\u00ed\u00ee",
    "\u0007g\u0002\u0002\u00ee\u00ef\u0007f\u0002\u0002\u00ef \u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007v\u0002\u0002\u00f1\u00f2\u0007t\u0002",
    "\u0002\u00f2\u00f3\u0007g\u0002\u0002\u00f3\u00f4\u0007m\u0002\u0002",
    "\u00f4\u00f5\u0007m\u0002\u0002\u00f5\u00f6\u0007k\u0002\u0002\u00f6",
    "\u00f7\u0007p\u0002\u0002\u00f7\u00f8\u0007i\u0002\u0002\u00f8\u00f9",
    "\u0007a\u0002\u0002\u00f9\u00fa\u0007c\u0002\u0002\u00fa\u00fb\u0007",
    "i\u0002\u0002\u00fb\u00fc\u0007g\u0002\u0002\u00fc\u00fd\u0007p\u0002",
    "\u0002\u00fd\u00fe\u0007e\u0002\u0002\u00fe\u00ff\u0007{\u0002\u0002",
    "\u00ff\"\u0003\u0002\u0002\u0002\u0100\u0101\u0007~\u0002\u0002\u0101",
    "$\u0003\u0002\u0002\u0002\u0102\u0103\u0007.\u0002\u0002\u0103&\u0003",
    "\u0002\u0002\u0002\u0104\u0106\u0007\u000f\u0002\u0002\u0105\u0104\u0003",
    "\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0107\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0007\f\u0002\u0002\u0108(\u0003\u0002",
    "\u0002\u0002\u0109\u010b\u0007/\u0002\u0002\u010a\u0109\u0003\u0002",
    "\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u010d\u0003\u0002",
    "\u0002\u0002\u010c\u010e\t\u0002\u0002\u0002\u010d\u010c\u0003\u0002",
    "\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110*\u0003\u0002",
    "\u0002\u0002\u0111\u0113\n\u0003\u0002\u0002\u0112\u0111\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002",
    "\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115,\u0003\u0002",
    "\u0002\u0002\u0116\u0118\n\u0003\u0002\u0002\u0117\u0116\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0007*\u0002\u0002\u011c\u011d\u0007+\u0002",
    "\u0002\u011d.\u0003\u0002\u0002\u0002\u011e\u0124\u0007$\u0002\u0002",
    "\u011f\u0120\u0007$\u0002\u0002\u0120\u0123\u0007$\u0002\u0002\u0121",
    "\u0123\n\u0004\u0002\u0002\u0122\u011f\u0003\u0002\u0002\u0002\u0122",
    "\u0121\u0003\u0002\u0002\u0002\u0123\u0126\u0003\u0002\u0002\u0002\u0124",
    "\u0122\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125",
    "\u0127\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0127",
    "\u0128\u0007$\u0002\u0002\u01280\u0003\u0002\u0002\u0002\n\u0002\u0105",
    "\u010a\u010f\u0114\u0119\u0122\u0124\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function expeditionsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

expeditionsLexer.prototype = Object.create(antlr4.Lexer.prototype);
expeditionsLexer.prototype.constructor = expeditionsLexer;

Object.defineProperty(expeditionsLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

expeditionsLexer.EOF = antlr4.Token.EOF;
expeditionsLexer.T__0 = 1;
expeditionsLexer.T__1 = 2;
expeditionsLexer.T__2 = 3;
expeditionsLexer.T__3 = 4;
expeditionsLexer.T__4 = 5;
expeditionsLexer.T__5 = 6;
expeditionsLexer.T__6 = 7;
expeditionsLexer.T__7 = 8;
expeditionsLexer.T__8 = 9;
expeditionsLexer.T__9 = 10;
expeditionsLexer.T__10 = 11;
expeditionsLexer.T__11 = 12;
expeditionsLexer.T__12 = 13;
expeditionsLexer.T__13 = 14;
expeditionsLexer.T__14 = 15;
expeditionsLexer.T__15 = 16;
expeditionsLexer.T__16 = 17;
expeditionsLexer.SEP = 18;
expeditionsLexer.NEWLINE = 19;
expeditionsLexer.NUMBER = 20;
expeditionsLexer.TEXT = 21;
expeditionsLexer.INFO = 22;
expeditionsLexer.STRING = 23;

expeditionsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

expeditionsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

expeditionsLexer.prototype.literalNames = [ null, "'expedition_id'", "'peak_id'", 
                                            "'peak_name'", "'year'", "'season'", 
                                            "'basecamp_date'", "'highpoint_date'", 
                                            "'termination_date'", "'termination_reason'", 
                                            "'highpoint_meters'", "'members'", 
                                            "'member_deaths'", "'hired_staff'", 
                                            "'hired_staff_deaths'", "'oxygen_used'", 
                                            "'trekking_agency'", "'|'", 
                                            "','" ];

expeditionsLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                             null, null, null, null, null, 
                                             null, null, null, null, null, 
                                             null, null, null, "SEP", "NEWLINE", 
                                             "NUMBER", "TEXT", "INFO", "STRING" ];

expeditionsLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                         "T__4", "T__5", "T__6", "T__7", 
                                         "T__8", "T__9", "T__10", "T__11", 
                                         "T__12", "T__13", "T__14", "T__15", 
                                         "T__16", "SEP", "NEWLINE", "NUMBER", 
                                         "TEXT", "INFO", "STRING" ];

expeditionsLexer.prototype.grammarFileName = "expeditions.g4";



exports.expeditionsLexer = expeditionsLexer;
