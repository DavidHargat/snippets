#include <stdlib.h>
#include <stdio.h>

#include "readfile.h"

int main(char argc, char **argv){
	
	char *contents = readfile("test.txt");
	
	if(contents != NULL)
		printf("%s", contents);
	else
		printf("%s","Error Reading File\n");

	return 0;
}
